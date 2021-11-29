class User < ApplicationRecord
    has_many :posts
    has_many :reviews, through: :posts
    has_secure_password

    validates :username, :password, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true
end
