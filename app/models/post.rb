class Post < ApplicationRecord
    belongs_to :user

    validates :title, :cuisine, :description, presence: true
end
