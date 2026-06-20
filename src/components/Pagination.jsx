import "../styles/pagination.css";

export default function Pagination({ page, totalPages, isFirst, isLast, onPageChange }) {
    if (totalPages === 0 || totalPages === 1) return null;

    const startPage = Math.max(0, page - 1);
    const endPage = Math.min(totalPages - 1, page + 1);
    const pages = [];

    if (startPage > 0) {
        pages.push(0);
        if (startPage > 1) pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    if (endPage < totalPages - 1) {
        if (endPage < totalPages - 2) pages.push("...");
        pages.push(totalPages - 1);
    }

    return (
        <div className="pagination">
            <button
                disabled={isFirst || page === 0}
                onClick={() => onPageChange(page - 1)}
                title="Previous page"
            >
                ← Prev
            </button>

            {pages.map((pageNum, index) => {
                if (pageNum === "...") {
                    return (
                        <span key={`dots-${index}`} style={{ padding: "10px 5px", color: "var(--text)" }}>
                            ...
                        </span>
                    );
                }
                return (
                    <button
                        key={pageNum}
                        className={page === pageNum ? "active" : ""}
                        onClick={() => onPageChange(pageNum)}
                        title={`Go to page ${pageNum + 1}`}
                    >
                        {pageNum + 1}
                    </button>
                );
            })}

            <button
                disabled={isLast || page === totalPages - 1}
                onClick={() => onPageChange(page + 1)}
                title="Next page"
            >
                Next →
            </button>
        </div>
    );
}

