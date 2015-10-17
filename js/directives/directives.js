myApp.directive('wildCardContent', function() {
    return {
        templateUrl: 'js/directives/geoPageContent.html',
        controller: "wildCardCtrl",
        scope:{}
    };
});

myApp.directive('regexContent', function () {
    return {
        scope:{},
        templateUrl: 'js/directives/geoPageContent.html',
        controller: "regexCtrl"
    };
});

myApp.directive('rhymeContent', function () {
    return {
        scope:{},
        templateUrl: 'js/directives/geoPageContent.html',
        controller: "rhymeCtrl"
    };
});



myApp.directive('geoSearchWord', function() {
    return {
        templateUrl: 'js/directives/geoSearchInput.html',
        controller:"searchInputCtrl"
    };
});

myApp.directive('geoSearchResult', function() {
    return {
        templateUrl: 'js/directives/geoResultTable.html',
		restrict:'E',
        scope: {
           words: '='
        }
    };
})

myApp.directive('geoNavbar', function() {
    return {
        templateUrl: 'js/directives/geoNavbar.html'
    };
});



myApp.directive('geoExamplesButton', function() {
    return {
        templateUrl: 'js/directives/geoExamplesButton.html',
        restrict: 'E',
        scope:{
            examples: '=',
            uniqueName:'='
        },
		controller:'examplesController'
    };
});