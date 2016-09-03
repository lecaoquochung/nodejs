# NODEJS - Practice nodejs
- [ ] Project 01: Contact form
- [ ] Project 02: Website
- [ ] Project 03: Blog
- [ ] Project 04: Login system
- [ ] Project 05: Job Board (MEAN.js)
- [ ] Project 06: Image Sharing API
- [ ] Project 07: Shopping Cart
- [ ] Project 08: Community Events
- [ ] Project 09: ChatIO (web socket)
- [ ] Project 10: Find data (Cassandra)
- [ ] Project 11: Personal Portfolio (MySQL)
- [ ] Project 12: Elearning (access permission basic)
- [ ] Project 13: Recipe (PostgreSQL)
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
```
{>"layouts/master" /}
```

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

// insert a book
db.books.insert({title:"Book 01 title",description:"Book 01 description",category:"Nodejs",author:"Le Hung",publisher:"somewhere",price:"19.99",cover:"node1.jpg"})
db.books.insert({title:"Book 02 title",description:"Book 02 description",category:"Nodejs",author:"Le Hung",publisher:"somewhere",price:"29.99",cover:"node2.jpg"})
db.books.find()

// insert category
db.categories.insert({name:"Nodejs"})
'''

- Logic in controller
```
var Book = require('../models/bookModel');
var Category = require('../models/categoryModel');

Book.findOne({_id: req.params.id}, function(err, book){...}

res.render('index', model);
```

- View
```
{>"layouts/master" /}

{<body}
    {#books}
    	<div class="large-3 columns book end">
    		<img src="/img/{.cover}">
    		<h4>{.title}</h4>
    		<p>{.truncText}</p>
    		<div class="price">Buy it for <span>${.price}</span></div>
    		<br>
    		<a href="/books/details/{._id}" class="button small">Book Details</a>
    	</div>
    {/books}
{/body}
```

- Reference
 - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

### Admin CRUD
- Edit & Delete
- List & Add

### Shopping Cart

- Reference
 - http://krakenjs.com/
 - http://foundation.zurb.com/

## Reference
- mlab.com
- http://jedireza.github.io/drywall
