class UsersController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: User.all
    end
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user, status: :created
        else
          render json: { errors: ["Not authorized"] }, status: :unauthorized
        end 
    end

    def usernames
        user = User.find(params[:id])
        render json: user
    end

    private

    def user_params
        params.permit(:username, :firstname, :lastname, :password, :password_confirmation, :bio)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
