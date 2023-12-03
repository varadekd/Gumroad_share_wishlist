class UserController < ApplicationController
    def get_user
        user_id = params[:userID]

        if user_id.blank? || !BSON::ObjectId.legal?(user_id)
          render json: { status: 'error', message: 'Invalid userID' }, status: :unprocessable_entity
          return
        end
    
        user = User.where(_id: BSON::ObjectId.from_string(user_id)).only(:username).first
    
        if user
          render json: { status: 'success', data: user }
        else
          render json: { status: 'error', message: 'User not found' }, status: :not_found
        end
    end

    def whislist_product 
        user_id = params[:userID]
        product_id = params[:productID]

        if user_id.blank? || !BSON::ObjectId.legal?(user_id)
          render json: { status: 'error', message: 'Invalid userID' }, status: :unprocessable_entity
          return
        end

        if product_id.blank? || !BSON::ObjectId.legal?(product_id)
            render json: { status: 'error', message: 'Invalid Product ID' }, status: :unprocessable_entity
            return
          end

        user = User.find(user_id)

        if !user.present?
            render json: { status: 'error', message: 'User not found' }, status: :not_found
            return
        end

        new_wishlist = user.wishlisted || []

        if new_wishlist.include?(product_id)
            render json: { status: 'error', message: 'Product is already added to wishlist' }, status: :unprocessable_entity
            return
        end

        new_wishlist << product_id

        if user.set(wishlisted: new_wishlist)
            render json: { status: 'error', message: 'Product is added to wishlist' }, status: :ok
        else 
            render json: { status: 'error', message: 'An unknown server side error occurred' }, status: :internal_server_error
        end
    end
end
