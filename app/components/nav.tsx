"use client";
import Link from 'next/link';
import { useState } from "react";

const MainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/cart", label: "Cart" },
];

const AccountNavLinks = [
  { href: "/account/profile", label: "Profile" },
  { href: "/account/orders", label: "Orders" },
  { href: "/account/reviews", label: "Reviews" },
  { href: "/account/addresses", label: "Addresses" },
  { href: "/account/payment", label: "Payment Methods" },
  { href: "/auth/login", label: "Sign Out" },
];

export function Nav() {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              href="/"
              className="flex items-center px-2 text-gray-50 font-semibold text-lg"
            >
              E-Commerce
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {MainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-gray-50"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Account Menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="relative">
              <button
                onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                className="flex items-center gap-2 text-gray-300 hover:text-gray-50"
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium">John Doe</span>
              </button>

              {/* Account Dropdown */}
              {isAccountMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-lg py-1">
                  {AccountNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-gray-50 hover:bg-gray-800"
                      onClick={() => setIsAccountMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
              className="text-gray-300 hover:text-gray-50"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isAccountMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {MainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-gray-50 hover:bg-gray-800"
                onClick={() => setIsAccountMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-800">
            <div className="px-4 py-2">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-50">
                    John Doe
                  </div>
                  <div className="text-sm text-gray-400">
                    john.doe@example.com
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              {AccountNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-gray-50 hover:bg-gray-800"
                  onClick={() => setIsAccountMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
