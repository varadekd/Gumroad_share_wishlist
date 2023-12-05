# Gumroad hiring challenge 

### Introduction
The app folder contains Gumroad's user interface (UI) code.

### API endpoints
- **User Detail:** Provides user-specific information.
- **All Products:** Fetches a list of all available products.
- **Product Details:** Retrieves detailed information about a specific product.
- **Product Image:** Serves images associated with products.
- **Product Banner:** Provides banners or additional imagery related to products.


### Setup installation
1. Clone this repo using `git clone <repo_link>`
2. Install required gems: `bundle install`
3. Install MongoDB [or use mongo atlas]
4. Fill the MongoDB with the data - you can find the sample data [here](../data)
5. Update `config/mongoid.yml` with database and hosts. 
6. Start the server: `rails s`


### Tech used

- **Ruby on Rails** for api development
- **MongoDB** for data storage
- **Rest API's** api architecture. 

#### Additional information
1. We have used the following version during the development and testing of this app
   - ruby - 3.2.2 (2023-03-30 revision e51014f9c0) [x86_64-linux]
   - rails - v7.1.1
   - bundle - v2.4.21
2. The UI development has happened on the MSI GL66 Pluse machine, so the color accuracy may differ.
3. We have used Linux OS for the entire development, so in case you are facing some issues in running this locally, please get in touch with me.
