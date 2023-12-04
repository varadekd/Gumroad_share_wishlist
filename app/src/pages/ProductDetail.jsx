import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductBanner from "../components/ProductBanner";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
import { makeAPICall } from "../util/api";

const ProductDetail = () => {
  const { id } = useParams();
  let productData = {};
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setIsLoading(true);

    const getProductDetail = async () => {
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        productData = await makeAPICall(
          "GET",
          `/product/${id}`,
          `get product detail for id: ${id}`,
        );

        //   if (productData && productData.success) {
        //     dispatch(updateWishlist(productData.data.data.wishlisted));
        //   }
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getProductDetail();
  }, []);

  return (
    <div className="mx-auto border h-full max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      {isLoading ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <>
          {productData.isSuccess ? (
            <>
              {productData.data &&
              productData.data.data &&
              productData.data.data._id.$oid ? (
                <>
                  <div className="h-48 w-full border">
                    <ProductBanner productID={id} />
                  </div>

                  <div className="flex flex-col sm:flex-row w-full border mt-3 h-4/5">
                    <div className="w-full h-full border p-2 sm:w-3/10 sm:pl-3">
                      <div>
                        <h4>Brief</h4>
                        <div>Content goes here</div>
                      </div>

                      {/* Actions */}
                      <div className="flex w-full border flex-col justify-center items-center">
                        <Button outline className="w-48 mt-3">
                          <HiShoppingCart className="mr-2 h-5 w-5" />
                          wishlist
                        </Button>

                        <Button color="dark" className="w-48 mt-3">
                          <HiOutlineArrowRight className="mr-2 h-5 w-5" />
                          Add to cart
                        </Button>
                      </div>
                    </div>

                    <div className="w-full h-full border p-2 sm:w-7/10 sm:pr-3 mb-3 sm:mb-0">
                      {/* Right section */}
                      <div className="mb-6">
                        {/* Description */}
                        <h4>Description</h4>
                        <div className="h-32 overflow-y-auto">
                          {/* Content with fixed height and overflow-y scroll */}
                          {/* Replace with actual content */}
                        </div>
                      </div>

                      <div className="mb-6">
                        {/* Features */}
                        <h4>Features</h4>
                        <div className="h-32 overflow-y-auto">
                          {/* Content with fixed height and overflow-y scroll */}
                          {/* Replace with actual content */}
                        </div>
                      </div>

                      <div>
                        {/* How to use */}
                        <h4>How to use</h4>
                        <div className="h-32 overflow-y-auto">
                          {/* Content with fixed height and overflow-y scroll */}
                          {/* Replace with actual content */}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h1>No data</h1>
                </>
              )}
            </>
          ) : (
            <>
              <h1>Error - {errorMessage}</h1>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetail;
