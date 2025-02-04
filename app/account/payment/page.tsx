interface PaymentMethod {
  id: number;
  type: "credit" | "paypal";
  default: boolean;
  lastFour?: string;
  expiryDate?: string;
  cardType?: string;
  email?: string;
}

const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 1,
    type: "credit",
    default: true,
    lastFour: "4242",
    expiryDate: "12/25",
    cardType: "Visa",
  },
  {
    id: 2,
    type: "credit",
    default: false,
    lastFour: "1234",
    expiryDate: "09/24",
    cardType: "Mastercard",
  },
  {
    id: 3,
    type: "paypal",
    default: false,
    email: "john.doe@example.com",
  },
];

function PaymentMethodCard({ method }: { method: PaymentMethod }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {method.type === "credit" ? (
                <div className="flex items-center gap-2">
                  <span className="font-medium">{method.cardType}</span>
                  <span className="text-gray-400">•••• {method.lastFour}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="font-medium">PayPal</span>
                  <span className="text-gray-400">{method.email}</span>
                </div>
              )}
              {method.default && (
                <span className="px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                  Default
                </span>
              )}
            </div>
            {method.type === "credit" && (
              <p className="text-sm text-gray-400">Expires {method.expiryDate}</p>
            )}
          </div>
          <div className="flex gap-2">
            <button className="text-sm text-blue-500 hover:text-blue-400">
              Edit
            </button>
            <button className="text-sm text-red-500 hover:text-red-400">
              Remove
            </button>
          </div>
        </div>

        {/* Actions */}
        {!method.default && (
          <button className="text-sm text-blue-500 hover:text-blue-400">
            Set as Default Payment Method
          </button>
        )}
      </div>
    </div>
  );
}

function AddPaymentMethodCard() {
  return (
    <button className="h-full min-h-[120px] w-full bg-gray-900 border border-gray-800 border-dashed rounded-lg p-6 text-center hover:border-gray-700 transition-colors">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">+</span>
        </div>
        <h3 className="font-medium mb-1">Add Payment Method</h3>
        <p className="text-sm text-gray-400">Add a new card or PayPal account</p>
      </div>
    </button>
  );
}

export default function PaymentPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-medium mb-1">Payment Methods</h2>
          <p className="text-sm text-gray-400">
            Manage your saved payment methods
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PAYMENT_METHODS.map((method) => (
          <PaymentMethodCard key={method.id} method={method} />
        ))}
        <AddPaymentMethodCard />
      </div>

      {/* Payment Security Info */}
      <div className="mt-8 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
        <h3 className="text-sm font-medium mb-2">Payment Security</h3>
        <p className="text-sm text-gray-400">
          Your payment information is secured using industry-standard encryption.
          We never store complete credit card numbers and all transactions are
          processed through secure payment providers.
        </p>
      </div>
    </div>
  );
}
