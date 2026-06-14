export default function Modal({ title, children }) {
  return (
    <div className="modal">
      <h3>{title}</h3>
      {children}
    </div>
  );
}
