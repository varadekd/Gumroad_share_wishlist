class ProductImage
  include Mongoid::Document
  field :productID, type: String
  field :bannerImages, type: Array
  field :thumbnail, type: String
end
