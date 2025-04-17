"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the link navigation when clicking the button
    setIsAnimating(true);
    dispatch({ type: "ADD_TO_CART", payload: product });
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <Link
      href={`/product/${product.id}`}
      className={`block bg-white overflow-hidden transition-transform duration-300 ${
        isAnimating ? "scale-105" : ""
      }`}
    >
      <div className="relative group overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-semibold text-lg truncate">
            {product.name}
          </h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-white font-bold">
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={addToCart}
              className={`bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 
                  transition-all duration-300 transform active:scale-95 text-sm ${
                    isAnimating ? "animate-addToCart" : ""
                  }`}
              disabled={isAnimating}
            >
              {isAnimating ? "Added! ✓" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
