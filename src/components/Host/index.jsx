import "./host.scss";

function Host({ name, picture }) {
  return (
    <div className="fullcard__host">
      <p className="host__p">{name}</p>
      <div className="host">
        <img
          alt="Propriétaire du logement"
          src={picture}
          className="host__img"
        />
      </div>
    </div>
  );
}
export default Host;
