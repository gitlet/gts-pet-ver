/**
 * Created by zoodoo92 on 16/06/16.
 */
// alert('Hi');
angular
    .module('gts', [
        'ui.router'
])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            // .state('login', {
            //     url: '/',
            //     templateUrl: 'templates/login.html',
            //     controller: 'loginCtrl'
            // });
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            });
    }]);