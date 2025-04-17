"use client";

import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";
import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = products.find((p) => p.id === id);
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!product) {
    notFound();
  }

  const addToCart = () => {
    if (!selectedSize) return;
    setIsAnimating(true);
    dispatch({ type: "ADD_TO_CART", payload: product });

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;

    const { left, top, width, height } =
      imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="relative w-full rounded-lg cursor-zoom-in"
          ref={imageContainerRef}
          onMouseEnter={() => setShowZoom(true)}
          onMouseLeave={() => setShowZoom(false)}
          onMouseMove={handleMouseMove}
        >
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className={`object-contain rounded-lg transition-transform duration-200 ${
                !imageLoaded ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoaded(true)}
              priority
              style={{
                transform: showZoom ? "scale(2)" : "scale(1)",
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
          </div>

          <div className="border-t border-b py-4">
            <p className="text-2xl font-bold mb-4">
              ${product.price.toFixed(2)}
            </p>
            <button
              onClick={addToCart}
              disabled={!selectedSize || isAnimating}
              className={`w-full bg-blue-600 text-white py-3 rounded-md transition-all duration-300 transform ${
                isAnimating ? "animate-addToCart" : "hover:bg-blue-700"
              } ${!selectedSize ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isAnimating ? "Added to Cart! ✓" : "Add to Cart"}
            </button>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Available Sizes</h2>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md transition-colors ${
                    selectedSize === size
                      ? "border-blue-600 text-blue-600"
                      : "hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {!selectedSize && (
              <p className="text-red-500 text-sm mt-2">Please select a size</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
