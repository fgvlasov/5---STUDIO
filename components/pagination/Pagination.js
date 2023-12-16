const Pagination = ({ totalPages, pageNumber, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="post-pagination">
      <nav className="navigation pagination">
        <div className="nav-links">
          <ul className="page-numbers">
            {pages.map((num) => (
              <li key={num}>
                <button
                  className={`page-numbers ${
                    pageNumber === num ? "current" : ""
                  }`}
                  onClick={() => handleClick(num)}
                >
                  {num}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
