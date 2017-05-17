class AddCategoryColumnToCompletedJobs < ActiveRecord::Migration[5.1]
  def change
    add_column :completed_jobs, :category, :string
  end
end
