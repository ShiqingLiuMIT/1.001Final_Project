This project is to showing restaurants information(type of restaurant, number of reviews, star) on a map, to providing a better tool for searching restaurants.

1. Original Data is from https://www.yelp.com/dataset

2. checkin.json(downloaded from yelp) was first saved as checkin.js, and then filtered by checkin_filter.js(in folder), and save the filtered variable to checkin_last.js(in folder, npm install needed).

3. business.json(downloaded from yelp) was first saved as business.js, and then filtered by filter.js(in folder) by city, and merge checkin data from checkin_last.js(last step) by checking business_id(also by filter.js), and save to business_Surprise.js(in folder).

4. business_Surprise was filtered by filter_restaurants.js(in folder) by "Restaurants" in categories, and save the filtered vairable to Restaurants_Surprise.js(in folder).

5. foodmap.html is showing the restaurants in Surprise, AZ with a dropdown menu of all existing zipcodes in Restaurants_Surprise.js.

6. All icons are in icons folder.

