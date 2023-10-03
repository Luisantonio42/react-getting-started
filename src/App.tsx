import React from "react";
import "./App.css";

import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";
import Header from "./components/Header";
import Concept from "./components/Concept";

const concepts = [
  {
    id: Math.random().toString(),
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    id: Math.random().toString(),
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    id: Math.random().toString(),
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ul id="concepts">
        {concepts.map((concept) => {
          return (
            <Concept
              key={concept.id}
              image={concept.image}
              title={concept.title}
              description={concept.description}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
