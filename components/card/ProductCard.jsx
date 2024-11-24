import Image from 'next/image';

const ProductCard = ({ product }) => {
    return (
        <div className="flex flex-col items-center w-48 p-2 transition-transform transform hover:scale-105">
            <div className="w-full relative mb-2" style={{ paddingBottom: '100%' }}>
                <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <h3 className="text-sm font-regulars w-full text-center truncate">{product.name}</h3>
            <p className="text-custom-sage font-bold w-full text-center">{product.price}</p>
            <p className="text-sm text-gray-500 w-full text-center">{product.size}</p>
        </div>
    );
};

export default ProductCard;