app.controller("MostpopularCtrl", function ($http,$scope){
  // $http.get( `https://priya-firebase-auth.firebaseio.com/Users/.json`)
  //       .then((data)=>{

  //         // console.log($scope.uid)

  //         $scope.userkey = _.findKey(data.data, function (key,value){return key})
  //         console.log($scope.userkey)
  //         $scope.userObj = data.data[$scope.userkey]
  //         // console.log($scope.userObj)
  //       })
        $http.get(`https://priya-firebase-auth.firebaseio.com/Pictures/.json`)
        .then ((data)=> {
          $scope.Pictures = data.data

          console.log($scope.Pictures)
})
        $scope.like = ()=>{
          alert("Please go to home page and like the post")
        }
        $scope.dontLike = ()=>{
          alert("Please go to home page and dislike the post")
        }
      })
