app.controller("HomeCtrl", function($scope,$http){


   $http.get(`https://priya-firebase-auth.firebaseio.com/Pictures/.json`)
     .then((data)=>{
        // $scope.key = _.findKey(data.data,function (key,value){return key})
        // $http.get(`https://priya-firebase-auth.firebaseio.com/Users/${$scope.key}.json`)
        // .then((data)=>{
          $scope.Pictures = data.data
          console.log($scope.Pictures)

      // $scope.uid = authFactory.setter()
      // $http.get(`https://priya-firebase-auth.firebaseio.com/Users/${$scope.uid}.json` )
      //   .then((data)=>{
      //      $scope.Users = data.data
      //    })

      $scope.counter = 0;
      $scope.doLike = (key)=>{

        $scope.counter +=1
        console.log(key)
        $http.patch(`https://priya-firebase-auth.firebaseio.com/Pictures/${key}.json`,{
          // voted:
        })
        alert("i like it")
        // $scope.isDisabled = true;
     }
      $scope.dontLike = (key)=>{

        $scope.counter -= 1
        $http.patch(`https://priya-firebase-auth.firebaseio.com/Pictures/${key}.json`,{
          // voted: false
        })
        alert("i dont like it")

    }

     // if($scope.doLike)
     //  {$scope.counter = $scope.counter++}
     //  else ($scope.dontLike)
     //    {$scope.counter = $scope.counter--}
     })


    // document.getElementById("getIt").innerHTML="<button ng-disabled="isDisabled" ng-click= "doLike(key)">
    //         <i class="material-icons">thumb_up</i></button>
    //         {$scope.counter}
    //         <button ng-disabled="isDisabled" ng-click= "dontLike(key)">
    //          <i class="material-icons">thumb_down</i></button>"

})
