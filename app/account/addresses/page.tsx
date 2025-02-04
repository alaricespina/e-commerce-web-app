interface Address {
  id: number;
  type: "shipping" | "billing";
  default: boolean;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}

const USER_ADDRESSES: Address[] = [
  {
    id: 1,
    type: "shipping",
    default: true,
    name: "John Doe",
    street: "123 Main Street, Apt 4B",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
    phone: "+1 (555) 123-4567",
  },
  {
    id: 2,
    type: "billing",
    default: true,
    name: "John Doe",
    street: "456 Park Avenue",
    city: "New York",
    state: "NY",
    zipCode: "10022",
    country: "United States",
    phone: "+1 (555) 987-6543",
  },
];

function AddressCard({ address }: { address: Address }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium">{address.type === "shipping" ? "Shipping" : "Billing"} Address</h3>
              {address.default && (
                <span className="px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                  Default
                </span>
              )}
            </div>
            <p className="text-sm text-gray-400">
              {address.name}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="text-sm text-blue-500 hover:text-blue-400">
              Edit
            </button>
            <button className="text-sm text-red-500 hover:text-red-400">
              Delete
            </button>
          </div>
        </div>

        {/* Address Details */}
        <div className="space-y-1 text-gray-300">
          <p>{address.street}</p>
          <p>{address.city}, {address.state} {address.zipCode}</p>
          <p>{address.country}</p>
          <p className="text-gray-400">{address.phone}</p>
        </div>

        {/* Actions */}
        {!address.default && (
          <button className="mt-4 text-sm text-blue-500 hover:text-blue-400">
            Set as Default {address.type === "shipping" ? "Shipping" : "Billing"} Address
          </button>
        )}
      </div>
    </div>
  );
}

function AddAddressCard() {
  return (
    <button className="h-full min-h-[200px] w-full bg-gray-900 border border-gray-800 border-dashed rounded-lg p-6 text-center hover:border-gray-700 transition-colors">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">+</span>
        </div>
        <h3 className="font-medium mb-1">Add New Address</h3>
        <p className="text-sm text-gray-400">
          Add a new shipping or billing address
        </p>
      </div>
    </button>
  );
}

export default function AddressesPage() {
  const shippingAddresses = USER_ADDRESSES.filter(
    (addr) => addr.type === "shipping"
  );
  const billingAddresses = USER_ADDRESSES.filter(
    (addr) => addr.type === "billing"
  );

  return (
    <div className="space-y-8">
      {/* Shipping Addresses */}
      <section>
        <h2 className="text-lg font-medium mb-4">Shipping Addresses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shippingAddresses.map((address) => (
            <AddressCard key={address.id} address={address} />
          ))}
          <AddAddressCard />
        </div>
      </section>

      {/* Billing Addresses */}
      <section>
        <h2 className="text-lg font-medium mb-4">Billing Addresses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {billingAddresses.map((address) => (
            <AddressCard key={address.id} address={address} />
          ))}
          <AddAddressCard />
        </div>
      </section>
    </div>
  );
}
