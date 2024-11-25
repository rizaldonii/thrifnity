import React from "react";

const NearestThriftCard = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-lg p-4 max-w-md">
            {/* Gambar Produk */}
            <div className="flex-shrink-0">
                <img
                    src="/images/products/product6.png" // Ganti dengan URL gambar yang sesuai
                    alt="Baju Mekanik"
                    className="w-32 h-32 object-cover rounded-lg"
                />
            </div>

            {/* Deskripsi Produk */}
            <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                    Baju Mekanik Lengan Pendek T-Shirt Cotton
                </h3>
                <p className="text-sm text-gray-600">30% OFF, BLACK</p>
                <p className="text-sm text-gray-600">
                    Lokasi: Tunjungan Plaza - 3 Km
                </p>
                <p className="text-custom-sage font-bold mt-2">Rp 60.000</p>
            </div>
        </div>
    );
};

export default NearestThriftCard;