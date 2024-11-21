import Image from 'next/image';

const ProductCard = ({ product }) => {
    return (
        <div className="max-w-fit flex flex-col">
            <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="rounded-lg mb-4"
            />
            <h3 className="text-sm font-regulars ">{product.name}</h3>
            <p className="text-custom-sage font-bold">{product.price}</p>
            <p className="text-sm text-gray-500">{product.size}</p>
        </div>
    );
};

export default ProductCard;