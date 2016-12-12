# BLOG

## Dependencies
```
# generate default express skeleton with jade view
express --view=jade blog 

npm install --save app-module-path
npm install --save monk
npm install --save connect-flash
npm install --save express-validator
npm install --save express-session
npm install --save messages
npm install --save multer
npm install --save moment
npm install --save mongodb
npm install --save express-messages

## Init Db
```
dbname: nodeblog
db.createCollection('categories');
db.createCollection('posts');

db.posts.insert({title:"Blog post one", category:"Technology", author:"Hung Le", body: "Body", date:ISODate()});
db.posts.insert({title:"Blog post two", category:"Science", author:"Dep Trai", body: "Body 2", date:ISODate()});
```

## Functions
1. Init Source 
2. Template
3. Add post
4. Text Editor & Add categories
5. Truncate text & Category view
6. Single post & Comments

