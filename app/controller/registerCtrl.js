app.controller("RegisterCtrl", function($scope,$location,authFactory,$http){
  console.log("im register")
  $scope.Register = ()=>{
    authFactory.getter($scope.user_email,$scope.user_password)
    .then ((data)=> {
            console.log(data)
            $scope.UID = data
            $http.post(`https://priya-firebase-auth.firebaseio.com//Users/.json`,{
                    uid: $scope.UID,
                    email: $scope.user_email
    })
        $location.path(`/`)
        $scope.$apply()
})

  }
})
