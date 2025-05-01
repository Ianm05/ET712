import './App.css';
import React, { useState } from 'react';

function App() {
  // State for the slice counter
  const [counter, setCounter] = useState(1);
  // State for toggling read more section
  const [isOpen, setIsOpen] = useState(false);

  const messages = [
    "I think therefore I am",
    "I am therefore I think",
    "I am not therefore I am not"
  ];

  const toggleReadMore = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h1 className="title">Slice App by Ian Martinez</h1>

      <section className="slicewrapper">
        <div className="numberwrapper">
          <div className={counter === 1 ? "active" : ""}><p>1</p></div>
          <div className={counter === 2 ? "active" : ""}><p>2</p></div>
          <div className={counter === 3 ? "active" : ""}><p>3</p></div>
        </div>
        <p className="msg">
          Message {counter} <em>{messages[counter - 1]}</em>
        </p>
        <div className="btngroup">
          <button onClick={() => { if (counter > 1) setCounter(counter - 1); }}>Previous</button>
          <button onClick={() => { if (counter < messages.length) setCounter(counter + 1); }}>Next</button>
        </div>
      </section>

      <h1 className="title">Open and Close Button</h1>
      <div className="info">
        <p><b>Cat (Felis catus)</b>, commonly referred to as the domestic cat or house cat.</p>
        <button className="readmore_btn" onClick={toggleReadMore}>
          {isOpen ? "Hide" : "Read More"}
        </button>
        {isOpen && (
          <section className="hiddentext">
            <p>Cats are small, carnivorous mammals that are often kept as pets. They are known for their independence, curiosity, and playful behavior.</p>
          </section>
        )}
      </div>
    </>
  );
}

export default App;
