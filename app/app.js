var mainApp = angular.module("mainApp", []);
mainApp.controller('myController', function($scope, $http) {
    $scope.hint = "<p>sample</p>";
    $scope.loadJson = function() {
        var getDataJson = $http.get('data.json');
        getDataJson.success(function(data, status, headers, config){
            $scope.data = data;
        });
        getDataJson.error(function(data, status, headers, config){
           throw new Error("Error");
        });
    }
});
