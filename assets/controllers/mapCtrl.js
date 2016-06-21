/**
 * Created by zoodoo92 on 18/06/16.
 */
angular
    .module('gts')
    .controller('mapCtrl', ['$scope', function ($scope) {
        $scope.title = 'Home page';
        $scope.items = ['apple', 'mango', 'banana'];
    }]);  