import { Badge } from "flowbite-react";

import { HiOutlineHeart, HiShare, HiOutlineStar } from "react-icons/hi";
import { BiMoneyWithdraw } from "react-icons/bi";

const ProductCard = ({product}) => {
  return (
    <>
      <div className="border border-gray-300 rounded-md shadow-md p-4 w-72 h-96">
        <div className="relative mb-4">
          <div>
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="absolute top-2 right-14">
            <button
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <HiOutlineHeart className="h-6 w-6" />
            </button>
          </div>
          <div className="absolute top-2 right-2">
            <button
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <HiShare className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="mb-4 flex flex-wrap gap-2">
        {product.categoryChips.map((category, index) => (
            <Badge key={index} color="purple" size="sm">
            { category }
          </Badge>
          ))}
          
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2 text-ellipsis overflow-hidden">
            {product.name}
          </h2>

          <p className="text-sm text-gray-600 mb-2 text-ellipsis overflow-hidden">
            by: {product.creator}
          </p>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-1">
              <BiMoneyWithdraw />
            </div>
            <div>
              <p> { product.price } </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-1">
              <HiOutlineStar />
            </div>
            <div>
              <p>
                { product.rating } 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
