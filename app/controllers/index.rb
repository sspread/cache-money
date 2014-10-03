get '/' do
  erb :index
end

get '/u/:url' do
  @upload = Upload.find_by_url(params[:url])
  erb :download
end

post '/upload' do
  url = url_generator
  until Upload.find_by(url: url) == nil
    url = url_generator
  end
  puts "----------"
  p params[:filepath]
  puts "----------"
  Upload.create(filepath: params[:filepath], url: url)
  url
end
