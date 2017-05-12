class OwnerGroup < ApplicationRecord
  belongs_to :user
  belongs_to :house
  has_many :profiles, through: :user, source: :profiles
end
