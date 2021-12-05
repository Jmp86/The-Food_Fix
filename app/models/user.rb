class User < ApplicationRecord
    has_many :posts
    has_many :reviews
    has_secure_password

    validates :username, :firstname, :lastname, presence: true
    validates :username, uniqueness: true
    
end
