app.controller("HomeCtrl", function($scope,$http){

// $(".getIt").append( `<button ng-disabled="isDisabled" ng-click= "doLike(key)">
//             <i class="material-icons">thumb_up</i></button>
//             {$scope.counter}
//             <button ng-disabled="isDisabled" ng-click= "dontLike(key)">
//              <i class="material-icons">thumb_down</i></button>`)

   $http.get(`https://priya-firebase-auth.firebaseio.com/Pictures/.json`)
     .then((data)=>{
        // $scope.key = _.findKey(data.data,function (key,value){return key})
        // $http.get(`https://priya-firebase-auth.firebaseio.com/Users/${$scope.key}.json`)
        // .then((data)=>{
          $scope.Pictures = data.data
          console.log($scope.Pictures)
          // $scope.counter = 0;

      // $scope.uid = authFactory.setter()
      // $http.get(`https://priya-firebase-auth.firebaseio.com/Users/${$scope.uid}.json` )
      //   .then((data)=>{
      //      $scope.Users = data.data
      //    })


       $scope.doLike = (key)=>{
        // $scope.counter = data.data[key].counter
        console.log($scope.counter)
        ++data.data[key].counter
        // $scope.counter = data.data[key].counter
        console.log(data.data[key].counter)
        $http.patch(`https://priya-firebase-auth.firebaseio.com/Pictures/${key}.json`,{
          counter : data.data[key].counter
        })
        // .then((data)=>{
        //   $scope.counter = data.data.counter
        // })


        // $scope.isDisabled = true;
     }
      $scope.dontLike = (key)=>{
        --data.data[key].counter

        $http.patch(`https://priya-firebase-auth.firebaseio.com/Pictures/${key}.json`,{
          counter : data.data[key].counter
        })
        // $scope.isDisabled = true;

    }
     })




})
