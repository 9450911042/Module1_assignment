(function() {
    'use strict';

    angular.module('LunchCheck', [])
           .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {
        $scope.items= "";
        $scope.result = "";
        $scope.myString2="";
        $scope.checking = function() {
          $scope.myString2 = $scope.items.replace(/ /g,"");
            var split_items = $scope.myString2.split(',');

            var count=0;
            for (var i = 0; i < split_items.length; i++) {
              if(split_items[i] != "")
            {
              count=count+1;
            }
          }
          if(count==0){
            $scope.result = "Please enter the data first"
          }
            else if(count<=3) {
                $scope.result = "Enjoy!";
            } else {
                $scope.result = "Too much!";
            }
          };

            // set $scope.message
            // instead of returning String

        };

})();
