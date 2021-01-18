class Slot < ApplicationRecord
  belongs_to :screen
  has_many :seat, :dependent => :destroy
end
