class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :firstname, :lastname, :password_digest, :bio

  has_many :posts
end
