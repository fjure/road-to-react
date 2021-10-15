import * as React from "react";
import "./App.css";

// Daumenregel: Wenn eine Variable nichts aus dem Funktionenskörper benötigt (z.B. Parameter), deklariere sie außerhalb
// Dadurch wird sie nicht bei jedem Funktionsaufruf neu definiert.
const welcome = {
  greeting: "Hey",
  title: "React",
};

function getTitle(title) {
  return title;
}

function App() {
  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}!
      </h1>
      <h1>Hello {getTitle("title")}</h1>

      {/* htmlFor spiegelt das for Attribut aus HTML wieder, so wie className statt class und onClick statt onclick*/}
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
