class Product
  include Mongoid::Document
  include Mongoid::Timestamps
  field :name, type: String
  field :creator, type: String
  field :price, type: Float
  field :rating, type: Integer
  field :summary, type: String
  field :description, type: String
  field :howTouse, type: Array
  field :features, type: Array
  field :numberOfReviews, type: Integer
  field :category, type: Array
end
