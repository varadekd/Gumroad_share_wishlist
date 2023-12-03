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
end
