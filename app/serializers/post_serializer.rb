class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :cuisine, :description, :average_rating

  belongs_to :user
end
