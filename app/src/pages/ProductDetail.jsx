import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductBanner from "../components/ProductBanner";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
import { makeAPICall } from "../util/api";

const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setIsLoading(true);

    const getProductDetail = async () => {
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const apiRes = await makeAPICall(
          "GET",
          `/product/${id}`,
          `get product detail for id: ${id}`,
        );

        //   if (productData && productData.success) {
        //     dispatch(updateWishlist(productData.data.data.wishlisted));
        //   }
        setProductData(apiRes);
        console.log("We got product as: ", productData);
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
          {productData && productData.success ? (
            <>
              {productData.data &&
              productData.data.data &&
              productData.data.data._id.$oid ? (
                <>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      {productData.data.data.name}
                    </h1>
                  </div>
                  <div className="h-48 w-full my-3">
                    <ProductBanner productID={id} />
                  </div>

                  <hr />
                  
                  <div className="flex flex-col sm:flex-row w-full mt-3 h-4/5 p-2">
                    <div className="w-full h-full p-2 sm:w-3/10 sm:pl-3">
                      <div>
                        <div className="mb-2">
                          <h4 className="font-semibold mb-2">
                            Product Summary
                          </h4>
                          <div>
                            <p>{productData.data.data.summary}</p>
                          </div>
                        </div>

                        <div className="my-2">
                          <p>By: {productData.data.data.creator}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="flex w-full flex-col justify-center items-center">
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

                    <div className="w-full h-full border-l-2 p-2 sm:w-7/10 sm:pr-3 mb-3 sm:mb-0">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold">Description</h4>
                        <div className="max-h-32 overflow-y-auto pl-3 mt-2">
                          <p>{productData.data.data.description}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="mb-6 mt-3">
                        <h4 className="text-lg font-semibold">Features</h4>
                        <div className="max-h-32 overflow-y-auto pl-3 mt-2">
                          <ul>
                            {productData.data.data.features.map(
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
                            {productData.data.data.howToUse.map(
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
