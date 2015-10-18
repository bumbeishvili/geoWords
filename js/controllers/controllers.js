var myApp = angular.module('GeoWords', []);

myApp.controller('pageCtrl', ['$scope', function ($scope) {

    $scope.contents = {
        wildCardContent: {
            active: 'active',
            header: 'wildCards'
        },
        regexContent: {
            active: '',
            header: 'რეჯექსი'
        },
        rhymeContent: {
            active: '',
            header: 'რითმა'
        }
    }
    $scope.currentActiveContent = $scope.contents.wildCardContent;

    $scope.changeCurrentContent = function (choosedContent) {
        $scope.currentActiveContent.active = '';
        $scope.currentActiveContent = choosedContent;
        $scope.currentActiveContent.active = 'active';
    }
}]);

myApp.controller('regexCtrl', ['$scope', function ($scope) {
    $scope.uniqueName = 'regexTemplatePanel';
    $scope.placeholder = 'მიუთითეთ რეჯექსი';
    $scope.buttonText = 'რეჯექსების მაგალითები'
    $scope.examples = [{
        labelStatus: 'success',
        labelValue: '.',
        definition: 'წამოიღებს მხოლოდ ერთ ასობგერიან სიტყვებს'
    }]

    $scope.searchAction = function (word) {

        $scope.result = [
            { value: word },
            { value: 'რეჯექსი' },
            { value: 'რეჯ' },
            { value: 'რეჯწდადა' },
            { value: 'რეჯდფაწდწა' },
            { value: 'რეჯდწადწა' },
            { value: 'რეჯდწადწა' },
            { value: word },
            { value: 'რეჯექსი' },
            { value: 'რეჯ' },
            { value: 'რეჯწდადა' },
            { value: 'რეჯდფაწდწა' },
            { value: 'რეჯდწადწა' },
            { value: 'რეჯდწადწა' }
        ];
    }
}]);

myApp.controller('rhymeCtrl', ['$scope', function ($scope) {
    $scope.uniqueName = 'rhymeTemplatePanel';
    $scope.placeholder = 'ჩაწერეთ გასარითმი სიტყვა';

    $scope.searchAction = function (word) {
        $scope.result = [
            { value: word },
            { value: 'რითმი' },
            { value: 'რითმი' },
            { value: 'რითმი' },
            { value: 'რითმი' },
            { value: 'რითმი' },
            { value: 'რითმი' },
            { value: 'რითმი' },
            { value: 'რითმი' },
            { value: 'რითმი' },
            { value: 'რითმი' },
            { value: 'რითმი' },
            { value: 'რითმი' }
        ];
    }
}]);


myApp.controller('wildCardCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.uniqueName = 'wildCardTemplatePanel';
    $scope.placeholder = 'მიუთითეთ wildCard';
    $scope.buttonText = 'wildCard-ების მაგალითები'
    $scope.examples = [{
        labelStatus: 'success',
        labelValue: '%',
        definition: 'წამოიღებს ყველა სიტყვას, რომელშიც ნებისმიერი რაოდენობით ნებისმიერი ბგერაა'
    }, {
        labelStatus: 'success',
        labelValue: 'ველა%',
        definition: 'წამოიღებს სიტყვებს, რომლებიც იწყება ველა-ზე'
    }, {
        labelStatus: 'success',
        labelValue: '%ველა',
        definition: 'წამოიღებს სიტყვებს, რომლებიც მთავრდება ველა-ზე'
    }, {
        labelStatus: 'success',
        labelValue: '%ველა%',
        definition: 'წამოიღებს სიტყვებს, რომლებიც ურევია "ველა"'
    }, {
        labelStatus: 'success',
        labelValue: '_',
        definition: 'წამოიღებს მხოლოდ ერთ ასობგერიან სიტყვებს '
    }, {
        labelStatus: 'success',
        labelValue: '__',
        definition: 'წამოიღებს მხოლოდ ორ ასობგერიან სიტყვებს'
    }, {
        labelStatus: 'success',
        labelValue: 'მ_ღლ_ვ_',
        definition: 'წამოიღებს შვიდასოიან სიტყვებს სადაც 1-ლი, მე-3, მე-4 და მე-6 ასოა მ,ღ,ლ,ვ'
    }, {
        labelStatus: 'success',
        labelValue: '[აეიოუ]%',
        definition: 'წამოიღებს ყველა სიტყვას რომლის პირველი ასო ხმოვანია'
    }, {
        labelStatus: 'success',
        labelValue: '[ა-დ]%',
        definition: 'წამოიღებს ყველა სიტყვას რომლის პირველი ასო ა-დ შუალედშია'
    }, {
        labelStatus: 'success',
        labelValue: '[^აეიოუ]%',
        definition: 'წამოიღებს ყველა სიტყვას რომლის პირველი ასო თანხმოვანია'
    }, {
        labelStatus: 'info',
        labelValue: '%ჯი',
        definition: 'დომეინების კრეატიული სახელები'
    }]

    $scope.searchAction = function (word) {

        $scope.result = [];
        $http.get('php/getWordByWildcard.php', { params: { template: word } }).then(function (response) {
            $scope.error = '';
            $scope.result = response.data;
        }, function (error) {
            console.log('დაფიქსირებული შეცდომაა:');
            console.log(error);
            $scope.error = 'სამწუხაროდ დაფიქსირდა შეცდომა ...';
        });

           
        
    }
}]);


myApp.controller('examplesController', ['$scope', function ($scope) {
    $scope.isExpanding = true;
    $scope.slidePlease = function () {
        $("#" + $scope.uniqueName).slideToggle("slow");
        if ($scope.isExpanding) {
            $(".examples span").removeClass("glyphicon-chevron-down");
            $(".examples span").addClass("glyphicon-chevron-up")
            $scope.isExpanding = false;
        }
        else {
            $(".examples span").removeClass("glyphicon-chevron-up")
            $(".examples span").addClass("glyphicon-chevron-down");
            $scope.isExpanding = true;
        }
    }
}]);


myApp.controller('SearchWordCtrl', ['$scope', function ($scope) {
}]);







myApp.run(function () {
    setTimeout(function () {
        jQuery('.geokbd').geokbd();
    }, 400);
})