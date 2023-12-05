import { Button } from "flowbite-react";
import { makeAPICall } from "../util/api";
import { updateWishlist } from "../store/wishlist";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { IconContext } from "react-icons";
import {
  HiOutlineHeart,
  HiHeart,
  HiShoppingCart
} from "react-icons/hi";

const ProductDetailSection = ({productData}) => {
  const wishlist = useSelector((state) => state.wishlistStore.wishlist);
  const userID = useSelector((state) => state.wishlistStore.userID);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

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

  const addToCart = () => {
    alert("Adding to cart is not supported at this moment!")
  }

    return (
        <>
        <div className="w-full h-full p-2 sm:w-3/10 sm:pl-3">
                      <div>
                        <div className="mb-2">
                          <h4 className="font-semibold mb-2">
                            Product Summary
                          </h4>
                          <div>
                            <p>{productData.data.summary}</p>
                          </div>
                        </div>

                        <div className="my-2">
                          <p>By: {productData.data.creator}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="flex w-full flex-col justify-center items-center">
                        
                        <Button onClick={() => addRemoveFromWishlist(productData.data._id.$oid)} outline className="w-48 mt-3">
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
                  {wishlist.includes(productData.data._id.$oid) ? (
                    <IconContext.Provider value={{ className: "text-red-500" }}>
                      <HiHeart className="h-6 w-6 mr-2" />
                      Wishlisted
                    </IconContext.Provider>
                  ) : (
                    <>
                    <HiOutlineHeart className="h-6 w-6 mr-2" />
                    Wishlist
                    </>
                    
                  )}
                </>
              )}
                        </Button>

                        <Button onClick={ () => addToCart()} color="light" className="w-48 mt-3">
                          <HiShoppingCart className="mr-2 h-5 w-5" />
                          Add to cart
                        </Button>
                      </div>
                    </div>

                    <div className="w-full h-full border-l-2 p-2 sm:w-7/10 sm:pr-3 mb-3 sm:mb-0">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold">Description</h4>
                        <div className="max-h-32 overflow-y-auto pl-3 mt-2">
                          <p>{productData.data.description}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="mb-6 mt-3">
                        <h4 className="text-lg font-semibold">Features</h4>
                        <div className="max-h-32 overflow-y-auto pl-3 mt-2">
                          <ul>
                            {productData.data.features.map(
                              (feature, index) => (
                                <li key={index}>
                                  {feature} - {index}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      </div>

                      <hr />

                      <div className="mt-3">
                        <h4 className="text-lg font-semibold"> How to use</h4>
                        <div className="h-32 overflow-y-auto pl-3 mt-2">
                          <ul>
                            {productData.data.howToUse.map(
                              (feature, index) => (
                                <li key={index}>
                                  {feature} - {index}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
        </>
    )
}

export default ProductDetailSection;