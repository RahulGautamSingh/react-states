function Card(props) {
  return (
    <>
      <div
        className="card card1"
        style={{ backgroundColor: props.color }}
      ></div>
      <div
        className="card card2"
        style={{ backgroundColor: props.color }}
      ></div>
      <div
        className="card card3"
        style={{ backgroundColor: props.color }}
      ></div>
      <div
        className="card card4"
        style={{ backgroundColor: props.color }}
      ></div>
      <div
        className="card card5"
        style={{ backgroundColor: props.color }}
      ></div>
    </>
  );
}

export default Card;
