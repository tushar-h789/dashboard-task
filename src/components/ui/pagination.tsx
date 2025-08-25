type PaginationProps = {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  page,
  pageSize,
  total,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const canPrev = page > 1;
  const canNext = page < totalPages;

  const goTo = (p: number) => {
    const clamped = Math.min(Math.max(1, p), totalPages);
    if (clamped !== page) onPageChange(clamped);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 px-4 py-3 border-t border-gray-100">
      {/* Keep the same text; allow wrapping on small screens */}
      <div className="text-sm text-gray-600 text-center sm:text-left whitespace-normal">
        Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, total)} of {total}
      </div>

      {/* Same button group; just responsive sizing on mobile */}
      <div className="inline-flex w-full sm:w-auto rounded-md shadow-sm" role="group">
        <button
          type="button"
          className={`flex-1 sm:flex-none px-3 py-2 text-sm border border-gray-200 ${
            canPrev
              ? "bg-white text-gray-700 hover:bg-gray-50"
              : "bg-gray-50 text-gray-400 cursor-not-allowed"
          } rounded-l-md`}
          onClick={() => goTo(page - 1)}
          disabled={!canPrev}
          aria-label="Previous page"
        >
          Prev
        </button>

        <span className="px-3 py-2 text-sm bg-white border-t border-b border-gray-200 text-gray-700 text-center">
          {page} / {totalPages}
        </span>

        <button
          type="button"
          className={`flex-1 sm:flex-none px-3 py-2 text-sm border border-gray-200 ${
            canNext
              ? "bg-white text-gray-700 hover:bg-gray-50"
              : "bg-gray-50 text-gray-400 cursor-not-allowed"
          } rounded-r-md`}
          onClick={() => goTo(page + 1)}
          disabled={!canNext}
          aria-label="Next page"
        >
          Next
        </button>
      </div>
    </div>
  );
}
