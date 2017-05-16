class House < ApplicationRecord
  has_many :owner_groups
  has_many :topics
  has_many :kitchen_table_posts
  has_many :users, through: :owner_groups, source: :users
  has_many :profiles, through: :owner_groups, through: :users, source: :profiles
end
