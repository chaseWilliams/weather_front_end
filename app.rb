require 'sinatra'
require 'thin'
class App < Sinatra::Application

  set :public_folder, 'public'
  get '/' do
    redirect 'index.html'
  end
end