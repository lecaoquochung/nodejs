# Project 8007: DBook (Ebook shopping cart)

## Dependencies
- kranken
```
npm install -g yo generator-kraken bower grunt-cli
yo kraken
npm install --save mongodb mongoose connect-flash express-messages

npm install --save dustjs-helpers
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
db.createCollection('categories');

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

## TODO
- Alert message validation with form
- CSRF token missing after redirect from paypal
```
Error: CSRF token missing
   at checkCsrf (/Users/hungle/Sites/projects/nodejs/dbook/node_modules/lusca/lib/csrf.js:89:18)
   at /Users/hungle/Sites/projects/nodejs/dbook/node_modules/lusca/index.js:48:21
   at xframe (/Users/hungle/Sites/projects/nodejs/dbook/node_modules/lusca/lib/xframes.js:12:9)
   at /Users/hungle/Sites/projects/nodejs/dbook/node_modules/lusca/index.js:48:21
   at lusca (/Users/hungle/Sites/projects/nodejs/dbook/node_modules/lusca/index.js:53:9)
   at Layer.handle [as handle_request] (/Users/hungle/Sites/projects/nodejs/dbook/node_modules/express/lib/router/layer.js:95:5)
   at trim_prefix (/Users/hungle/Sites/projects/nodejs/dbook/node_modules/express/lib/router/index.js:312:13)
   at /Users/hungle/Sites/projects/nodejs/dbook/node_modules/express/lib/router/index.js:280:7
   at Function.process_params (/Users/hungle/Sites/projects/nodejs/dbook/node_modules/express/lib/router/index.js:330:12)
   at next (/Users/hungle/Sites/projects/nodejs/dbook/node_modules/express/lib/router/index.js:271:10)
   at Immediate.<anonymous> (/Users/hungle/Sites/projects/nodejs/dbook/node_modules/express-session/index.js:473:7)
   at Immediate.immediate._onImmediate (timers.js:440:18)
   at processImmediate [as _immediateCallback] (timers.js:383:17)
```
- Mongodb delete collection

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
