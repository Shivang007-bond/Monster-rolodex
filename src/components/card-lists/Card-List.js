import Card from "../card/Card";
import "./Card-List.css";

const CardList = ({ monsters }) => {
  return (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
  )
};

export default CardList;
