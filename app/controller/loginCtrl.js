app.controller("LoginCtrl", function($scope,$location,authFactory){

  $scope.login = ()=>{
    authFactory.setter($scope.user_email,$scope.user_password)
    .then((data)=>{
      Materialize.toast("logged in", 1000)
      $location.path("/")
      $scope.$apply()
    })
  }
  $scope.register = ()=>{
    $location.url("/register")
  }
})
