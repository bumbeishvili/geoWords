angular.module('GeoWords', ['$scope']).controller('contentCtrl', 
function($scope) {
	$scope.isExpanding = true;
	$scope.slidePlease = function () {
		
        $("#panel").slideToggle("slow");

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
});