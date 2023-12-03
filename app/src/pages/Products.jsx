import ProductCard from "../components/ProductCard";
import { getDataFromApiAndCache } from "../util/api";
const Products = () => {
  const products = getDataFromApiAndCache("/products", true);

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {products.isLoading ? (
          <h1>Loding</h1>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.isSuccess ? (
              products.data && products.data.length > 0 ? (
                <div>
                  {products.data.map(() => {
                    <ProductCard key={product._id.$oid} product={products} />;
                  })}
                </div>
              ) : (
                <h1>No data</h1>
              )
            ) : (
              <h1>Error</h1>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
