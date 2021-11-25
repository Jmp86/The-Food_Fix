class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :image
      t.string :cuisine
      t.boolean :is_restaurant
      t.string :description
      t.string :ingredients
      t.string :instructions
      t.integer :average_rating
      t.integer :user_id

      t.timestamps
    end
  end
end
