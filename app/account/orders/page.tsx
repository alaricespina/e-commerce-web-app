const ORDERS = [
  {
    id: "ORD-2024-001",
    date: "January 30, 2024",
    total: 1199.98,
    status: "Delivered",
    items: [
      {
        name: "Professional Camera",
        quantity: 1,
        price: 999.99,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&h=100&fit=crop",
      },
      {
        name: "Camera Lens",
        quantity: 1,
        price: 199.99,
        image: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "ORD-2024-002",
    date: "January 25, 2024",
    total: 399.98,
    status: "In Transit",
    items: [
      {
        name: "Wireless Headphones",
        quantity: 2,
        price: 199.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "ORD-2024-003",
    date: "January 20, 2024",
    total: 299.99,
    status: "Processing",
    items: [
      {
        name: "Smart Watch",
        quantity: 1,
        price: 299.99,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=100&h=100&fit=crop",
      },
    ],
  },
];

function OrderStatusBadge({ status }: { status: string }) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "in transit":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "processing":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(
        status
      )}`}
    >
      {status}
    </span>
  );
}

export default function OrdersPage() {
  return (
    <div>
      <div className="space-y-6">
        {ORDERS.map((order) => (
          <div
            key={order.id}
            className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden"
          >
            {/* Order Header */}
            <div className="p-6 border-b border-gray-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-sm text-gray-400">Order</span>
                  <h3 className="font-semibold">{order.id}</h3>
                </div>
                <div className="text-right sm:text-left">
                  <span className="text-sm text-gray-400">Placed on</span>
                  <p className="font-medium">{order.date}</p>
                </div>
                <div className="text-right sm:text-left">
                  <span className="text-sm text-gray-400">Total</span>
                  <p className="font-medium">${order.total.toFixed(2)}</p>
                </div>
                <OrderStatusBadge status={order.status} />
              </div>
            </div>

            {/* Order Items */}
            <div className="divide-y divide-gray-800">
              {order.items.map((item, index) => (
                <div key={index} className="p-6 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-400">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-400">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                  <div className="text-right">
                    <button className="text-sm text-blue-500 hover:text-blue-400">
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Actions */}
            <div className="p-6 bg-gray-900/50 flex flex-wrap gap-4">
              <button className="text-sm text-gray-300 hover:text-gray-200">
                Track Order
              </button>
              <button className="text-sm text-gray-300 hover:text-gray-200">
                View Invoice
              </button>
              <button className="text-sm text-gray-300 hover:text-gray-200">
                Contact Support
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
