const checkin = require("./checkin.js")
var filtered = []

checkin.forEach(function(item){
    
    
    var obj={};
    obj={"business_id": item.business_id,
    "last_checkin_time": item.date.slice(item.date.length-19,item.date.length)}
    filtered.push(obj)
 })
 console.log(filtered);

 const jsonfile = require('jsonfile')
 const file = '/users/shiqing/desktop/yelp_dataset/checkin_last.js'
  
 jsonfile.writeFile(file, filtered, function (err) {
   if (err) console.error(err)
 })

