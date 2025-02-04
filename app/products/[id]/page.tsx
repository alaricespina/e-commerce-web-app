import { Product } from "@/app/components/product-card";

const SAMPLE_PRODUCT: Product = {
  id: 1,
  name: "Professional Camera",
  price: 999.99,
  description: "High-end digital camera with 4K video capabilities and advanced autofocus system. Features include:\n\n- 45MP full-frame sensor\n- 4K 60fps video recording\n- Advanced eye-tracking autofocus\n- Weather-sealed body\n- 5-axis image stabilization\n- Dual card slots\n- 3.2-inch tilting touchscreen",
  image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=800&fit=crop",
  category: "Electronics",
  rating: 4,
  reviews: 128,
};

const REVIEWS = [
  {
    id: 1,
    author: "John D.",
    rating: 5,
    date: "2 weeks ago",
    content: "Exceptional camera! The image quality is outstanding and the autofocus system is a game-changer.",
  },
  {
    id: 2,
    author: "Sarah M.",
    rating: 4,
    date: "1 month ago",
    content: "Great camera overall. Battery life could be better but the features make up for it.",
  },
  {
    id: 3,
    author: "Mike R.",
    rating: 4,
    date: "2 months ago",
    content: "Professional quality images and very intuitive controls. Highly recommended for serious photographers.",
  },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Image */}
        <div className="aspect-square relative">
          <img
            src={SAMPLE_PRODUCT.image}
            alt={SAMPLE_PRODUCT.name}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{SAMPLE_PRODUCT.name}</h1>
            <div className="flex items-center gap-4 text-lg">
              <span className="font-bold">${SAMPLE_PRODUCT.price}</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">{SAMPLE_PRODUCT.category}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="text-xl">
              {"★".repeat(SAMPLE_PRODUCT.rating)}
              {"☆".repeat(5 - SAMPLE_PRODUCT.rating)}
            </div>
            <span className="text-gray-400">
              ({SAMPLE_PRODUCT.reviews} reviews)
            </span>
          </div>

          {/* Description */}
          <div className="prose prose-invert">
            <p className="whitespace-pre-line">{SAMPLE_PRODUCT.description}</p>
          </div>

          {/* Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <select className="bg-gray-800 text-gray-100 rounded-md border border-gray-700 p-2">
                {[1, 2, 3, 4, 5].map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Add to Cart
              </button>
            </div>
            <button className="w-full border border-gray-700 hover:border-gray-600 text-gray-300 font-semibold py-3 px-6 rounded-lg transition-colors">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section className="border-t border-gray-800 pt-12">
        <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
        <div className="space-y-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="border-b border-gray-800 pb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">{review.author}</h3>
                  <p className="text-gray-400 text-sm">{review.date}</p>
                </div>
                <div className="text-lg">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
              </div>
              <p className="text-gray-300">{review.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
