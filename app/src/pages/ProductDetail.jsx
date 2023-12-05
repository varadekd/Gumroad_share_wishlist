import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductBanner from "../components/ProductBanner";
import { makeAPICall } from "../util/api";
import ProductDetailSection from "../components/ProductDetailSection";

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

        setProductData(apiRes);
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
                    <ProductDetailSection productData={productData.data} />
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
