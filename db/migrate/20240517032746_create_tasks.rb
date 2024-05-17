class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.boolean :completed, null: false, default: false
      t.date :due_date, null: true

      t.timestamps
    end
  end
end
