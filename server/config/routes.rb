Rails.application.routes.draw do
  get "/user/:userID", to: "user#get_user"
end
