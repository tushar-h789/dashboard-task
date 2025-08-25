//

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
    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
      <div className="text-sm text-gray-600">
        Showing {(page - 1) * pageSize + 1} to{" "}
        {Math.min(page * pageSize, total)} of {total}
      </div>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          className={`px-3 py-2 text-sm border border-gray-200 ${
            canPrev
              ? "bg-white text-gray-700 hover:bg-gray-50"
              : "bg-gray-50 text-gray-400 cursor-not-allowed"
          } rounded-l-md`}
          onClick={() => goTo(page - 1)}
          disabled={!canPrev}
        >
          Prev
        </button>
        <span className="px-3 py-2 text-sm bg-white border-t border-b border-gray-200 text-gray-700">
          {page} / {totalPages}
        </span>
        <button
          type="button"
          className={`px-3 py-2 text-sm border border-gray-200 ${
            canNext
              ? "bg-white text-gray-700 hover:bg-gray-50"
              : "bg-gray-50 text-gray-400 cursor-not-allowed"
          } rounded-r-md`}
          onClick={() => goTo(page + 1)}
          disabled={!canNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
