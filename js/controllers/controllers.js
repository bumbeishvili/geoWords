var myApp = angular.module('GeoWords', []);

myApp.controller('pageCtrl', ['$scope', function ($scope) {

    $scope.contents = {
        wildCardContent: {
            active: 'active',
            header: 'ვაილდქარდი'
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
    $scope.examples = [{
        labelStatus: 'success',
        labelValue: '.',
        definition: 'წამოიღებს მხოლოდ ერთ ასობგერიან სიტყვებს'
    }]
    $scope.searchAction = function (word) {

    }
}]);

myApp.controller('rhymeCtrl', ['$scope', function ($scope) {
    $scope.uniqueName = 'rhymeTemplatePanel';
    $scope.searchAction = function (word) {

    }
}]);

myApp.controller('wildCardCtrl', ['$scope', function ($scope) {
    $scope.uniqueName = 'wildCardTemplatePanel';
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

