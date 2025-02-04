import Link from "next/link";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Professional Camera",
    price: 999.99,
    description: "High-end digital camera for photography enthusiasts",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 199.99,
    description: "Premium noise-cancelling wireless headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Designer Watch",
    price: 299.99,
    description: "Elegant timepiece with premium materials",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Accessories",
  },
];

export function FeaturedProducts() {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURED_PRODUCTS.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group"
          >
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 transition-transform group-hover:-translate-y-1">
              <div className="aspect-square relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${product.price}</span>
                  <span className="text-sm text-gray-400">{product.category}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
