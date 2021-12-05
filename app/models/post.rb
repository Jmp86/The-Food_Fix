class Post < ApplicationRecord
    belongs_to :user
    has_many :reviews

    validates :title, :category, :description, presence: true
end
