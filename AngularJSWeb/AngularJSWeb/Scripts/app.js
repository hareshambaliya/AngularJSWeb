(function (undefined) {
    angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
    .config(['$routeProvider', '$locationProvider',
      function ($routeProvider, $locationProvider) {
          $routeProvider
            .when('/', {
                templateUrl: 'home.aspx'
            })
            .when('/About', {
                templateUrl: 'About.aspx'
            })
            .when('/Contact', {
                templateUrl: 'Contact.aspx'
            })
            .otherwise('/');
          //.when('/classrooms/:id', {
          //    controller: 'ClassroomsController',
          //    controllerAs: 'classrooms',
          //    templateUrl: 'about.aspx',
          //    redirectTo: function (params, currPath, currSearch) {
          //        console.log(params);
          //        console.log(currPath);
          //        console.log(currSearch);
          //        return '/'; 
          //    }
          //});
          $locationProvider.html5Mode(true);
      }]);

    angular.module('ngViewExample').run(['$rootScope', '$log', function ($rootScope, $log) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $log.debug('success fully change');
            $log.debug(event);
            $log.debug(current);
            $log.debug(previous);
        });
    }]);
})();

