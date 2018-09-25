class CreateApartments < ActiveRecord::Migration[5.2]
  def change
    create_table :apartments do |t|
      t.string :address
      t.string :city
      t.string :state
      t.integer :bedrooms
      t.integer :bathrooms

      t.timestamps
    end
  end
end
