import * as React from "react";
import "./App.css";

// Daumenregel: Wenn eine Variable nichts aus dem Funktionenskörper benötigt (z.B. Parameter), deklariere sie außerhalb
// Dadurch wird sie nicht bei jedem Funktionsaufruf neu definiert.
const title = "react";

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
