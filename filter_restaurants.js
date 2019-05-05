const business  = require("./business_Surprise.js")
var filtered = []

business.forEach(function(item){
    var obj={};
    if ( item.categories.includes("Restaurants")
      ){       //filter function
//console.log("item1"+item.business_id);
        obj={"business_id": item.business_id,
            "last_checkin_time": item.last_checkin_time,
            "postal_code":item.postal_code,
            "star":item.star,
            "name":item.name,
            "review_count":item.review_count,
            "longitude":item.long,
            "latitude":item.lat,
            "categories":item.categories
          }
            filtered.push(obj)
    }
})

 console.log(filtered);

 const jsonfile = require('jsonfile')
 const file = '/users/shiqing/desktop/yelp_dataset/temp2.js'
  
 jsonfile.writeFile(file, filtered, function (err) {
   if (err) console.error(err)
 })

