// Fonction qui crée un composant "Title"
function Title({ title, location }) {
  return (
    <div className="fullcard__title">
      <h2 className="title">{title}</h2>
      <h3 className="location">{location}</h3>
    </div>
  );
}
export default Title;
