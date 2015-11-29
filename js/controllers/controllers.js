var myApp = angular.module('GeoWords', ['wc.Directives', 'angular-table']);

myApp.run(function ($rootScope) {
    $rootScope.labels = {};

    $rootScope.geoLabels = {
        search: 'მოძებნე',
        rhyme: 'რითმა',
        wildcard_search: 'wildCard-ით ძებნა',
        regex_search: 'რეგექსით ძებნა',
        statistics: 'სტატისტიკა',
        input_regex: 'მიუთითეთ რეგექსი',
        regex_examples: 'რეგექსების მაგალითები',
        input_rhymed_word: 'ჩაწერეთ გასარითმი სიტყვა',
        input_wildcard: 'მიუთითეთ wildCard',
        wildcard_examples: 'wildCard-ების მაგალითები',
        word: 'სიტყვა',
        nomer: 'ნომერი',
        words_quantity: 'სიტყვების რაოდენობაა',
		unik_words_count:'უნიკალური სიტყვების რაოდენობა',
		all_words_count:'მთლიანი სიტყვების რაოდენობა',
		characters_count:'ასო-ბგერების რაოდენობა',
		most_repeated_word:'ყველაზე განმეორებადი სიტყვა',
		most_repeated_character:'ყველაზე განმეორებადი ასო-ბგერა',
		less_repeated_character:'ნაკლებ განმეორებადი ასო-ბგერა',
		most_repeated_word:' ყველაზე განმეორებადი სიტყვა ',
		word:'სიტყვა',
		quantity_in_db:'რაოდენობა ბაზაში',
		percent:'პროცენტული ფარდობა',
		characters_frequency:'ასო ბგერათა სიხშირე',
		character:'ასო-ბგერა'
    };

    $rootScope.engLabels = {
        search: 'Search',
        rhyme: 'Rhyme',
        wildcard_search: 'WildCard search',
        regex_search: 'Regex Search',
        statistics: 'Statistics',
        input_regex: 'Input regex',
        regex_examples: 'Regex examples',
        input_rhymed_word: 'Input rhyme word',
        input_wildcard: 'Input wildCard',
        wildcard_examples: 'WildCard examples',
        word: 'Word',
        nomer: 'Nomer',
        words_quantity: 'Words quantity',
		unik_words_count:'Unique words quantity',
		all_words_count:'All words count',
		characters_count:'Characters count',
		most_repeated_word:'Most repeated word',
		most_repeated_character:'Most repeated character',
		less_repeated_character:'Less repeated character',
		most_repeated_word:'Most repeated word',
		word:'word',
		quantity_in_db:'Quantity in database',
		percent:'Percent',
		characters_frequency:'Characters frequency',
		character:'character'
    };

    $rootScope.geoLang = function () {
        $rootScope.labels = $rootScope.geoLabels;
<<<<<<< .merge_file_a04532
		createCookie("lang","geo",30);
		$rootScope.currentLang='geo';
=======
>>>>>>> .merge_file_a08496
    }

    $rootScope.engLang = function () {
        $rootScope.labels = $rootScope.engLabels;
<<<<<<< .merge_file_a04532
		createCookie("lang","eng",30);
		$rootScope.currentLang='eng';
=======
>>>>>>> .merge_file_a08496
    }

    $rootScope.trnsl = function (key,y) {
		if(y){
			debugger;
		}
        var word = $rootScope.labels[key];

        if (word != undefined) {
            return word;
        };
        return key;
    };

    function initialiseLanguage() {
        $rootScope.currentLang = getCookie('lang');
		if(!$rootScope.currentLang){
			createCookie("lang","eng",30);
		}
        setLanguage($rootScope.currentLang);
    }
    function setLanguage(lang) {
        if (lang === 'geo') {
            $rootScope.labels = $rootScope.geoLabels;
        } else {
            $rootScope.labels = $rootScope.engLabels;
        }
    }
    var createCookie = function (name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    }

    initialiseLanguage()

});


myApp.controller('pageCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.root = $rootScope;

    $scope.contents = {

        rhymeContent: {
            active: 'active',
            header: 'rhyme'
        },
        wildCardContent: {
            active: '',
            header: 'wildcard_search'
        },
        regexContent: {
            active: '',
            header: 'regex_search'
        },
        statisticContent: {
            active: '',
            header: 'statistics'
        }
    }

    $scope.currentActiveContent = $scope.contents.rhymeContent;

    $scope.changeCurrentContent = function (choosedContent) {
        $scope.currentActiveContent.active = '';
        $scope.currentActiveContent = choosedContent;
        $scope.currentActiveContent.active = 'active';
    }

}]);

myApp.controller('regexCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $scope.root = $rootScope;
    $scope.uniqueName = 'regexTemplatePanel';
    $scope.placeholder = "input_regex";
    $scope.buttonText = "regex_examples";
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

myApp.controller('rhymeCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $scope.uniqueName = 'rhymeTemplatePanel';
    $scope.placeholder ="input_rhymed_word"; //'ჩაწერეთ გასარითმი სიტყვა'


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


myApp.controller('wildCardCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $scope.uniqueName = 'wildCardTemplatePanel';
    $scope.placeholder = "input_wildcard";
    $scope.buttonText ="wildcard_examples";
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

myApp.controller('statisticCtrl', ['$scope', '$http','$rootScope', function ($scope, $http,$rootScope) {
	$scope.root=$rootScope;
    $http.get('php/getWidgetStatistics.php').then(function (response) {
        $scope.widgetStatistics = response.data;
    });

    $http.get('php/getTableStatistics.php', { params: { flag: "MostCommonWords" } }).then(function (response) {
        $scope.commonWords = response.data;
    });

    $http.get('php/getTableStatistics.php', { params: { flag: "GeoCharsCount" } }).then(function (response) {
        $scope.commonChars = response.data;
    });

}]);



<<<<<<< .merge_file_a04532
myApp.controller('examplesController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	
=======
myApp.controller('examplesController', ['$scope','$rootScope', function ($scope,$rootScope) {
>>>>>>> .merge_file_a08496
    $scope.root=$rootScope;
    $scope.arrow = 'down';
    $scope.slidePlease = function () {
        $("#" + $scope.uniqueName).slideToggle("slow");
        $scope.arrow = ($scope.arrow == 'down' ? 'up' : 'down');
    }
}]);


myApp.controller('SearchWordCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.root = $rootScope;
}]);



myApp.controller('ResultTableCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.root = $rootScope;
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


}]);







