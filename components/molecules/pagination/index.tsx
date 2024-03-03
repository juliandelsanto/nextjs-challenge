import { useState } from "react";
import PaginationProps from "@/types/Pagination";

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
}: PaginationProps) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center space-x-4 mt-8">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
      >
        Anterior
      </button>
      {/* <ul className="flex space-x-4">
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            onClick={() => handlePageClick(number)}
                            className={`px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 ${
                                number === currentPage ? 'font-bold' : ''
                            }`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul> */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
      >
        Siguiente
      </button>
    </nav>
  );
};

export default Pagination;
