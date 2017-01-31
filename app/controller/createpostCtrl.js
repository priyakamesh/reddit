app.controller("CreatepostCtrl",function($scope){
   $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        console.log(modal, trigger);
      },
      complete: function() { console.log('Closed'); } // Callback for Modal close
    }
  );

  $scope.createPost = ()=> {
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
      var img =document.getElementById("myImg")
      img.src = url;
    })
    .catch((error)=>{
      alert("error")
    })
    });
  }


  }
})
