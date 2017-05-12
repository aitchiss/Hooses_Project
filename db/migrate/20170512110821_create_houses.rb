class CreateHouses < ActiveRecord::Migration[5.1]
  def change
    create_table :houses do |t|
      t.string :address
      t.string :post_code

      t.timestamps
    end
  end
end
