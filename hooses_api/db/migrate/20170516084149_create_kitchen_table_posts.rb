class CreateKitchenTablePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :kitchen_table_posts do |t|
      t.string :content
      t.references :user, foreign_key: true
      t.references :house, foreign_key: true

      t.timestamps
    end
  end
end
