'use strict';

var app = angular.module('flashcardApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/html/home.html',
        controller: 'homeCtrl'
    }).state('manage', {
        url: '/manage',
        templateUrl: '/html/manage.html',
        controller: 'manageCtrl'
    }).state('angular', {
        url: '/angular',
        templateUrl: '/html/cards.html',
        controller: 'angularCtrl'
    }).state('javascript', {
        url: '/javascript',
        templateUrl: '/html/cards.html',
        controller: 'javascriptCtrl'
    }).state('jquery', {
        url: '/jquery',
        templateUrl: '/html/cards.html',
        controller: 'jqueryCtrl'
    }).state('node', {
        url: '/node',
        templateUrl: '/html/cards.html',
        controller: 'nodeCtrl'
    });

    $urlRouterProvider.otherwise('/');
});