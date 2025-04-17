"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import Cart from "./Cart";

export default function Navbar() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const getLinkClassName = (category?: string) => {
    const isActive = category ? currentCategory === category : !currentCategory;
    return `px-4 py-2 rounded-full transition-all duration-300 ${
      isActive
        ? "bg-white text-indigo-600 shadow-md hover:shadow-lg"
        : "text-white/90 hover:bg-white/10 hover:text-white"
    }`;
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 shadow-xl sticky top-0 z-40 border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="text-3xl font-black text-white hover:text-white/90 transition-colors flex items-center gap-4"
            >
              <span className="text-4xl">✨</span>
              <span className="font-black tracking-tight hidden sm:inline bg-gradient-to-r from-white via-white/95 to-white/90 text-transparent bg-clip-text">
                Fashion Store
              </span>
            </Link>

            <div className="flex items-center gap-8">
              <div className="flex items-center space-x-2 bg-white/10 p-2 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
                <Link href="/" className={getLinkClassName()}>
                  All
                </Link>
                <Link href="/?category=men" className={getLinkClassName("men")}>
                  Men
                </Link>
                <Link
                  href="/?category=women"
                  className={getLinkClassName("women")}
                >
                  Women
                </Link>
              </div>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-3 text-white hover:text-white/80 transition-all duration-300 hover:bg-white/10 rounded-full group hover:scale-105"
                aria-label="Shopping Cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-indigo-600 text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-xl border border-indigo-100 transition-all duration-300 animate-scaleIn group-hover:scale-110 group-hover:ring-2 ring-white/20">
                    {state.items.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
    </>
  );
}
