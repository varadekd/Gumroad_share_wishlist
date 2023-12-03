/* eslint-disable react/prop-types */
import { Badge } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { addRemoveValue } from "../store/wishlist";

import {
  HiOutlineHeart,
  HiShare,
  HiOutlineStar,
  HiHeart,
} from "react-icons/hi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { useState } from "react";
import ProductImage from "./ProductImage";

const ProductCard = ({ product }) => {
  const [wishlist, setRange] = useState([]);
  // const wishlist = useSelector((state) => state.wishlist.value);
  // const dispatch = useDispatch();

  // const addRemoveWishlist = (id) => {
  //   const currentIndex = wishlist.indexOf(id);
  //   if (currentIndex > -1) {
  //     const updatedWishlist = wishlist.filter((itemId) => itemId !== id);
  //     setRange(updatedWishlist);
  //   } else {
  //     const updatedWishlist = [...wishlist, id];
  //     setRange(updatedWishlist);
  //   }
  // };

  return (
    <>
      <div className="border border-gray-300 rounded-md shadow-md p-4 w-72 h-96">
        <div className="relative mb-4">
          <div className="w-full h-48">
            <ProductImage productID={product._id.$oid} />
          </div>
          <div className="absolute top-2 right-14">
            <button
              onClick={() => dispatch(addRemoveValue(product._id.$oid))}
              type="button"
              className="border font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
            >
              {wishlist.includes(product._id.$oid) ? (
                <HiHeart className="text-red h-6 w-6" />
              ) : (
                <HiOutlineHeart className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="absolute top-2 right-2">
            <button
              type="button"
              className="border font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
            >
              <HiShare className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="mb-4 flex flex-wrap gap-2">
          {product.category.map((category, index) => (
            <Badge key={index} color="purple" size="sm">
              {category}
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
              <p> {product.price} </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-1">
              <HiOutlineStar />
            </div>
            <div>
              <p>{product.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
