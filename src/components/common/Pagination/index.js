import Button from "../Button";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <>
      <Button label="Prev" onClick={() => handlePageChange(currentPage - 1)} />{" "}
      <Button label="Next" onClick={() => handlePageChange(currentPage + 1)} />
    </>
  );
};

export default Pagination;
