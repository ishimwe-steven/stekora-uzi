export default function CourseCard({ category, title, lessons, text }) {
  return (
    <article className="card course">
      <span>{category}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <small>{lessons} lessons</small>
      <button>Learn More</button>
    </article>
  );
}
