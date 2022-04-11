import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

function Container() {
  const [label, setLabel] = useState({ label: 'BLAH' });
  return (<div>
    <Flatten label={label} />
    <button onClick={() => setLabel({ ...label })}>Force Render</button>
  </div>)
}

function Flatten(props: { label: { label: string } }) {
  const count = useRef(0);
  count.current += 1;
  return (
    <div>
      <p>Rendered {count.current} times.</p>
      <p>
        With changing label.
        <Counter label={`${props.label.label}_${count.current}`} />
      </p>
      <p>
        With fixed label.
        <Counter label={`${props.label.label}`} />
      </p>
      <p>
        Without label.
        <Counter />
      </p>
      <p>Label: {props.label.label}. Rendered {count.current} times.</p>
    </div>
  );
}

function Counter(props: { label?: string }) {
  const count = useRef(0);
  count.current += 1;
  return (
    <div>
      <p>Label: {props.label ?? ''}. Rendered {count.current} times.</p>
    </div>
  );
}

export default App;
