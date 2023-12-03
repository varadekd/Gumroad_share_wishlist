Rails.application.routes.draw do
  get "/user/:userID", to: "user#get_user"
  patch "/user/:userID/whislist", to: "user#whislist_product"
  patch "/user/:userID/removewhislist", to: "user#remove_whislist_product"
  get "/products", to: "product#get_products"
  get "/product/:productID", to: "product#get_product"
  get "/product/:productID/thumbnail", to: "product_image#get_product_thumbnail"
  get "/product/:productID/banners", to: "product_image#get_product_banner"
end
