const CART_ITEMS = [
  {
    id: 1,
    name: "Professional Camera",
    price: 999.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 199.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
  },
];

function CartItem({
  id,
  name,
  price,
  quantity,
  image,
}: {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-800 last:border-none">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-400">${price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-1 hover:bg-gray-800 rounded">
          <span className="sr-only">Decrease quantity</span>
          <span className="block w-6 h-6 text-center">−</span>
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button className="p-1 hover:bg-gray-800 rounded">
          <span className="sr-only">Increase quantity</span>
          <span className="block w-6 h-6 text-center">+</span>
        </button>
      </div>
      <div className="text-right min-w-[100px]">
        <div className="font-semibold">${(price * quantity).toFixed(2)}</div>
        <button className="text-sm text-red-500 hover:text-red-400">
          Remove
        </button>
      </div>
    </div>
  );
}

export default function CartPage() {
  const subtotal = CART_ITEMS.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 15.0;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            {CART_ITEMS.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 sticky top-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-800 pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
