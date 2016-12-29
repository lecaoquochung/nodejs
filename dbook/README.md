# Project 8007: DBook (Ebook shopping cart)

## Dependencies
- kranken
```
npm install -g yo generator-kraken bower grunt-cli
yo kraken
npm install --save mongodb mongoose connect-flash express-messages
```

## Get started
### Init
```
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
use dbook // create db

db.createCollection('books');
db.createCollection('categorites');

show collections;

// insert a book
db.books.insert({title:"Book 01 title",description:"Book 01 description",category:"Nodejs",author:"Le Hung",publisher:"somewhere",price:"19.99",cover:"node1.jpg"})

db.books.insert({title:"Book 02 title",description:"Book 02 description",category:"Nodejs",author:"Le Hung",publisher:"somewhere",price:"29.99",cover:"node2.jpg"})

db.books.find();

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

## FUNCTIONS
### Admin CRUD
- Edit & Delete
- List & Add

### Shopping Cart
'''
npm install dustjs-helpers --save // view helpers
'''

### Expansion
- Login
- Template
- Contact form
- Locale language

## MEMO
- http://krakenjs.com/
- http://foundation.zurb.com/
