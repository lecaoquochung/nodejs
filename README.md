# NODEJS - Practice nodejs
- [ ] Project 01: Contact form
- [ ] Project 02: Website
- [ ] Project 03: Blog
- [ ] Project 04: Login system
- [ ] Project 05: Works (Job board with MEAN.js)
- [ ] Project 06: Image Sharing API
- [x] Project 07: Shopping Cart
- [ ] Project 08: Community Events
- [ ] Project 09: ChatIO (web socket)
- [ ] Project 10: Find data (Cassandra)
- [ ] Project 11: Personal Portfolio (MySQL)
- [ ] Project 12: Elearning (User permission basic)
- [ ] Project 13: Recipe (PostgreSQL)
- [ ] Project 14: SocketIO
- [ ] Project 15: Express Framework
- [ ] Project 16: E-commerce (Amazon clone)
- [ ] Project 17: TODO (METEOR.js & Angular)
- [ ] Project 18: TODO2 (METEOR.js & React)
- [ ] Project 19: Tools
- [ ] Project 20: Forum
- [ ] Project 21: Angular
- [ ] Project 22: React
- [ ] Project 23: ORM (Database with Sequelize)
- [ ] Project 24: Promise
- [ ] Project 25: Mongodb
- [ ] Project 26:
- [ ] Reference

## Project 01: Contact Form

## Project 02: Website
- Express
- Layout
- JSON data file
- Contact

## Project 03: Blog
- [ ] Mongodb
- [ ] Middleware
- [ ] Routes & Views
- [ ] Categories
- [ ] Articles
- [ ] Comments

## Project 04: Login system

## Project 07: Shopping Cart
- [x] Init
- [x] Routes & Views
- [x] Database & Models
- [x] Admin CRUD
- [x] Shopping Cart
- [ ] Expansion

### Init
- kranken & foundation http://krakenjs.com/
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
'''
npm install dustjs-helpers --save // view helpers
'''

### Expansion
- Login
- Template
- Contact form
- Locale language

### Reference
 - http://krakenjs.com/
 - http://foundation.zurb.com/

## Project 09: ChatIO (web socket)
### Chat Interface
- Raw HTML, CSS

### Sending Chat Message

### User Functionality

### Deploy with Heroku

### Reference
- SocketIO http://socket.io/docs/

## Project 14: SocketIO
### Init
- Raw HTML, CSS
- Localhost http://localhost/projects/nodejs/project14/frontend.html

### Communication
- client -> server (broadcast)
- server -> client (broadcast)
 - server assigns a color to user
 - server sends entire message history
 - server broadcasts a message to all users

```
npm install websocket
```

### Front-end Javascript


### Up & Running the Server

### Expansion
- Data & Statistics
- Running under windows

### Reference
- http://usualcarrot.com/nodejs-and-websocket-simple-chat-tutorial
- In-depth websocket http://lucumr.pocoo.org/2012/9/24/websockets-101/ (own backend application for web socket like Java, C++)
- Nodejs Websocket https://github.com/miksago/node-websocket-server
- Web Socket for window user https://github.com/theturtle32/WebSocket-Node#note-for-windows-users
- V8 JavaScript Engine https://bugs.chromium.org/p/v8/issues/list

## Project 15: Express Framework
### Navigation
- [x] Init
- [ ] Write file
- [ ] Read file
- [ ] Reference
### Init
```
# cmd
node -v
npm Init
npm install --save express
npm install --save express-handlebars // Express view engine

# package.json
"private": true, // package.json
```

### Write file

### Read file

### Reference
- https://codek.tv/v/xDCKcNBFsuI/express-tutorial/

## Project 16: Amazon Clone

### Reference
- https://www.udemy.com/build-an-amazon-clone-nodejs-stripe-elasticsearch/?pmtag=SEPT1202

## Reference
- mlab.com
- http://jedireza.github.io/drywall
- Closure & Javascript https://www.sitepoint.com/google-closure-how-not-to-write-javascript/
- SPHINX document http://www.sphinx-doc.org/en/stable/
