#
require 'sinatra'
require 'sinatra/reloader' if development?

set :public_folder, File.dirname(__FILE__) + '/public'
set :views, File.dirname(__FILE__) + '/public'
set :static, true
get '/' do
    #send_file File.expand_path('helper.js', settings.public_folder)
    erb :index
end

get '/helper.js' do
  send_file './public/helper.js'
end

get '/main.css' do
  send_file './public/main.css'
end
