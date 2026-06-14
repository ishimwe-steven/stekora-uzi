import { Search } from "lucide-react";

export default function SearchBox({ placeholder }) {
  return (
    <label className="search">
      <Search size={18} />
      <input placeholder={placeholder} />
    </label>
  );
}
