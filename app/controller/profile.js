app.controller("ProfileCtrl", function ($scope,$http,authFactory,$location){
  if (!firebase.auth().currentUser){
    $location.path("/login")
  }
  $scope.myLikes = ($event) =>{
    $scope.uid = authFactory.getUid().uid
    console.log($scope.uid)
    $http.get(`https://priya-firebase-auth.firebaseio.com/likes/${$scope.uid}.json`)
    .then((data)=>{
      $scope.likes = data.data
      $http.get(`https://priya-firebase-auth.firebaseio.com/Pictures/.json?orderBy="uid"&equalTo="${$scope.uid}"`)
      .then((data)=>{
        $scope.myLikes = data.data
      })
    })
  }
  $scope.myDislikes=($event)=>{
    var myEl = angular.element( document.querySelector( '#divID' ) );
    myEl.empty();
    $scope.uid = authFactory.getUid().uid
    console.log($scope.uid)
    $http.get(`https://priya-firebase-auth.firebaseio.com/dislikes/${$scope.uid}.json`)
    .then((data)=>{
      $scope.disLikes = data.data
      $http.get(`https://priya-firebase-auth.firebaseio.com/Pictures/.json?orderBy="uid"&equalTo="${$scope.uid}"`)
      .then((data)=>{
        $scope.myDislikes = data.data
      })
    })
  }
  let storageRef = firebase.storage().ref();

  let inputElement = document.getElementById("fileInput");
  inputElement.addEventListener("change", handleFiles, false)
  function handleFiles() {
    var fileList = this.files; /* now you can work with the file list */
    console.log("filelist[0]", fileList[0])
    storageRef.child(fileList[0].name).put(fileList[0])
      .then(function(snapshot) {
        console.log('Uploaded a blob or file!');


    storageRef.child(fileList[0].name).getDownloadURL()
    .then((url)=>{
       $scope.uid = authFactory.getUid().uid
      var img =document.getElementById("myImg")
      img.src = url;
      $http.get(`https://priya-firebase-auth.firebaseio.com//Users/.json?orderBy="uid"&equalTo="${$scope.uid}"`)
      .then((data)=>{
        console.log(data.data)
        console.log(url)
        $http.post(`https://priya-firebase-auth.firebaseio.com/ProfilePicture/.json`,{
          imageUrl : url,
          uid: $scope.uid
        })
      })
    })
    .catch((error)=>{
      alert("error")
    })
    });
  }
})
