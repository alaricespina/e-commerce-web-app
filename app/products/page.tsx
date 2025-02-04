import { Product, ProductCard } from "@/app/components/product-card";

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Professional Camera",
    price: 999.99,
    description: "High-end digital camera with 4K video capabilities and advanced autofocus system.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4,
    reviews: 128,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 199.99,
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 5,
    reviews: 256,
  },
  {
    id: 3,
    name: "Designer Watch",
    price: 299.99,
    description: "Elegant timepiece with premium leather strap and minimalist design.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Accessories",
    rating: 4,
    reviews: 89,
  },
  {
    id: 4,
    name: "Smart Home Speaker",
    price: 149.99,
    description: "Voice-controlled smart speaker with premium sound quality.",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4,
    reviews: 156,
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 129.99,
    description: "Lightweight and breathable running shoes with superior cushioning.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    category: "Sports",
    rating: 5,
    reviews: 312,
  },
  {
    id: 6,
    name: "Coffee Maker",
    price: 79.99,
    description: "Programmable coffee maker with thermal carafe and auto-shutoff.",
    image: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=500&h=500&fit=crop",
    category: "Home & Living",
    rating: 4,
    reviews: 95,
  },
  {
    id: 7,
    name: "Laptop Backpack",
    price: 59.99,
    description: "Water-resistant backpack with dedicated laptop compartment and USB charging port.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "Fashion",
    rating: 4,
    reviews: 167,
  },
  {
    id: 8,
    name: "Smart Watch",
    price: 249.99,
    description: "Feature-rich smartwatch with health tracking and notifications.",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4,
    reviews: 203,
  },
];

export default function ProductsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">All Products</h1>
        <p className="text-gray-400">{SAMPLE_PRODUCTS.length} products</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
