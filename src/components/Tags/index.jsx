import "./tags.scss";

function Tags({ tags }) {
  return (
    <div className="fullcard__tags">
      {tags.map((tags, index) => (
        <article key={index} className="tags">
          {tags}
        </article>
      ))}
    </div>
  );
}
export default Tags;
