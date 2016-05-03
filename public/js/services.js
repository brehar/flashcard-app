'use strict';

var app = angular.module('flashcardApp');

app.service('Flashcards', function($http) {
    this.getFlashcards = () => {
        return $http.get('/api/flashcards');
    };

    this.getAngularFlashcards = () => {
        return $http.get('/api/flashcards/angular');
    };

    this.getJavascriptFlashcards = () => {
        return $http.get('/api/flashcards/javascript');
    };

    this.getJqueryFlashcards = () => {
        return $http.get('/api/flashcards/jquery');
    };

    this.getNodeFlashcards = () => {
        return $http.get('/api/flashcards/node');
    };
    
    this.saveFlashcard = flashcard => {
        return $http.post('/api/flashcards', flashcard);
    };
    
    this.removeFlashcard = id => {
        return $http.delete(`/api/flashcards/${id}`);
    };
    
    this.updateFlashcard = (id, newFlashcard) => {
        return $http.put(`/api/flashcards/${id}`, newFlashcard);
    };
});