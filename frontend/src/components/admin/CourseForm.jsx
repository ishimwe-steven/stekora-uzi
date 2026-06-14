export default function CourseForm() {
  return (
    <form className="form">
      <input placeholder="Course title" />
      <input placeholder="Category" />
      <textarea placeholder="Description" rows="4" />
      <input placeholder="Image URL" />
      <button className="primary" type="button">Save Course</button>
    </form>
  );
}
