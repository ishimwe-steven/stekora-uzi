import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBox({ placeholder }) {
  return (
    <label className="search">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input placeholder={placeholder} />
    </label>
  );
}
