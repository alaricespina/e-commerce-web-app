import Link from "next/link";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 transition-transform group-hover:-translate-y-1">
        <div className="aspect-square relative">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
          {product.reviews > 0 && (
            <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded-full text-sm">
              {'★'.repeat(product.rating)}{'☆'.repeat(5-product.rating)}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-400 text-sm mb-2 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">${product.price}</span>
            <span className="text-sm text-gray-400">{product.category}</span>
          </div>
          {product.reviews > 0 && (
            <div className="mt-2 text-sm text-gray-400">
              {product.reviews} reviews
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
