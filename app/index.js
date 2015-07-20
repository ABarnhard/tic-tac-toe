(function(){
  'use strict';

  angular.module('tictactoe', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home',     {url:'/',         templateUrl:'/views/home/home.html',         controller:'HomeCtrl as home'})
        .state('game',     {url:'/game',     templateUrl:'/views/game/game.html',         controller:'GameCtrl as game'})
        .state('results',  {url:'/results',  templateUrl:'/views/results/results.html',   controller:'ResultsCtrl as results'});
    }]);
})();
