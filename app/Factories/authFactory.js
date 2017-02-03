app.factory("authFactory",function () {
    return {getter :(user_email,user_password) => {
    console.log(user_email,user_password)
    return firebase.auth().createUserWithEmailAndPassword(user_email,user_password)
      .then ((data)=>{
        console.log(data.uid)
        return UID = data.uidx

      })
    },
    setter : (user_email,user_password)=>{
      return firebase.auth().signInWithEmailAndPassword(user_email,user_password)
      then ((data)=>{
        console.log(data)
      })
    },


    getUid:()=> {
      return user= firebase.auth().currentUser
    }
  }
})
