class CreateMatters < ActiveRecord::Migration[5.1]
  def change
    create_table :matters do |t|
      t.string :name
      t.string :teacher

      t.timestamps
    end
  end
end
