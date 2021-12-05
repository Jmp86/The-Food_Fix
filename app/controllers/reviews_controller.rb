class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize, only: [:create]

    def index
        render json: Review.all
    end
    
    def create
        review = @current_user.reviews.create!(review_params)
        
        render json: review, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user, status: :created
        else
          render json: { errors: ["Not authorized"] }, status: :unauthorized
        end 
    end

    private

    def review_params
        params.permit(:review, :rating)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end
end
