function NavigationBar({
    currentPage,
    totalPages,
    setCurrentPage
}) {

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="pagination-bx m-t30">
                <ul className="pagination">

                    <li
                        className={`previous ${
                            currentPage === 1 ? "disabled" : ""
                        }`}
                    >
                        <a
                            href="javascript:void(0);"
                            onClick={() =>
                                currentPage > 1 &&
                                setCurrentPage(currentPage - 1)
                            }
                        >
                            <i className="ti-arrow-left"></i>
                            {" "}Prev
                        </a>
                    </li>

                    {pageNumbers.map((page) => (
                        <li
                            key={page}
                            className={
                                currentPage === page
                                    ? "active"
                                    : ""
                            }
                        >
                            <a
                                href="javascript:void(0);"
                                onClick={() =>
                                    setCurrentPage(page)
                                }
                            >
                                {page}
                            </a>
                        </li>
                    ))}

                    <li
                        className={`next ${
                            currentPage === totalPages
                                ? "disabled"
                                : ""
                        }`}
                    >
                        <a
                            href="javascript:void(0);"
                            onClick={() =>
                                currentPage < totalPages &&
                                setCurrentPage(currentPage + 1)
                            }
                        >
                            Next{" "}
                            <i className="ti-arrow-right"></i>
                        </a>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default NavigationBar;