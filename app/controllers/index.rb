get '/' do
  erb :index
end

get '/u/:url' do
  @upload = Upload.find_by_url(params[:url])
  # ajax message
  erb :download
end

delete '/u' do
  Upload.find_by_url(params[:url]).destroy
end


post '/upload' do
  url = url_generator
  until Upload.find_by(url: url) == nil
    url = url_generator
  end
  params[:upload][:filename] = url
  Upload.create(filepath: params[:upload], url: url)
  url
end