'use strict';

var app = angular.module('flashcardApp');

app.controller('homeCtrl', function() {
    
});

app.controller('angularCtrl', function($scope, $state, Flashcards) {
    Flashcards.getAngularFlashcards().then(res => {
        $scope.flashcards = res.data;
        $scope.flashcard = $scope.flashcards[0];
    });

    $scope.showAnswer = function() {
        $scope.answer = true;
    };

    $scope.showNextQuestion = function() {
        $scope.answer = false;
        $scope.flashcards.shift();

        if (!$scope.flashcards.length) {
            $state.go('home');
        } else {
            $scope.flashcard = $scope.flashcards[0];
        }
    };
});

app.controller('javascriptCtrl', function($scope, $state, Flashcards) {
    Flashcards.getJavascriptFlashcards().then(res => {
        $scope.flashcards = res.data;
        $scope.flashcard = $scope.flashcards[0];
    });

    $scope.showAnswer = function() {
        $scope.answer = true;
    };

    $scope.showNextQuestion = function() {
        $scope.answer = false;
        $scope.flashcards.shift();

        if (!$scope.flashcards.length) {
            $state.go('home');
        } else {
            $scope.flashcard = $scope.flashcards[0];
        }
    };
});

app.controller('jqueryCtrl', function($scope, $state, Flashcards) {
    Flashcards.getJqueryFlashcards().then(res => {
        $scope.flashcards = res.data;
        $scope.flashcard = $scope.flashcards[0];
    });

    $scope.showAnswer = function() {
        $scope.answer = true;
    };

    $scope.showNextQuestion = function() {
        $scope.answer = false;
        $scope.flashcards.shift();

        if (!$scope.flashcards.length) {
            $state.go('home');
        } else {
            $scope.flashcard = $scope.flashcards[0];
        }
    };
});

app.controller('nodeCtrl', function($scope, $state, Flashcards) {
    Flashcards.getNodeFlashcards().then(res => {
        $scope.flashcards = res.data;
        $scope.flashcard = $scope.flashcards[0];
    });

    $scope.showAnswer = function() {
        $scope.answer = true;
    };

    $scope.showNextQuestion = function() {
        $scope.answer = false;
        $scope.flashcards.shift();

        if (!$scope.flashcards.length) {
            $state.go('home');
        } else {
            $scope.flashcard = $scope.flashcards[0];
        }
    };
});

app.controller('manageCtrl', function($scope, Flashcards) {
    $('ul.tabs').tabs();

    $scope.filterCategory = 'Angular';
    
    $scope.setCategory = function(category) {
        $scope.filterCategory = category;
    };
    
    Flashcards.getFlashcards().then(res => {
        $scope.flashcards = res.data;
    });

    $scope.addQuestion = function() {
        $scope.questionToAdd = true;
    };

    $scope.cancelAdd = function() {
        $scope.questionToAdd = false;
    };
    
    $scope.saveQuestion = function() {
        Flashcards.saveFlashcard($scope.newQuestion).then(res => {
            $scope.flashcards.push(res.data);
            $scope.questionToAdd = false;
            $scope.newQuestion = {};
        });
    };

    $scope.removeFlashcard = function(id, flashcard) {
        var index = $scope.flashcards.indexOf(flashcard);

        Flashcards.removeFlashcard(id).then(res => {
            $scope.flashcards.splice(index, 1);
        });
    };

    var editingIndex;

    $scope.editFlashcard = function(id, flashcard) {
        editingIndex = $scope.flashcards.indexOf(flashcard);
        $scope.flashcardToEdit = angular.copy(flashcard);
    };

    $scope.saveEdit = function() {
        Flashcards.updateFlashcard($scope.flashcardToEdit._id, $scope.flashcardToEdit).then(res => {
            $scope.flashcards[editingIndex] = $scope.flashcardToEdit;
            $scope.flashcardToEdit = null;
        });
    };

    $scope.cancelEdit = function() {
        $scope.flashcardToEdit = null;
    };
});