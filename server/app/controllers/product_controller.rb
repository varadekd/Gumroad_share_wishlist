class ProductController < ApplicationController
    def get_all_products 

        all_products = Product.only(:name, :creator, :price, :rating, :numberOfReviews)
        
        if all_products 
            render json: { status: 'success', data: all_products }
        else 
            render json: { status: 'error', message: "An unkown server side error occurred" }
        end
    end
end
