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
        unik_words_count: 'უნიკალური სიტყვების რაოდენობა',
        all_words_count: 'მთლიანი სიტყვების რაოდენობა',
        characters_count: 'ასო-ბგერების რაოდენობა',
        most_repeated_word: 'ყველაზე განმეორებადი სიტყვა',
        most_repeated_character: 'ყველაზე განმეორებადი ასო-ბგერა',
        less_repeated_character: 'ნაკლებ განმეორებადი ასო-ბგერა',
        most_repeated_word: ' ყველაზე განმეორებადი სიტყვა ',
        word: 'სიტყვა',
        quantity_in_db: 'რაოდენობა ბაზაში',
        percent: 'პროცენტული ფარდობა',
        characters_frequency: 'ასო ბგერათა სიხშირე',
        character: 'ასო-ბგერა',
        examples_words_any_wildcard_char: 'წამოიღებს ყველა სიტყვას, რომელშიც ნებისმიერი რაოდენობით ნებისმიერი ბგერაა',
        examples_words_which_start_vela: 'წამოიღებს სიტყვებს, რომლებიც იწყება ველა-ზე',
        examples_words_which_ends_vela: 'წამოიღებს სიტყვებს, რომლებიც მთავრდება ველა-ზე',
        examples_words_which_consists_vela: 'წამოიღებს სიტყვებს, რომლებიც ურევია "ველა"',
        examples_words_with_length_1: 'წამოიღებს მხოლოდ ერთ ასობგერიან სიტყვებს',
        examples_words_with_length_2: 'წამოიღებს მხოლოდ ორ ასობგერიან სიტყვებს',
        examples_words_with_length_7_mglv: 'წამოიღებს შვიდასოიან სიტყვებს სადაც 1-ლი, მე-3, მე-4 და მე-6 ასოა მ,ღ,ლ,ვ',
        examples_words_creative_domains: 'დომეინების კრეატიული სახელები',
        result_empty: 'ჩანაწერები არ მოიძებნა',
        there_is_error: 'სამწუხაროდ დაფიქსირდა შეცდომა ...',
        examples_when_using_range: 'range-ს [ა-ჰ] გამოყენებისას ბაზაში სიტყვები იძებნება ინგლისური ანბანური მიმდევრობით, ანუ გვექნება [a-h]',
        examples_words_with_abg: 'სიტყვები, რომლებშიც ერთი ასოა ა,ბ ან გ',
        examples_words_with_not_abg: 'სიტყვები, რომლებშიც ურევია ერთი ა,ბ,გ -სგან განსხვავებული ასო',
        examples_words_with_any_character: 'სიტყვები, რომელშიც ერთი ნებისმიერი ასო ურევია',
        examples_words_with_test: 'სიტყვები რომლებშიც "ტესტი" ურევია',
        examples_words_with_start_end: '^ აღნიშნავს სიტყვის დასაწყისს,$ დასასრულს',
        examples_words_with_fixed_quantity: "სიტყვები რომლებშიც 'ა' ზედიზედ ოთხჯერ მეორდება",
        examples_words_with_range_quantity: "სიტყვები, რომლებშიც 'ა' ზედიზედ 3-8 მდე მეორდება",
        examples_words_with_min_limited_quantity: "სიტყვები, რომლებშიც 'ა' ზედიზედ 3-ზე მეტჯერ მეორდება",
        examples_words_with_fixed_quantity: 'სიტყვები რომელშიც ფრაგმენტი `ტე` ან `სტი` ურევია',
        examples_words_regex_summary: 'სიტყვები, რომლებიც იწყება `^`  არათანხმოვნით `[^აეიოუ]`, მეორე ასოა ხმოვანი `[აეიოუ]`,მას მოსდევს ფრაგმენტი მო ან გა `(გა|მო)`, შემდეგ მოსდევს ნებისმიერი სიმბოლო `.` 0 ან მეტი რაოდენობით `{0,}` და შემდეგ აუცილებლად მოსდევს ხმოვანი `ა` რომელიც ორჯერ ან მეტჯერ მეორდება `{2,}` და სიტყვა ამით მთავრდება კიდეც `$`'



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
        unik_words_count: 'Unique words quantity',
        all_words_count: 'All words count',
        characters_count: 'Characters count',
        most_repeated_word: 'Most repeated word',
        most_repeated_character: 'Most repeated character',
        less_repeated_character: 'Less repeated character',
        most_repeated_word: 'Most repeated word',
        word: 'Word',
        quantity_in_db: 'Quantity in database',
        percent: 'Percent',
        characters_frequency: 'Characters frequency',
        character: 'Character',
        examples_words_any_wildcard_char: 'All words which contains any character no matter how many',
        examples_words_which_start_vela: 'Returns words, which begins as `ველა`',
        examples_words_which_ends_vela: 'Returns words, which ends as `ველა`',
        examples_words_which_consists_vela: 'Returns words, which consists of `ველა`',
        examples_words_with_length_1: 'Returns words, which lengths is 1 ',
        examples_words_with_length_2: 'Returns words, which character lengths is 2',
        examples_words_with_length_7_mglv: 'Returns words, which lengths is 7 and first,third,fourth,six characters are მ,ღ,ლ,ვ',
        examples_words_creative_domains: 'Creative domain names',
        result_empty: 'Result is empty',
        there_is_error: 'Sorry, there was error ...',
        examples_when_using_range: 'When using range operator with georgian characters [ა-ჰ] it transforms as [a-h] so expected output will be different',
        examples_words_with_abg: 'Examples_words_with_abg',//'all words which contain ა,ბ or გ,',
        examples_words_with_not_abg: 'All words which contain not ა,ბ or გ,',
        examples_words_with_any_character: 'All words which contains any character',
        examples_words_with_test: 'All words which contains word "ტესტი"' ,
        examples_words_with_start_end: '^ means word start,$ means end' ,
        examples_words_with_fixed_quantity: 'All words where `ა` is repeated together 4 times ',
        examples_words_with_range_quantity: 'All words where `ა` is repeated together from 3 to 8  times ',
        examples_words_with_min_limited_quantity: 'All words where `ა` is repeated together minimum 3 times ',
        examples_words_with_fixed_quantity: 'All words which consists of fragments `ტე` or `სტი`',
        examples_words_regex_summary: 'I am too lazy to translate this, please go http://regexone.com/ and learn yourself'
    };

    $rootScope.geoLang = function () {
        $rootScope.labels = $rootScope.geoLabels;
        createCookie("lang", "geo", 30);
        $rootScope.currentLang = 'geo';
    }

    $rootScope.engLang = function () {
        $rootScope.labels = $rootScope.engLabels;
        createCookie("lang", "eng", 30);
        $rootScope.currentLang = 'eng';
    }

    $rootScope.trnsl = function (key, y) {
        if (y) {
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
        if (!$rootScope.currentLang) {
            createCookie("lang", "eng", 30);
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
        labelValue: "warning",//'გაითვალისწინეთ',
        definition: 'examples_when_using_range',//'when using range operator with georgian characters [ა-ჰ] it transforms as [a-h] so expected output will be different',//' range-ს [ა-ჰ] გამოყენებისას ბაზაში სიტყვები იძებნება ინგლისური ანბანური მიმდევრობით, ანუ გვექნება [a-h]'
    }, {
        labelStatus: 'success',
        labelValue: '[აბგ]',
        definition: 'examples_words_with_abg',//'all words which contain ა,ბ or გ,' //'სიტყვები, რომლებშიც ერთი ასოა ა,ბ ან გ'
    }, {
        labelStatus: 'success',
        labelValue: '[^აბგ]',
        definition: 'examples_words_with_not_abg',//'all words which contain not ა,ბ or გ,' //''სიტყვები, რომლებშიც ურევია ერთი ა,ბ,გ -სგან განსხვავებული ასო',
    },
    {
        labelStatus: 'success',
        labelValue: '.',
        definition: 'examples_words_with_any_character',//'all words which contains any character' //'სიტყვები, რომელშიც ერთი ნებისმიერი ასო ურევია',
    },/*
    {
        labelStatus: 'success',
        labelValue: '[ა-ე]',
        definition: 'სიტყვები, რომელშიც ერთ-ერთი ასოა ა,ბ,გ,დ ან ე',
    },*/
    {
        labelStatus: 'success',
        labelValue: 'ტესტი',
        definition: 'examples_words_with_test',//'all words which contains word "ტესტი"' //'სიტყვები რომლებშიც "ტესტი" ურევია',
    }
    , {
        labelStatus: 'success',
        labelValue: '^ტესტი$',
        definition: 'examples_words_with_start_end',//'^ means word start,$ means end' //' ^ აღნიშნავს სიტყვის დასაწყისს,$ დასასრულს',
    }, {
        labelStatus: 'success',
        labelValue: 'ა{4}',
        definition: 'examples_words_with_fixed_quantity',//'all words where `ა` is repeated together 4 times ' //"სიტყვები რომლებშიც 'ა' ზედიზედ ოთხჯერ მეორდება",
    }, {
        labelStatus: 'success',
        labelValue: 'ა{3,8}',
        definition: 'examples_words_with_range_quantity',//'all words where `ა` is repeated together from 3 to 8  times ' //"სიტყვები, რომლებშიც 'ა' ზედიზედ 3-8 მდე მეორდება",
    }, {
        labelStatus: 'success',
        labelValue: 'ა{3,}',
        definition: 'examples_words_with_min_limited_quantity',//'all words where `ა` is repeated together minimum 3 times ' //"სიტყვები, რომლებშიც 'ა' ზედიზედ 3-ზე მეტჯერ მეორდება",
    }, {
        labelStatus: 'success',
        labelValue: '(ტე|სტი)',
        definition: 'examples_words_with_fixed_quantity',//'all words which consists of fragments `ტე` or `სტი`' //'სიტყვები რომელშიც ფრაგმენტი `ტე` ან `სტი` ურევია',
    }, {
        labelStatus: 'success',
        labelValue: '^[^აეიოუ][აეიოუ](გა|მო).{0,}ა{2,}$',
        definition: 'examples_words_regex_summary',//'I am too lazy to translate this, please go http://regexone.com/ and learn yourself' // "სიტყვები, რომლებიც იწყება `^`  არათანხმოვნით `[^აეიოუ]`, მეორე ასოა ხმოვანი `[აეიოუ]`,მას მოსდევს ფრაგმენტი მო ან გა `(გა|მო)`, შემდეგ მოსდევს ნებისმიერი სიმბოლო `.` 0 ან მეტი რაოდენობით `{0,}` და შემდეგ აუცილებლად მოსდევს ხმოვანი `ა` რომელიც ორჯერ ან მეტჯერ მეორდება `{2,}` და სიტყვა ამით მთავრდება კიდეც `$`",
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
                    $scope.error = 'result_empty';//'ჩანაწერები არ მოიძებნა';
                }
            } else {
                console.log('დაფიქსირებული შეცდომაა:');
                console.log(response);
                $scope.error = 'there_is_error';//'სამწუხაროდ დაფიქსირდა შეცდომა ...';
            }
        }, function (error) {
            console.log('დაფიქსირებული შეცდომაა:');
            console.log(error);
            $scope.error = 'there_is_error';//'სამწუხაროდ დაფიქსირდა შეცდომა ...';
        });
    }

}]);

myApp.controller('rhymeCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $scope.root = $rootScope;
    $scope.uniqueName = 'rhymeTemplatePanel';
    $scope.placeholder = "input_rhymed_word"; //'ჩაწერეთ გასარითმი სიტყვა'


    $scope.searchAction = function (word) {
        $scope.result = [];
        $http.get('php/getWordByRhyme.php', { params: { template: word } }).then(function (response) {
            if (Object.prototype.toString.call(response.data) === '[object Array]') {
                $scope.error = '';
                $scope.result = response.data;
                if (response.data.length === 0) {
                    $scope.error = 'result_empty';//'ჩანაწერები არ მოიძებნა';
                }
            } else {
                console.log('დაფიქსირებული შეცდომაა:');
                console.log(response);
                $scope.error = 'there_is_error';//'სამწუხაროდ დაფიქსირდა შეცდომა ...';
            }
        }, function (error) {
            console.log('დაფიქსირებული შეცდომაა:');
            console.log(error);
            $scope.error = 'there_is_error';//'სამწუხაროდ დაფიქსირდა შეცდომა ...';
        });
    }


}]);


myApp.controller('wildCardCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $scope.root = $rootScope;
    $scope.uniqueName = 'wildCardTemplatePanel';
    $scope.placeholder = "input_wildcard";
    $scope.buttonText = "wildcard_examples";
    $scope.examples = [{
        labelStatus: 'success',
        labelValue: '%',
        definition: 'examples_words_any_wildcard_char',//'all words which contains any character no matter how many' //'წამოიღებს ყველა სიტყვას, რომელშიც ნებისმიერი რაოდენობით ნებისმიერი ბგერაა'
    }, {
        labelStatus: 'success',
        labelValue: 'ველა%',
        definition: 'examples_words_which_start_vela',//'returns words, which begins as `ველა`' //'წამოიღებს სიტყვებს, რომლებიც იწყება ველა-ზე'
    }, {
        labelStatus: 'success',
        labelValue: '%ველა',
        definition: 'examples_words_which_ends_vela',//'returns words, which ends as `ველა`' //'წამოიღებს სიტყვებს, რომლებიც მთავრდება ველა-ზე'
    }, {
        labelStatus: 'success',
        labelValue: '%ველა%',
        definition: 'examples_words_which_consists_vela',//'returns words, which consists of `ველა`' //'წამოიღებს სიტყვებს, რომლებიც ურევია "ველა"'
    }, {
        labelStatus: 'success',
        labelValue: '_',
        definition: 'examples_words_with_length_1',//'returns words, which lengths is 1 ' //'წამოიღებს მხოლოდ ერთ ასობგერიან სიტყვებს '
    }, {
        labelStatus: 'success',
        labelValue: '__',
        definition: 'examples_words_with_length_2',//'returns words, which character lengths is 2' //'წამოიღებს მხოლოდ ორ ასობგერიან სიტყვებს'
    }, {
        labelStatus: 'success',
        labelValue: 'მ_ღლ_ვ_',
        definition: 'examples_words_with_length_7_mglv',//'returns words, which lengths is 7 and first,third,fourth,six characters are მ,ღ,ლ,ვ' //'წამოიღებს შვიდასოიან სიტყვებს სადაც 1-ლი, მე-3, მე-4 და მე-6 ასოა მ,ღ,ლ,ვ'
    }, {
        labelStatus: 'info',
        labelValue: '%ჯი',
        definition: 'examples_words_creative_domains',//'creative domain names' //'დომეინების კრეატიული სახელები'
    }]

    $scope.searchAction = function (word) {

        $scope.result = [];
        $http.get('php/getWordByWildcard.php', { params: { template: word } }).then(function (response) {
            if (Object.prototype.toString.call(response.data) === '[object Array]') {
                $scope.error = '';
                $scope.result = response.data;
                if (response.data.length === 0) {
                    $scope.error = 'result_empty';//'ჩანაწერები არ მოიძებნა';
                }
            } else {
                console.log('დაფიქსირებული შეცდომაა:');
                console.log(response);
                $scope.error = 'there_is_error';//'სამწუხაროდ დაფიქსირდა შეცდომა ...';
            }
        }, function (error) {
            console.log('დაფიქსირებული შეცდომაა:');
            console.log(error);
            $scope.error = 'there_is_error';//'სამწუხაროდ დაფიქსირდა შეცდომა ...';
        });
    }

}]);

myApp.controller('statisticCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $scope.root = $rootScope;
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




myApp.controller('examplesController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.root = $rootScope;
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







