class CreateSeats < ActiveRecord::Migration[6.1]
  def change
    create_table :seats do |t|
      t.string :name
      t.integer :price
      t.string :position
      t.integer :owned_by
      t.references :slot, null: false, foreign_key: true

      t.timestamps
    end
  end
end