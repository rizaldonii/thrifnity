"use client";

import ProductCard from "@/components/card/ProductCard";
import ImageGallery from "@/components/ImageGallery";

const ProductPage = () => {
    const images = [
        "/images/products/product1.png",
        "/images/products/product2.png",
        "/images/products/product3.png",
        "/images/products/product4.png",
        "/images/products/product5.png",
    ];

    const product = {
        image: "/images/products/product1.png",
        name: "Asics Men's Black & Yellow Jersey",
        price: "Rp 300.000",
        size: "Size: M",
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex">
                {/* Image Gallery */}
                <ImageGallery images={images} />

                {/* Product Details */}
                <div className="w-1/2 pl-4 space-y-4">
                    <h1 className="text-2xl font-semibold">Asics Men's Black & Yellow Jersey</h1>
                    <p className="text-xl font-bold text-custom-sage">Rp 300.000</p>
                    <p className="text-sm text-gray-500">Size: M &bull; Kondisi Lorem Ipsum</p>

                    <button className="w-full bg-custom-sage text-white py-2 rounded-lg font-semibold hover:bg-dark-green-600">
                        Beli Sekarang
                    </button>
                    <button className="w-full border border-gray-400 py-2 rounded-lg font-semibold mt-2">
                        + Keranjang
                    </button>

                    <div className="border-t border-b border-gray-300 py-4">
                        <p className="text-gray-700">
                            Asics vintage 90s - yellow line<br />Size XL<br />
                            Length 71cm<br />Pit to pit 60cm<br />Sleeve 58 <br />
                            Very good condition, it would be a shame to miss it</p>
                    </div>
                    {/* Store Info */}
                    <div className="mt-6">
                        <p className="text-sm font-semibold">6.cents &bull; Verified Store</p>
                        <p className="text-sm text-gray-500">Surabaya</p>
                    </div>
                    {/* Shipping Info */}
                    <div className="mt-6 border-t border-gray-300">
                        <h2 className="text-base text-black mt-2 font-semibold">Pengiriman</h2>
                        <p className="text-sm text-gray-600">Dikirim dari Surabaya <br />Rp 9.999</p>
                    </div>
                </div>
            </div>
            <div className="mb-4 mt-4 border-b border-gray-300"></div>
            <h2 className="text-xl font-semibold mb-2">Lainnya dari Seller</h2>
            <ProductCard product={product} />
            <div className="flex">
                <div className="w-1/3 pr-4">
                    <h2 className="text-xl font-semibold mb-2">Review Toko</h2>
                </div>
                <div className="w-2/3 pr-4">
                    <h2 className="text-xl font-semibold mb-2">Review Toko</h2>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
