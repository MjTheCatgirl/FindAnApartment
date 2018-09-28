# README
This app should create and maintain a list of apartments, each with attributes address, city, state, #bedrooms (just called bedrooms), #bathrooms (just called bathrooms). These are stored in a sqlite3 database. I created the resource apartments with the scaffold command for ruby, so MVC code is all auto generated. I am using webpack to handle react as my frontend. This list should include the ability to edit a listing, add or delete a listing, and view each listing. 

To use: This contains a seed file which has three example apartments to use in the database. First, do 'rake db:create', then 'rake db:seed' which adds the contents of the seed file, then 'rake db:migrate'. Your database should contain the examples now. 

To run: Go to the app's directory in your terminal and type 'foreman start'. This starts both servers needed to run the app. Navigate to http://localhost:5000 in your browser to see the results in a web page.

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions- adopt 17 cats

* ...
