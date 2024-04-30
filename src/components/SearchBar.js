function SearchBar({ handleClick, handleChange, searchTerm }) {
  console.log(searchTerm);
  return (
    <div className="search-container">
      <div className="searchBar">
        <input
          className="search"
          value={searchTerm}
          placeholder="Search ....."
          onChange={handleChange}
        />
        <i id="search" className="bx bx-search" onClick={handleClick}></i>
      </div>
    </div>
  );
}
export default SearchBar;
