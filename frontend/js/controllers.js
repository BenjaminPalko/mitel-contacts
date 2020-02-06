
let app = angular.module('MitelContacts', []);


app.controller('ContactController', function ($scope, $http) {

    $scope.getContacts = function () {
        $http({
            url: "http://localhost:3000/",
            method: "GET",
        }).then(function (response) {
            $scope.contacts = response.data;
        });
    };

    $scope.getNContacts = function () {

        if(!$scope.limit || $scope.limit === 0) {
            $scope.getContacts();
            return;
        }

       $http({
            url: "http://localhost:3000/nResults",
            method: "POST",
            data: {
                limit: $scope.limit
            },
            headers: {'Content-Type': 'application/json'},
        }).then(function (response) {
            $scope.contacts = response.data;
        });
    };

    $scope.postContact = function () {
        $http({
            url: 'http://localhost:3000/add',
            method: 'POST',
            data: {
                name: $scope.name,
                email: $scope.email,
                phone: $scope.phone,
            },
            headers: {'Content-Type': 'application/json'},
        });
        setTimeout(() => {$scope.getContacts()}, 300)
    };

});
