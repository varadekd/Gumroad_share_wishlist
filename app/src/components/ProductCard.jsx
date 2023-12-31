/* eslint-disable react/prop-types */

import { Badge } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ProductImage from "./ProductImage";
import { updateWishlist } from "../store/wishlist";
import { makeAPICall } from "../util/api";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  HiOutlineHeart,
  HiShare,
  HiOutlineStar,
  HiHeart,
} from "react-icons/hi";
import { BiMoneyWithdraw } from "react-icons/bi";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.wishlistStore.wishlist);
  const userID = useSelector((state) => state.wishlistStore.userID);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [shareURL , setShareURL] = useState('')

  useEffect(() => {
    const generateShareUrl = () => {
      const tempUrl = `https://twitter.com/intent/tweet?text=I%20found%20this%20amazing%20product%20on%20Gumroad%20,Go%20check%20this%20out&url=http://localhost:5173/product/${product._id.$oid}&via=gumroad`
      setShareURL(tempUrl)
    };

    generateShareUrl()
  }, [])

  const addRemoveFromWishlist = async (productID) => {
    setIsLoading(true);
    const currentIndex = wishlist.indexOf(productID);
    let updatedWishlist = wishlist;
    let apiRes = {};
    try {
      if (currentIndex > 0) {
        apiRes = await makeAPICall(
          "PATCH",
          `/user/${userID}/removewhislist?productID=${productID}`,
          "remove",
        );

        if (apiRes.success) {
          updatedWishlist = wishlist.filter((itemId) => itemId !== productID);
        }
      } else {
        apiRes = await makeAPICall(
          "PATCH",
          `/user/${userID}/whislist?productID=${productID}`,
          "add",
        );

        if (apiRes.success) {
          updatedWishlist = [...wishlist, productID];
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(updateWishlist(updatedWishlist));
      setIsLoading(false);
    }
  };

  const showProductDetails = (productID) => {
    navigate(`/product/${productID}`);
  };

  return (
    <>
      <div className="border border-gray-300 rounded-md shadow-md p-4 w-72 h-96">
        <div className="relative mb-4">
          <div className="w-full h-48">
            <ProductImage productID={product._id.$oid} />
          </div>
          <div className="absolute top-2 right-14">
            <button
              onClick={() => addRemoveFromWishlist(product._id.$oid)}
              type="button"
              className="border font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
            >
              {isLoading ? (
                <>
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline h-6 w-6 text-blue animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                </>
              ) : (
                <>
                  {wishlist.includes(product._id.$oid) ? (
                    <IconContext.Provider value={{ className: "text-red-500" }}>
                      <HiHeart className="h-6 w-6" />
                    </IconContext.Provider>
                  ) : (
                    <HiOutlineHeart className="h-6 w-6" />
                  )}
                </>
              )}
            </button>
          </div>
          <div className="absolute top-2 right-2">
            <a
              href={shareURL}
              target="_blank"
              rel="noreferrer"
              className="border font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
            >
              <HiShare className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mb-4 flex flex-wrap gap-2">
          {product.category.map((category, index) => (
            <Badge key={index} color="purple" size="sm">
              {category}
            </Badge>
          ))}
        </div>
        <div
          onClick={() => showProductDetails(product._id.$oid)}
          className="cursor-pointer"
        >
          <h2
            className="text-lg font-semibold mb-2 text-ellipsis overflow-hidden"
            title="Click to show details"
          >
            {product.name}
          </h2>

          <p className="text-sm mb-2 text-ellipsis overflow-hidden">
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
