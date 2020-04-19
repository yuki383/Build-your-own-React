/** @jsx createElement */
import { createElement, useState, render } from "./didact";

function Counter() {
  const [state, setState] = useState(1);
  return <h1 onClick={() => setState((c) => c + 1)}>Count: {state}</h1>;
}

const array = ["apple", "banana", "strawberry"];
function Fruits() {
  return (
    <ul>
      {array.map((v) => {
        return <li>{v}</li>;
      })}
      <div>hoge</div>
    </ul>
  );
}

const container = document.getElementById("root");
const element = (
  <div>
    <h1>hogefuga</h1>
    <Fruits />
  </div>
);
render(element, container);
