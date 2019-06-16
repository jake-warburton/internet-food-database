import React, { useState, useEffect } from "react";
import { useTrail, animated } from "react-spring";
import { view } from "react-easy-state";
import "./style.css";

import SearchStore from "../../../store/search";

const config = { mass: 2, tension: 3800, friction: 100 };

const OneResult = (name, tags, link, as) => (
  <div className="one-recipe-result-holder">{name}</div>
);

function index() {
  const { filteredSearchResults } = SearchStore;
  let items = [];
  if (filteredSearchResults.status === 1) {
    items = filteredSearchResults.recipesResults.filteredResults;
  }

  const [toggle, set] = useState(true);

  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? `auto` : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  let displaySearchResults = false;
  if (filteredSearchResults.status === 1) {
    displaySearchResults = true;
  }

  useEffect(() => set(state => displaySearchResults));

  return (
    <>
      {trail.map(({ x, height, ...rest }, resultKey) => {
        return (
          <animated.div
            key={items[resultKey].meta.slug}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.div style={{ height }}>
              {OneResult(
                items[resultKey].meta.name,
                items[resultKey].meta.tags,
                items[resultKey].link,
                items[resultKey].as,
              )}
            </animated.div>
          </animated.div>
        );
      })}
    </>
  );
}

export default view(index);
