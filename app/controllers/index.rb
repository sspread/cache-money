get '/' do
  erb :index
end

post '/upload' do
  Upload.create!(params)
end

