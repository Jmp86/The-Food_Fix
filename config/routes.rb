Rails.application.routes.draw do
  resources :posts
  resources :reviews, only: [:index, :create, :destroy]
  get "/users", to: "users#index"
  get "/users/:id", to: "users#usernames"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/posts/:id/average", to: "posts#average_rating"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
