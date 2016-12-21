# Project 17: TODO (Meteor.js)

## GET STARTED
```
# install meteor
curl https://install.meteor.com/ | sh
cd todo
meteor npm install
meteor

# init ios (mac only)
meteor install-sdk ios
meteor add-platform ios
meteor run ios
meteor run ios-device

# init android
meteor install-sdk android
meteor add-platform android
meteor run android
meteor run android-device

Prerequistite https://guide.meteor.com/mobile.html#installing-prerequisites

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
db.tasks.insert({ text: "Task 01", createdAt: new Date() });
db.tasks.insert({ text: "Task 02", createdAt: new Date() });

# delete
db.tasks.remove({});
```

## REFERENCE
- Source https://github.com/meteor/simple-todos-angular
- Angularjs todo app https://www.meteor.com/tutorials/angular/creating-an-app
- Collections and Schemashttps://guide.meteor.com/collections.html
- Application structure https://guide.meteor.com/structure.html
