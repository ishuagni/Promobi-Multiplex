class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.datetime :movie_time
      t.decimal :rating

      t.timestamps
    end
  end
end
