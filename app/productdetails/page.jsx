"use client";

import ImageGallery from "@/components/ImageGallery";

const ProductPage = () => {
    const images = [
        "/images/products/product1.png",
        "/images/products/product2.png",
        "/images/products/product3.png",
        "/images/products/product4.png",
        "/images/products/product5.png",
    ];

    return (
        <div className="max-w-4xl mx-auto p-6 border-b border-gray-300">
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
                    <button className="w-full border border-gray-300 py-2 rounded-lg font-semibold mt-2">
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
                    <div className="mt-6 border-t border-gray-300">
                        <p className="text-base text-black mt-2 font-semibold">Pengiriman</p>
                        <p className="text-sm text-gray-600">Dikirim dari Surabaya <br />Rp 9.999</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
