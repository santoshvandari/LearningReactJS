import React from 'react';

const Pagination = ({ currentPage, totalPages }) => {
    // const handlePageChange = (page) => {
    //     if (page >= 1 && page <= totalPages) {
    //         onPageChange(page);
    //     }
    // };

    return (
        <div className="flex justify-center items-center space-x-2 py-4">
            <button
                // onClick={() => handlePageChange(currentPage - 1)}
                className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50"
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span className="text-white">
                Page {currentPage} of {totalPages}
            </span>
            <button
                // onClick={() => handlePageChange(currentPage + 1)}
                className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50"
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
