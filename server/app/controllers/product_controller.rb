class ProductController < ApplicationController
    def get_products 

        all_products = Product.only(:name, :creator, :price, :rating, :numberOfReviews, :category)
        
        if all_products 
            render json: { status: 'success', data: all_products }
        else 
            render json: { status: 'error', message: "An unkown server side error occurred" }, status: :internal_server_error
        end
    end

    def get_product
        product_id = params[:productID]

        if product_id.blank? || !BSON::ObjectId.legal?(product_id)
          render json: { status: 'error', message: 'Invalid productID' }, status: :unprocessable_entity
          return
        end
    
        product = Product.where(_id: BSON::ObjectId.from_string(product_id)).first
    
        if product
          render json: { status: 'success', data: product }
        else
          render json: { status: 'error', message: 'Product not found' }, status: :not_found
        end
    end
end
