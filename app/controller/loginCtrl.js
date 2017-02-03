app.controller("LoginCtrl", function($scope,$location,authFactory){

  $scope.login = ()=>{
    if (($scope.user_email === undefined)&&($scope.user_password === undefined)){
      alert("Please enter the email and password")
    }

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
