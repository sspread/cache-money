class User < ActiveRecord::Base

  def password
    self.hashed_password
  end

  def password=(new_password)
    if new_password.length > 0
      self.hashed_password = BCrypt::Password.create(new_password)
    end
  end

  def authenticate(password_input)
    BCrypt::Password.new(self.password) == password_input
  end

end
