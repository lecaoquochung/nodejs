import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todosList.html';
import { Tasks } from '../../api/tasks.js';

class TodosListCtrl {

    // constructor
    // TODO How to use that thing?
    // var $scope, this.helpers
    constructor($scope) {
        $scope.viewModel(this);

        this.helpers({
            tasks() {
                // return Tasks.find({}); // find in db

                // Show newest tasks at the top
                return Tasks.find({}, {
                    sort: {
                        createdAt: -1
                    }
                });
            }
        })
    }

    // add task
    addTask(newTask) {
        // Insert a task into the collection
        Tasks.insert({
            text: newTask,
            createdAt: new Date
        });

        // Clear form
        this.newTask = '';
    }

}

export default angular.module('todosList', [
        angularMeteor
    ])
    .component('todosList', {
        templateUrl: 'imports/components/todosList/todosList.html',
        controller: TodosListCtrl
    });
