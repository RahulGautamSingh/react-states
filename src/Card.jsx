function Card(props) {
  return (
    <div
      className="card"
      style={{ backgroundColor: props.color, opacity: props.opacity }}
    ></div>
  );
}

export default Card;

