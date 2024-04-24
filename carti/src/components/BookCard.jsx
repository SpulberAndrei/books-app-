export default function BookCard(props) {
  return (
    <div className="BookCard">
      <div className="BookCardContainer">
        <img src={`../images/${props.item.cover}`} />

        <h5 className="bookelements">{props.item.name}</h5>
        <h4 className="bookelements">{props.item.author}</h4>
        <h4 className="bookelements">{props.item.publish}</h4>
        <h4 className="bookelements">{props.item.genre}</h4>
      </div>
    </div>
  );
}
