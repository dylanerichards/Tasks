class Task < ApplicationRecord
  validates_uniqueness_of :title
end
