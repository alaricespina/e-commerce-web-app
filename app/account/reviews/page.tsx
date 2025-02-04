interface Review {
  id: number;
  productId: number;
  productName: string;
  productImage: string;
  rating: number;
  date: string;
  content: string;
}

const USER_REVIEWS: Review[] = [
  {
    id: 1,
    productId: 1,
    productName: "Professional Camera",
    productImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&h=100&fit=crop",
    rating: 5,
    date: "January 30, 2024",
    content: "Exceptional camera! The image quality is outstanding and the autofocus system is a game-changer.",
  },
  {
    id: 2,
    productId: 2,
    productName: "Wireless Headphones",
    productImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
    rating: 4,
    date: "January 25, 2024",
    content: "Great sound quality and comfortable to wear. Battery life is impressive. Only downside is they're a bit bulky for travel.",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
      {/* Product Info */}
      <div className="p-6 flex items-center gap-4 border-b border-gray-800">
        <img
          src={review.productImage}
          alt={review.productName}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div>
          <h3 className="font-medium">{review.productName}</h3>
          <p className="text-sm text-gray-400">Reviewed on {review.date}</p>
        </div>
      </div>

      {/* Review Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="text-lg">
            {"★".repeat(review.rating)}
            {"☆".repeat(5 - review.rating)}
          </div>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-400">{review.rating} out of 5</span>
        </div>
        <p className="text-gray-300">{review.content}</p>
      </div>

      {/* Actions */}
      <div className="px-6 py-4 bg-gray-900/50 flex gap-4">
        <button className="text-sm text-blue-500 hover:text-blue-400">
          Edit Review
        </button>
        <button className="text-sm text-red-500 hover:text-red-400">
          Delete Review
        </button>
      </div>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-lg font-medium mb-1">My Reviews</h2>
          <p className="text-sm text-gray-400">
            You have written {USER_REVIEWS.length} reviews
          </p>
        </div>
        <select className="bg-gray-800 text-gray-100 rounded-md border border-gray-700 p-2 text-sm">
          <option value="recent">Most Recent</option>
          <option value="rating-high">Highest Rating</option>
          <option value="rating-low">Lowest Rating</option>
        </select>
      </div>

      <div className="space-y-6">
        {USER_REVIEWS.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* No Reviews State */}
      {USER_REVIEWS.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 mb-4">You haven't written any reviews yet</p>
          <button className="text-blue-500 hover:text-blue-400">
            Browse Products to Review
          </button>
        </div>
      )}
    </div>
  );
}
