class CreateUploads < ActiveRecord::Migration
  def change
    create_table :uploads do |t|
      t.string :filepath
      t.string :url
      t.boolean :downloaded

      t.timestamps
    end
  end
end
