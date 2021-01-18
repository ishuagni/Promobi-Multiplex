class CreateReports < ActiveRecord::Migration[6.1]
  def change
    create_table :reports do |t|
      t.string :email
      t.integer :seats
      t.decimal :price
      t.string :movie

      t.timestamps
    end
  end
end
