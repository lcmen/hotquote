class Quote < ApplicationRecord
  belongs_to :company

  validates :name, presence: true

  scope :ordered, -> { order(id: :desc) }
end
