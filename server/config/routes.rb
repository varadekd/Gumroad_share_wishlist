Rails.application.routes.draw do
  get "/user/:userID", to: "user#get_user"
  get "/products", to: "product#get_products"
  get "/product/:productID", to: "product#get_product"
end
