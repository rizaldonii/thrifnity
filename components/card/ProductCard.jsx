import Image from 'next/image';

const ProductCard = ({ product }) => {
    return (
        <div className="flex flex-col items-center w-48 pr-4 transition-transform transform hover:scale-105">
            <div className="w-full relative mb-2" style={{ paddingBottom: '100%' }}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="rounded-sm"
                />
            </div>
            <h3 className="text-sm font-regulars w-full text-left truncate">{product.name}</h3>
            <p className="text-custom-sage font-bold w-full text-left">{product.price}</p>
            <p className="text-sm text-gray-500 w-full text-left">{product.size}</p>
        </div>
    );
};

export default ProductCard;