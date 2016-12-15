import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todosList';

angular.module('simple-todos', [
  angularMeteor,
  todosList.name
]);

// bootstrap angularjs
function onReady() {
  angular.bootstrap(document, ['simple-todos']);
}

// mobile
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
