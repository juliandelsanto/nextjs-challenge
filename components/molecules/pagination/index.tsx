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
    <nav className="flex justify-center space-x-6 mt-8 items-center w-full">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 border border-solid ${currentPage === 1 ? 'border-gray-400 text-gray-400' : 'border-gray-200 text-gray-200 hover:border-[#00C8D3]'} rounded-md transition duration-200`}
      >
        Anterior
      </button>
      <p className="">{currentPage}</p>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2  border border-solid border-gray-200 text-gray-200 rounded-md hover:border-[#00C8D3] transition duration-200"
      >
        Siguiente
      </button>
    </nav>
  );
};

export default Pagination;
