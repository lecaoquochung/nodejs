# NODEJS - Practice nodejs
- [ ] Project 01: Contact form
- [ ] Project 02: Website
- [ ] Project 03: Blog
- [ ] Project 04: Login system
- [ ] Project 05: Job Board (MEAN.js)
- [ ] Project 06: Image Sharing API
- [ ] Project 07: Shopping Cart
- [ ] Reference

## Project 01: Contact form

## Project 02: Website
- Express
- Layout
- JSON data file
- Contact

## Project 03: Blog
- Mongodb
- Middleware
- Routes & Views
- Categories
- Articles
- Comments

## Project 07: Shopping Cart

### Init 
- kranken & foundation
```
npm install -g yo generator-kraken bower grunt-cli
yo kraken
npm install mongodb mongoose connect-flash express-messages
npm start
```

### Routes & Views

### Database & Models
- Mongodb
'''
mongod // start server
mongo // connect to server
show dbs
use project07 // create db 
db.createCollection('books');
db.createCollection('categorites');
show collections;
db.books.insert({title:"Book 01 title",description:"Book 01 description",category:"Nodejs",author:"Le Hung",publisher:"somewhere",price:"19.99",cover:"node1.jpg"})
db.books.insert({title:"Book 02 title",description:"Book 02 description",category:"Nodejs",author:"Le Hung",publisher:"somewhere",price:"29.99",cover:"node2.jpg"})
db.books.find()
'''

- Reference
 - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

### Admin CRUD

### Shopping Cart

- Reference
 - http://krakenjs.com/
 - http://foundation.zurb.com/

## Reference
