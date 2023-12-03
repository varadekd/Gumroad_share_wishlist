class User
  include Mongoid::Document
  field :username, type: String
  field :email, type: String
  field :wishlisted, type: Array, default:[]
end
