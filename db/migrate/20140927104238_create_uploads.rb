class CreateUploads < ActiveRecord::Migration
  def change
    create_table :uploads do |t|
      t.string :filepath
      t.string :url
      t.boolean :downloaded
      t.string :nelat
      t.string :nelng
      t.string :swlat
      t.string :swlng

      t.timestamps
    end
  end
end
