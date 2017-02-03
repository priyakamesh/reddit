app.controller("LogoutCtrl",function ($scope,$location){
  $scope.logout = () =>{
    firebase.auth().signOut()
    // $location.url("#/login")
    // $scope.$apply()
    Materialize.toast("logged out", 1000)


  }
})
