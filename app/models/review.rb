class Review < ApplicationRecord
    belongs_to :user
    belongs_to :post

    validates :review, :rating, presence: true
end
