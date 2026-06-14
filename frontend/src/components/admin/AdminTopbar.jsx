import SearchBox from "./SearchBox";

export default function AdminTopbar({ title }) {
  return (
    <div className="topbar">
      <h1>{title}</h1>
      <SearchBox placeholder="Search admin data..." />
    </div>
  );
}
