# Project 17: TODO (Meteor.js)

## GET STARTED
- Install Meteor.js https://www.meteor.com/install
```
curl https://install.meteor.com/ | sh
cd todo
meteor npm install
meteor
```
- http://localhost:3000

## TEMPLATE
```
# remove default template
meteor remove blaze-html-templates

# add angular template
meteor add angular-templates

# npm install
meteor npm install --save angular angular-meteor
```

## MONGO DB
```
meteor mongo 

# inser data to db
db.tasks.insert({ text: "Hello world!", createdAt: new Date() });
```

## REFERENCE
- Angularjs todo app https://www.meteor.com/tutorials/angular/creating-an-app
- Collections and Schemashttps://guide.meteor.com/collections.html 
- Application structure https://guide.meteor.com/structure.html