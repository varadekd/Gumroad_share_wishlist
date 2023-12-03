class ProductImageController < ApplicationController
    def get_product_thumbnail
        product_id = params[:productID]

        if product_id.blank? || !BSON::ObjectId.legal?(product_id)
          render json: { status: 'error', message: 'Invalid productID' }, status: :unprocessable_entity
          return
        end
    
        thumbnail = ProductImage.where(productID: product_id).only(:productID , :thumbnail).first
    
        if thumbnail
          render json: { status: 'success', data: thumbnail }
        else
          render json: { status: 'error', message: 'Product thumbnail not found' }, status: :not_found
        end
    end
end
