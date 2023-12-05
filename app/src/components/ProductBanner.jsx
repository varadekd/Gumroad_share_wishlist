import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import { makeAPICall } from "../util/api";

const ProductBanner = ({ productID }) => {
  const [bannerData, setBannerData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const getProductBanner = async () => {
      try {
        const apiRes = await makeAPICall(
          "GET",
          `/product/${productID}/banners`,
          `get product banner for id: ${productID}`,
        );
        console.log(apiRes);
        setBannerData(apiRes);
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
          {bannerData && bannerData.success ? (
            <>
              {bannerData.data &&
              bannerData.data.data &&
              bannerData.data.data.bannerImages.length > 0 ? (
                <>
                  <Carousel>
                    {bannerData.data.data.bannerImages.map((image) => (
                      <img
                        key={bannerData.data.data._id.$oid}
                        src={image}
                        alt="{product.imageAlt}"
                        className="w-full h-full object-cover rounded-md"
                      />
                    ))}
                  </Carousel>
                </>
              ) : (
                <>
                  <h1>No data found</h1>
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
    </>
  );
};

export default ProductBanner;
