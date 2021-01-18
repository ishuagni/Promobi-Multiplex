class CreateScreens < ActiveRecord::Migration[6.1]
  def change
    create_table :screens do |t|
      t.string :name
      t.string :slot
      t.references :movie, null: false, foreign_key: true

      t.timestamps
    end
  end
end
