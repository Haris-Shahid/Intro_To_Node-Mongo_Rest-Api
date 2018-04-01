##Node Practice from Start

**mongod** command to start a mongo local server
after that type **mongo**

commands to show local databases
**show dbs**

use some database by typing
**use local**

create our own database
**use dbname**

add your  very first product
**db.products.insert({"productName": "Red Car", etc})**
db targeting database products targetting any collection you have in your database and .insert add items in your collection

to check your collections
**show collections**

to check all products in collection
**db.products.find()**

and to look preetty in json format than type
**db.products.find().pretty()**

if you find some specific data from the collection than type
**db.products.find({ "_id" : ObjectId("5ac0713684dfd8bd64dcc7a3")})**

and if you want to find only one than type
**db.products.findOne()**

and if you want to update some specific product than
**db.products.update({"productName" : "Red Car"}, {$set: {"Price" : 100000}})**