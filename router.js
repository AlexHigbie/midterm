angular.module('newsApp')
  .config(Router)

  Router.$inject = ['$routeProvider']

  function Router ($routeProvider) {

    $routeProvider
    .when('/', {
      templateUrl: '/templates/home.html'
    })
    .when('/US', {
      templateUrl: '/templates/USnews.html'
    })
    .when('/Sports', {
      templateUrl: '/templates/Sports.html'
    })
    .when('/Tech', {
      templateUrl: '/templates/Tech.html'
    })
    .when('/World', {
      templateUrl: '/templates/Worldnews.html'
    })
    .otherwise({ redicrectTo: '/'})
  }
