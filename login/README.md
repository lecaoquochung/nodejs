# LOGIN

## Dependencies
```
npm install --save app-module-path
npm install --save express
npm install --save path
npm install --save body-parser
npm install --save nodemailer
npm install --save express jade
npm install --save bluebird
npm install --save dot // template framework

npm install --save cookie-parser
npm install --save express-messages
npm install --save express-session
npm install --save express-validator
npm install --save jade
npm install --save mongodb
npm install --save mongoose
npm install --save morgan
npm install --save multer
npm install --save passport
npm install --save passport-http
npm install --save passport-local
npm install --save serve-favicon
npm install --save bcryptjs
npm install --save connect-flash

```

## Init mongodb
```
# basic
mongod // start server
mongo // connect to server
show dbs
db // check working db
db.createCollection('customers'); // create collections customers
show collections; // show db collections

# create data & fetch for projects
use nodeauth // create db
db.createCollection('users');

# fetch data to collection user
db.users.insert({name: 'Hung Le', email:'lecaoquochung@gmail.com', username:'hungle', password:'123456'});
db.users.insert({name: 'Test', email:'test@gmail.com', username:'test', password:'123456'});
db.users.find(); // db.users.find().pretty();

# update user
db.users.update({name:'Hung Le'}, {$set:{email:'test@tmail.com'}}); // update
db.users.remove({username:'test'});

# category & post
db.createCollection('categories');
db.createCollection('posts');

// posts: title, category, author, body, date
db.posts.insert({title:"Frist Blog Post", category:"Technology", author:"Hung Le", body: "This is the body", date: ISODate()});
db.posts.insert({title:"Second Blog Post", category:"Science", author:"Takanashi", body: "This is the body", date: ISODate()});
```

## Functions

## Reference
- Install mongodb on MAC http://treehouse.github.io/installation-guides/mac/mongo-mac.html
