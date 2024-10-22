import { FaSearch } from "react-icons/fa";

type GeneralFilterProps = {
  filter: string | number | readonly string[] | undefined;
  setFilter: (filter: string | number | readonly string[] | undefined) => void;
};

export const GeneralFilter = ({ filter, setFilter }: GeneralFilterProps) => {
  return (
    <div className="search-form">
      <FaSearch className="self-center mr-2 ml-2" />
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search Requests"
        className="flex-1 rounded-sm p-2"
      />
    </div>
  );
};
