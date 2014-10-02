class Upload < ActiveRecord::Base
  mount_uploader :filepath, Uploader
end