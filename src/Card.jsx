function Card(props) {
  return (
   <>
      <div
        className="card" id="card1"
        style={{ backgroundColor: props.color }}
      ></div>
      <div
        className="card "id="card2"
        style={{ backgroundColor: props.color }}
      ></div>
      <div
        className="card "id="card3"
        style={{ backgroundColor: props.color }}
      ></div>
      <div
        className="card "id="card4"
        style={{ backgroundColor: props.color }}
      ></div>
      <div
        className="card"id="card5"
        style={{ backgroundColor: props.color }}
      ></div>
 </>
  );
}

export default Card;
