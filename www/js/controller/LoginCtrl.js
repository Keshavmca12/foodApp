'use strict';

app.controller('LoginCntrl', function($scope, $ionicPopup) {
 $scope.activeTab="guest";
 $scope.changeTab=function(tab){
 	$scope.activeTab=tab;
 };

 // Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {}

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: ' <label class="item item-input"><input type="text" placeholder="one time password" ng-model="data.wifi"></label>'+
    '<div style="text-align:center"><button class="button button-small button-positive" style="margin-top:3%;">Submit</button><br>'+
    '<label>Resend OTP</label></div>',
    title: 'Enter one time Password',
    subTitle: 'Four digit OTP number',
    cssClass:'full-width',
    scope: $scope,
   /* buttons: [
      {
        text: '<b>Submit</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]*/
    

  });
  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });
};
});