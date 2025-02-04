import { FeaturedProducts } from "./components/featured-products";

const CATEGORIES = [
  {
    name: "Electronics",
    description: "Latest gadgets and devices",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=300&fit=crop",
  },
  {
    name: "Fashion",
    description: "Trendy clothing and accessories",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=300&fit=crop",
  },
  {
    name: "Home & Living",
    description: "Furniture and home decor",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&h=300&fit=crop",
  },
  {
    name: "Sports",
    description: "Equipment and sportswear",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[500px] -mt-8 mb-12">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=500&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Amazing Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Shop the latest trends with our curated collection
            </p>
            <a
              href="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <a
              key={category.name}
              href={`/products?category=${category.name.toLowerCase()}`}
              className="group relative block h-48 overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-sm text-gray-300">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />
    </div>
  );
}
