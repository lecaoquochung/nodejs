import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todosList.html';
import { Tasks } from '../../api/tasks.js';

class TodosListCtrl {

    // constructor
    // TODO How to use that thing?
    // var $scope, this.helpers
    // angularjs pre-define libs
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

    // add task input
    addTask(newTask) {
        // Insert a task into the collection
        Tasks.insert({
            text: newTask,
            createdAt: new Date
        });

        // Clear form
        this.newTask = '';
    }

    // check box
    setChecked(task) {
        // Set the checked property to the opposite of its current value
        Tasks.update(task._id, {
            $set: {
                checked: !task.checked
            },
        });
    }

    // remove task
    removeTask(task) {
        Tasks.remove(task._id);
    }

}

export default angular.module('todosList', [
        angularMeteor
    ])
    .component('todosList', {
        templateUrl: 'imports/components/todosList/todosList.html',
        controller: TodosListCtrl
    });
