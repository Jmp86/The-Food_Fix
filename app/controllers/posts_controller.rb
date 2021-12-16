class PostsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize 
    skip_before_action :authorize, only: [:index, :show, :average_rating]

    def index
        render json: Post.all
    end

    def show
        post = Post.find(params[:id])
        render json: post
    end

    def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
    end

    def update
        post = Post.find_by(id: params[:id])
        if(@current_user.id == post.user_id)
            post.update!(post_params)
            render json: post, status: :created
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
    end

    def destroy
        post = Post.find(params[:id])
        if (@current_user.id == post.user_id)
            post.destroy
            head :no_content
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
    end

    def average_rating
        post = Post.find(params[:id])
        average = post.reviews.average(:rating)
        render json: average  
    end

    private

    def post_params
        params.permit(:title, :image, :category, :description)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end
end
