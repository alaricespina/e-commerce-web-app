import Link from "next/link";

const ACCOUNT_TABS = [
  { label: "Profile", href: "/account/profile" },
  { label: "Orders", href: "/account/orders" },
  { label: "Reviews", href: "/account/reviews" },
  { label: "Addresses", href: "/account/addresses" },
  { label: "Payment Methods", href: "/account/payment" },
];

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">My Account</h1>
        <nav className="flex gap-1 border-b border-gray-800">
          {ACCOUNT_TABS.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className="px-4 py-2 text-gray-400 hover:text-gray-200 border-b-2 border-transparent hover:border-gray-700"
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="min-h-[60vh]">{children}</div>
    </div>
  );
}
