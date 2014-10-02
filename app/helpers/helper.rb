helpers do

  def logged_in?
    !current_user.nil?
  end

  def current_user
    @user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def url_generator
    arr = ('a'..'z').to_a+('A'..'Z').to_a+('0'..'9').to_a
    arr.sample(3).join
  end
end
