import { useState } from "react";
import Card from "./Card";

function colorGenerator() {
  return "#" + Math.random().toString(16).substr(-6);
}

function Home() {
  let [color, setColor] = useState("#000000");
  let opacityArr = ["50%", "60%", "75%", "90%", "100%"];
  return (
    <div className="e-container" style={{ backgroundColor: color + "1A" }}>
      <h1>Color Palette Generator</h1>
      <button onClick={() => setColor(colorGenerator())}>Generate</button>
      <div className="container">
        {opacityArr.map((elem) => {
          return <Card color={color} opacity={elem} />;
        })}
      </div>
    </div>
  );
}

export default Home;
