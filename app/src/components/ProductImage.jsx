import { useEffect, useState } from "react";
import { makeAPICall } from "../util/api";
import { ErrorMessage } from "./shared/ErrorMessage";
import { NoData } from "./shared/NoData";

const ProductImage = ({ productID }) => {
  const [thumbnailData, setThumbnailData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const getProductBanner = async () => {
      try {
        const apiRes = await makeAPICall(
          "GET",
          `/product/${productID}/thumbnail`,
          `get product thumbnail for id: ${productID}`,
        );

        setThumbnailData(apiRes);
      } catch (err) {
        console.error("We got an error while fetching banner image");
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getProductBanner();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="bg-gray-200 w-full h-full animate-pulse"></div>
      ) : (
        <>
          {thumbnailData && thumbnailData.success ? (
            <>
              {thumbnailData.data &&
              thumbnailData.data.data &&
              thumbnailData.data.data.thumbnail ? (
                <>
                  <img
                    key={thumbnailData.data.data._id.$oid}
                    src={thumbnailData.data.data.thumbnail}
                    className="w-full h-full object-cover rounded-md"
                  />
                </>
              ) : (
                <>
                  <div className="h-full">
                    <NoData />
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="h-full flex items-end">
                <ErrorMessage message={errorMessage} />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProductImage;
