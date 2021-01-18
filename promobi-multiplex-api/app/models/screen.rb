class Screen < ApplicationRecord
  belongs_to :movie
  has_many :slot, :dependent => :destroy
end
