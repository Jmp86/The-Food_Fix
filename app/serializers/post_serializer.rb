class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :category, :description, :ingredients, :instructions, :average_rating

  belongs_to :user
  has_many :reviews
end
