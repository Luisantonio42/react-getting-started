import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Concept from "./components/Concept";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";
import { CORE_CONCEPTS } from "./data";

const App: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState(1);
  function handleSelect(selectedButton: number) {
    // selectedButton => 1:components, 2:jsx, 3:props, 4:state
    setSelectedTopic(selectedButton);

  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic-1].title}</h3>
        <p>{EXAMPLES[selectedTopic-1].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic-1].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => {
              return <Concept key={concept.title} {...concept} />;
            })}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 1}
              onSelect={() => handleSelect(1)}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 2}
              onSelect={() => handleSelect(2)}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 3}
              onSelect={() => handleSelect(3)}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 4}
              onSelect={() => handleSelect(4)}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
};

export default App;
