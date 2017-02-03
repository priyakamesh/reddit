app.controller("CreatepostCtrl",function($scope,$location,$http,authFactory){
  if(!firebase.auth().currentUser){
    $location.path("/login")
  }else {
   $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      // opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        console.log(modal, trigger);
      },
      complete: function () { $(".modal").modal("close") } // Callback for Modal close
      })

   $scope.cancel = ()=>{
    $("#modal1").modal("close")
    $location.path("/");

   //  // $scope.$apply()
   }

    let storageRef = firebase.storage().ref();

    let inputElement = document.getElementById("fileInput");

    inputElement.addEventListener("change", handleFiles, false);
    function handleFiles() {
    var fileList = this.files; /* now you can work with the file list */
    console.log("filelist[0]", fileList[0])
    storageRef.child(fileList[0].name).put(fileList[0])
      .then(function(snapshot) {
        console.log('Uploaded a blob or file!');


          storageRef.child(fileList[0].name).getDownloadURL()
          .then((url)=>{
            $location.path("/")
            $scope.url = url


            $http.get(`https://priya-firebase-auth.firebaseio.com/Users/.json`)
            .then((data)=>{
              console.log(data)
              $scope.uid = authFactory.getUid().uid
              console.log($scope.uid)

              $scope.email = authFactory.getUid().email
              console.log($scope.email)

              $http.post(`https://priya-firebase-auth.firebaseio.com/Pictures/.json`,
              {
               key : $scope.key,
               url : $scope.url,
               Title: $scope.postTitle,
               link: $scope.postUrl,
               user : $scope.email,
               uid : $scope.uid,
               counter: 0
              })
              .then((data)=>{
                $("#modal1").modal("close")
                $location.url("/")
                // $scope.$apply()

              })

            })
         })
          .catch((error)=>{

            alert("error")
          })

})
}
}

})
