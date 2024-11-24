import Button from "../Button";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div role="navigation" aria-label="Pagination">
      <Button
        aria-label="Previous Page"
        label="Prev"
        onClick={() => handlePageChange(currentPage - 1)}
      />{" "}
      <Button
        aria-label="Next Page"
        label="Next"
        onClick={() => handlePageChange(currentPage + 1)}
      />
    </div>
  );
};

export default Pagination;
