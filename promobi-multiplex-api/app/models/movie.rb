class Movie < ApplicationRecord
    has_many :screen, :dependent => :destroy
end
