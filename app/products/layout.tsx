import { ReactNode } from "react";

const CATEGORIES = [
  "All Categories",
  "Electronics",
  "Fashion",
  "Home & Living",
  "Sports",
  "Books",
  "Beauty",
  "Toys",
];

const PRICE_RANGES = [
  { label: "Under $25", value: "0-25" },
  { label: "$25 to $50", value: "25-50" },
  { label: "$50 to $100", value: "50-100" },
  { label: "$100 to $200", value: "100-200" },
  { label: "Over $200", value: "200+" },
];

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Highest Rated", value: "rating-desc" },
  { label: "Most Reviewed", value: "reviews-desc" },
];

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-gray-800 pb-6 mb-6 last:border-none">
      <h3 className="font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-64 flex-shrink-0">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 sticky top-4">
          {/* Sort */}
          <FilterSection title="Sort By">
            <select className="w-full bg-gray-800 text-gray-100 rounded-md border border-gray-700 p-2">
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FilterSection>

          {/* Categories */}
          <FilterSection title="Categories">
            <div className="space-y-2">
              {CATEGORIES.map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded bg-gray-800 border-gray-700 text-blue-600"
                  />
                  <span className="ml-2 text-gray-300">{category}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Price Range */}
          <FilterSection title="Price Range">
            <div className="space-y-2">
              {PRICE_RANGES.map((range) => (
                <label key={range.value} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded bg-gray-800 border-gray-700 text-blue-600"
                  />
                  <span className="ml-2 text-gray-300">{range.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Rating Filter */}
          <FilterSection title="Rating">
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded bg-gray-800 border-gray-700 text-blue-600"
                  />
                  <span className="ml-2 text-gray-300">
                    {rating}+ {"★".repeat(rating)}
                    {"☆".repeat(5 - rating)}
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
