app.controller("HomeCtrl", function($scope,$http,authFactory){

  $http.get( `https://priya-firebase-auth.firebaseio.com/Users/.json`)
        .then((data)=>{

          // console.log($scope.uid)

          $scope.userkey = _.findKey(data.data, function (key,value){return key})
          console.log($scope.userkey)
          $scope.userObj = data.data[$scope.userkey]
          // console.log($scope.userObj)
        })
        $http.get(`https://priya-firebase-auth.firebaseio.com/Pictures/.json`)
        .then ((data)=> {
          $scope.Pictures = data.data



//like function
        $http.get(`https://priya-firebase-auth.firebaseio.com/likes/.json`)
        .then((response)=>{
          $scope.likes = response.data
            console.log(response.data)

          $scope.doLike = (key,$event)=>{

            if ($scope.likes !== null) {

                let likeObj = response.data
              console.log(likeObj)
              console.log(Object.values(likeObj))
              $scope.uid = authFactory.getUid().uid
              let likeArray = Object.keys(likeObj).filter( each => {return each === $scope.uid})
              console.log(likeArray)

                if((likeArray.length === 0 ) ){

                --data.data[key].counter
                $http.patch(`https://priya-firebase-auth.firebaseio.com/Pictures/${key}.json`,{
                  counter : data.data[key].counter
                })
                 $scope.uid = authFactory.getUid().uid
                $http.post(`https://priya-firebase-auth.firebaseio.com/likes/${$scope.uid}.json`,
                     {key:key})
                event.path[1].setAttribute("disabled","disabled")
                $scope.key = key
                console.log($scope.key)

                 }
                 else {
                   $scope.uid = authFactory.getUid().uid
                      let obj = response.data[$scope.uid]
                      console.log(obj)
                      let arrayObj = Object.values(obj).filter( each =>{ return each.key === key})
                      console.log(arrayObj)
                         if ( arrayObj.length > 0){
                           return event.path[1].setAttribute("disabled","disabled")}
                          else if (arrayObj.length === 0){
                            console.log($scope.Pictures)
                            console.log(data.data[key])
                             ++data.data[key].counter
                            $http.patch(`https://priya-firebase-auth.firebaseio.com/Pictures/${key}.json`,{
                              counter : data.data[key].counter
                            })

                            $http.post(`https://priya-firebase-auth.firebaseio.com/likes/${$scope.uid}.json`,
                                 {key:key})
                            event.path[1].setAttribute("disabled","disabled")
                        }



                      }


              } else {++data.data[key].counter
                $http.patch(`https://priya-firebase-auth.firebaseio.com/Pictures/${key}.json`,{
                  counter : data.data[key].counter
                })
                 $scope.uid = authFactory.getUid().uid
                $http.post(`https://priya-firebase-auth.firebaseio.com/likes/${$scope.uid}.json`,
                     {key:key})
                event.path[1].setAttribute("disabled","disabled")
              }

            }//end of do function
          })//end of promise
  //dont like function
        $http.get(`https://priya-firebase-auth.firebaseio.com/dislikes/.json`)
        .then((response)=>{
          $scope.dislikes = response.data
            console.log(response.data)
            // $scope.dislikeskey = _.findKey(response.data, function (key,value){return key})

            // console.log($scope.dislikeskey)
/////
        $scope.dontLike = (key,$event)=>{
          if ($scope.dislikes !== null) {

                let dislikeObj = response.data
              console.log(dislikeObj)
              console.log(Object.values(dislikeObj))
              $scope.uid = authFactory.getUid().uid
              let dislikeArray = Object.keys(dislikeObj).filter( each => {return each === $scope.uid})
              console.log(dislikeArray)

                if((dislikeArray.length === 0 ) ){

                --data.data[key].counter
                $http.patch(`https://priya-firebase-auth.firebaseio.com/Pictures/${key}.json`,{
                  counter : data.data[key].counter
                })
                 $scope.uid = authFactory.getUid().uid
                $http.post(`https://priya-firebase-auth.firebaseio.com/dislikes/${$scope.uid}.json`,
                     {key:key})
                event.path[1].setAttribute("disabled","disabled")
                $scope.key = key
                console.log($scope.key)

                 }
                 else {
                   $scope.uid = authFactory.getUid().uid
                      let obj = response.data[$scope.uid]
                      console.log(obj)
                      let arrayObj = Object.values(obj).filter( each =>{ return each.key === key})
                      console.log(arrayObj)
                         if ( arrayObj.length > 0){
                           return event.path[1].setAttribute("disabled","disabled")}
                          else if (arrayObj.length === 0){
                             --data.data[key].counter
                            $http.patch(`https://priya-firebase-auth.firebaseio.com/Pictures/${key}.json`,{
                              counter : data.data[key].counter
                            })

                            $http.post(`https://priya-firebase-auth.firebaseio.com/dislikes/${$scope.uid}.json`,
                                 {key:key})
                            event.path[1].setAttribute("disabled","disabled")
                        }



                 }


              } else {--data.data[key].counter
                $http.patch(`https://priya-firebase-auth.firebaseio.com/Pictures/${key}.json`,{
                  counter : data.data[key].counter
                })
                 $scope.uid = authFactory.getUid().uid
                $http.post(`https://priya-firebase-auth.firebaseio.com/dislikes/${$scope.uid}.json`,
                     {key:key})
                event.path[1].setAttribute("disabled","disabled")}
            }

        })
      })
})

 //end controller
