import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function Home({
  searchParams,
}: {
  searchParams: { category: string | undefined };
}) {
  const filteredProducts = searchParams.category
    ? products.filter((product) => product.category === searchParams.category)
    : products;

  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">
        {searchParams.category
          ? `${
              searchParams.category.charAt(0).toUpperCase() +
              searchParams.category.slice(1)
            }'s Collection`
          : "Featured Products"}
      </h2>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="break-inside-avoid">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </main>
  );
}
