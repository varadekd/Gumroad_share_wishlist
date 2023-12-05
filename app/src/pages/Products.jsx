import ProductCard from "../components/ProductCard";
import { ErrorMessage } from "../components/shared/ErrorMessage";
import { Loader } from "../components/shared/Loader";
import { NoData } from "../components/shared/NoData";
import { getDataFromApiAndCache } from "../util/api";

const Products = () => {
  const products = getDataFromApiAndCache("/products", true);
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {products.isLoading ? (
          <div className="h-full flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.success ? (
              <>
                {products.data &&
                products.data.data &&
                products.data.data.length > 0 ? (
                  <>
                    {products.data.data.map((product) => (
                      <ProductCard key={product._id.$oid} product={product} />
                    ))}
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
                <div className="h-full">
                  <ErrorMessage message={products.error.message} />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
