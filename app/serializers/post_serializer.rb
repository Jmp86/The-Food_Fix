class PostSerializer < ActiveModel::Serializer
  attributes :title, :image, :cuisine, :description, :average_rating

  
end
