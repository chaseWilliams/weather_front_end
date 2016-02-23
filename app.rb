#
require 'sinatra'

set :public_folder, File.dirname(__FILE__) + '/public'

get '/' do
    #send_file File.expand_path('helper.js', settings.public_folder)
   erb :index
    
end