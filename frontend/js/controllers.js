let app = angular.module('MitelContacts', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.controller('ContactModalCtrl', function ($scope, $http, $uibModal) {

    let $ctrl = this;

    $ctrl.open = function () {
        $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'ContactModalContent.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
        })
    }
});

angular.module('MitelContacts').controller('ModalInstanceCtrl', function ($scope, $http, $uibModalInstance) {

    let $ctrl = this;

    $ctrl.submit = function () {
        $http({
            url: 'http://localhost:3000/add',
            method: 'POST',
            data: {
                name: $scope.name,
                email: $scope.email,
                phone: $scope.phone,
            },
            headers: {'Content-Type': 'application/json'},
        }).then(function () {
            setTimeout(() => {
                $scope.getContacts()
            }, 300);
            $uibModalInstance.close()
        });
    };
    $ctrl.close = function () {
        $uibModalInstance.close()
    }
});


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

        if (!$scope.limit || $scope.limit === 0) {
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

});
