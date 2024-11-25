"use client";

import Carousel from "@/components/Carousel";
import ProductCard from "@/components/card/ProductCard";
import NearestThriftCard from "@/components/card/NearestThriftCard";

const product = {
  image: "/images/products/product1.png",
  name: "Asics Men's Black & Yellow Jersey",
  price: "Rp 300.000",
  size: "Size: M",
};

export default function Home() {
  return (
    <main>
      <div className="max-w-6xl mx-auto p-6">
        {/* Carousel */}
        <Carousel />

        {/* Popular Thrift */}
        <div className="mt-6">
          <h1 className="text-2xl font-bold">Thrift Populer!</h1>
          <div className="mt-3 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
          </div>
        </div>

        {/* Nearest Thrift */}
        <div className="min-h-screen bg-gray-100 py-10">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-2">Nearest Thrift</h1>
            <NearestThriftCard />
          </div>
        </div>
      </div>
    </main>
  );
}