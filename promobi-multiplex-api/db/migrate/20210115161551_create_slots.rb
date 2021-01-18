class CreateSlots < ActiveRecord::Migration[6.1]
  def change
    create_table :slots do |t|
      t.string :slot_time
      t.references :screen, null: false, foreign_key: true

      t.timestamps
    end
  end
end

