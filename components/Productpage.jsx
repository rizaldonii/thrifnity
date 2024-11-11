"use client";

import Image from 'next/image';
import { useState } from 'react';

const ProductPage = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const images = [
        "/images/products/product1.png",
        "/images/products/product2.png",
        "/images/products/product3.png",
        "/images/products/product4.png",
        "/images/products/product5.png",
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex">
                {/* Image Gallery */}
                <div className="w-1/2 pr-4">
                    <Image
                        src={images[selectedImage]}
                        alt="Asics Jersey"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover"
                    />
                    <div className="flex mt-4 space-x-2">
                        {images.map((img, index) => (
                            <button key={index} onClick={() => setSelectedImage(index)}>
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    width={80}
                                    height={80}
                                    className={`rounded-lg ${selectedImage === index ? 'border-2 border-gray-800' : ''}`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

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

                    <div className="border-t border-b py-4">
                        <p className="text-gray-700">Asics vintage 90s - yellow line<br />Size XL</p>
                        <p className="text-gray-700">Length 71cm<br />Pit to pit 60cm<br />Sleeve 58</p>
                    </div>
                    <p className="text-gray-700">Very good condition, it would be a shame to miss it</p>
                </div>
            </div>

            {/* Store Info */}
            <div className="mt-6 border-t pt-4">
                <p className="text-sm font-semibold">6.cents &bull; Verified Store</p>
                <p className="text-sm text-gray-500">Surabaya</p>
                <p className="text-sm text-gray-500 mt-2">Pengiriman: Dikirim dari Surabaya, Rp 9.999</p>
            </div>
        </div>
    );
};

export default ProductPage;
