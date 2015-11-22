var myApp = angular.module('GeoWords', ['wc.Directives', 'angular-table']);


myApp.controller('pageCtrl', ['$scope', function ($scope) {

    $scope.contents = {

        rhymeContent: {
            active: 'active',
            header: 'რითმა'
        },
        wildCardContent: {
            active: '',
            header: 'wildCard-ით ძებნა'
        },
        regexContent: {
            active: '',
            header: 'რეგექსით ძებნა'
        },
        statisticContent: {
            active: '',
            header: 'სტატისტიკა'
        }
    }
    $scope.currentActiveContent = $scope.contents.rhymeContent;

    $scope.changeCurrentContent = function (choosedContent) {
        $scope.currentActiveContent.active = '';
        $scope.currentActiveContent = choosedContent;
        $scope.currentActiveContent.active = 'active';
    }
}]);

myApp.controller('regexCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.uniqueName = 'regexTemplatePanel';
    $scope.placeholder = 'მიუთითეთ რეგექსი';
    $scope.buttonText = 'რეგექსების მაგალითები'
    $scope.examples = [{
        labelStatus: 'danger',
        labelValue: 'გაითვალისწინეთ',
        definition: ' range-ს [ა-ჰ] გამოყენებისას ბაზაში სიტყვები იძებნება ინგლისური ანბანური მიმდევრობით, ანუ გვექნება [a-h]'
    }, {
        labelStatus: 'success',
        labelValue: '[აბგ]',
        definition: 'სიტყვები, რომლებშიც ერთი ასოა ა,ბ ან გ'
    }, {
        labelStatus: 'success',
        labelValue: '[^აბგ]',
        definition: 'სიტყვები, რომლებშიც ურევია ერთი ა,ბ,გ -სგან განსხვავებული ასო',
    },
    {
        labelStatus: 'success',
        labelValue: '.',
        definition: 'სიტყვები, რომელშიც ერთი ნებისმიერი ასო ურევია',
    },
    {
        labelStatus: 'success',
        labelValue: '[ა-ე]',
        definition: 'სიტყვები, რომელშიც ერთ-ერთი ასოა ა,ბ,გ,დ ან ე',
    },
    {
        labelStatus: 'success',
        labelValue: 'ტესტი',
        definition: 'სიტყვები რომლებშიც "ტესტი" ურევია',
    }
    , {
        labelStatus: 'success',
        labelValue: '^ტესტი$',
        definition: ' ^ აღნიშნავს სიტყვის დასაწყისს,$ დასასრულს',
    }, {
        labelStatus: 'success',
        labelValue: '.',
        definition: 'წამოიღებს სიტყვებს რომელშიც ნებისმიერი ასო  ურევია',
    }, {
        labelStatus: 'success',
        labelValue: '.',
        definition: 'წამოიღებს სიტყვებს რომელშიც ნებისმიერი ასო  ურევია',
    }, {
        labelStatus: 'success',
        labelValue: '.',
        definition: 'წამოიღებს სიტყვებს რომელშიც ნებისმიერი ასო  ურევია',
    }, {
        labelStatus: 'success',
        labelValue: '.',
        definition: 'წამოიღებს სიტყვებს რომელშიც ნებისმიერი ასო  ურევია',
    }, {
        labelStatus: 'success',
        labelValue: '.',
        definition: 'წამოიღებს სიტყვებს რომელშიც ნებისმიერი ასო  ურევია',
    }];


    /*
[^abc]	not a, b, or c
[a-g]	character between a & g


    */

    $scope.searchAction = function (word) {
        $scope.result = [];
        $http.get('php/getWordByRegex.php', { params: { template: word } }).then(function (response) {
            if (Object.prototype.toString.call(response.data) === '[object Array]') {
                $scope.error = '';
                $scope.result = response.data;
                if (response.data.length === 0) {
                    $scope.error = 'ჩანაწერები არ მოიძებნა';
                }
            } else {
                console.log('დაფიქსირებული შეცდომაა:');
                console.log(response);
                $scope.error = 'სამწუხაროდ დაფიქსირდა შეცდომა ...';
            }
        }, function (error) {
            console.log('დაფიქსირებული შეცდომაა:');
            console.log(error);
            $scope.error = 'სამწუხაროდ დაფიქსირდა შეცდომა ...';
        });
    }

}]);

myApp.controller('rhymeCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.uniqueName = 'rhymeTemplatePanel';
    $scope.placeholder = 'ჩაწერეთ გასარითმი სიტყვა';

    $scope.searchAction = function (word) {
        $scope.result = [];
        $http.get('php/getWordByRhyme.php', { params: { template: word } }).then(function (response) {
            if (Object.prototype.toString.call(response.data) === '[object Array]') {
                $scope.error = '';
                $scope.result = response.data;
                if (response.data.length === 0) {
                    $scope.error = 'ჩანაწერები არ მოიძებნა';
                }
            } else {
                console.log('დაფიქსირებული შეცდომაა:');
                console.log(response);
                $scope.error = 'სამწუხაროდ დაფიქსირდა შეცდომა ...';
            }
        }, function (error) {
            console.log('დაფიქსირებული შეცდომაა:');
            console.log(error);
            $scope.error = 'სამწუხაროდ დაფიქსირდა შეცდომა ...';
        });
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
        labelStatus: 'info',
        labelValue: '%ჯი',
        definition: 'დომეინების კრეატიული სახელები'
    }]

    $scope.searchAction = function (word) {

        $scope.result = [];
        $http.get('php/getWordByWildcard.php', { params: { template: word } }).then(function (response) {
            if (Object.prototype.toString.call(response.data) === '[object Array]') {
                $scope.error = '';
                $scope.result = response.data;
                if (response.data.length === 0) {
                    $scope.error = 'ჩანაწერები არ მოიძებნა';
                }
            } else {
                console.log('დაფიქსირებული შეცდომაა:');
                console.log(response);
                $scope.error = 'სამწუხაროდ დაფიქსირდა შეცდომა ...';
            }
        }, function (error) {
            console.log('დაფიქსირებული შეცდომაა:');
            console.log(error);
            $scope.error = 'სამწუხაროდ დაფიქსირდა შეცდომა ...';
        });
    }

}]);

myApp.controller('statisticCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('php/getWidgetStatistics.php').then(function (response) {
        $scope.widgetStatistics = response.data;
    });

    $http.get('php/getTableStatistics.php', { params: { flag: "word" } }).then(function (response) {
        $scope.commonWords = response.data;
    });

    $http.get('php/getTableStatistics.php', { params: { flag: "char" } }).then(function (response) {
        $scope.commonChars = response.data;
    });

}]);



myApp.controller('examplesController', ['$scope', function ($scope) {
    $scope.arrow = 'down';
    $scope.slidePlease = function () {
        $("#" + $scope.uniqueName).slideToggle("slow");
        $scope.arrow = ($scope.arrow == 'down' ? 'up' : 'down');
    }
}]);


myApp.controller('SearchWordCtrl', ['$scope', function ($scope) {
}]);



myApp.controller('ResultTableCtrl', function ($scope) {
    if (!$scope.list) $scope.list = [];
    $scope.updateConfig = function (newList) {
        $scope.config = {
            itemsPerPage: newList.length < 20 ? newList.length + 1 : 20,
            fillLastPage: true,
            maxPages: 10
        }
    }
    $scope.updateConfig($scope.list);
    $scope.$watchCollection('list', $scope.updateConfig);


});







