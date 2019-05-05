const business  = require("./business.js")
const checkin = require("./checkin_last.js")
var filtered = []

business.forEach(function(item){
    var obj={};
    if (item.city=="Surprise" ){
checkin.forEach(function(item2){
    if (item2.business_id==item.business_id){
        obj={"business_id": item2.business_id,
            "last_checkin_time": item2.last_checkin_time,
            "postal_code":item.postal_code,
            "star":item.stars,
            "name":item.name,
            "review_count":item.review_count,
            "long":item.longitude,
            "lat":item.latitude,
            "categories":item.categories
          }
            filtered.push(obj)
    }
})

    }
 })
 console.log(filtered);

 const jsonfile = require('jsonfile')
 const file = '/users/shiqing/desktop/yelp_dataset/temp2.js'
  
 jsonfile.writeFile(file, filtered, function (err) {
   if (err) console.error(err)
 })

