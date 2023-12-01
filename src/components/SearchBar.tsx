type SearchBarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  const filterHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <p>
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={filterHandler}
      />
    </p>
  );
}
