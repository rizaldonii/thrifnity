import Image from 'next/image';

const NearestThrift = () => {
    const thriftData = {
        name: "Baju Mekanik Lengan Pendek T-Shirt Cotton",
        price: "Rp 60.000",
        location: "3 Km",
        image: "/images/thrift-item.jpg", // Ganti dengan path gambar Anda
        mapImage: "/images/map-placeholder.jpg", // Ganti dengan path gambar peta
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-bold">Nearest Thrift</h2>
            <div className="flex items-center space-x-4">
                <div className="w-1/3">
                    <Image
                        src={thriftData.image}
                        alt="Thrift Item"
                        width={100}
                        height={100}
                        className="rounded-lg"
                    />
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold">{thriftData.name}</h3>
                    <p className="text-gray-600">Jarak: {thriftData.location}</p>
                    <p className="text-primary font-bold">{thriftData.price}</p>
                </div>
            </div>
            <div>
                <Image
                    src={thriftData.mapImage}
                    alt="Google Map Placeholder"
                    width={600}
                    height={300}
                    className="rounded-lg"
                />
            </div>
            <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark">
                Tampilkan Thrift Lainnya
            </button>
        </div>
    );
};

export default NearestThrift;