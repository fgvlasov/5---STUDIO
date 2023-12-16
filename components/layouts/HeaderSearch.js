const HeaderSearch = ({ toggleSearch }) => {
  return (
    <div className="axil-search-area">
      <form action="#" className="axil-searchbar w-100">
        <div className="search-field">
          <input type="text" placeholder="Search Here..." />
          <button className="navbar-search-btn" type="button">
            <i className="fal fa-search"></i>
          </button>
        </div>
        <button className="navbar-search-close" onClick={toggleSearch}>
          <i className="fal fa-times"/>
        </button>
      </form>
    </div>
  );
};

export default HeaderSearch;
