import { Button } from "flowbite-react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";

const ProductDetailSection = ({productData}) => {
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