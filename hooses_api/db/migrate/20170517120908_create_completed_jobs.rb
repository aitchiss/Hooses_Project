class CreateCompletedJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :completed_jobs do |t|
      t.references :house, foreign_key: true
      t.string :description
      t.integer :cost
      t.datetime :date
      t.timestamps
    end
  end
end
