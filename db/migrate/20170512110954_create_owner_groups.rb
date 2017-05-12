class CreateOwnerGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :owner_groups do |t|
      t.references :user, foreign_key: true
      t.references :house, foreign_key: true

      t.timestamps
    end
  end
end
