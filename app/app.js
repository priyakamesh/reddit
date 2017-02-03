var app = angular.module("redditApp",["ngRoute","angular-toArrayFilter","angularUtils.directives.dirPagination"])

app.config(($routeProvider,$locationProvider)=>{
  firebase.initializeApp({
    apiKey: "AIzaSyC0nd4BNQVW4Zj7z0gXWDOUabtkWvyZGQ0",
    authDomain: "priya-firebase-auth.firebaseapp.com",
    databaseURL: "https://priya-firebase-auth.firebaseio.com",
    storageBucket: "priya-firebase-auth.appspot.com",
    messagingSenderId: "639639001017"
  });
  const checkForAuth = {
      checkForAuth ($location) {
        // http://stackoverflow.com/questions/37370224/firebase-stop-listening-onauthstatechanged
        const authReady = firebase.auth().onAuthStateChanged(user => {
          authReady()
          if (!user) {
            $location.url('#/login')
          }
        })
      }
    }
  $locationProvider.hashPrefix("")
  $routeProvider
    .when("/",{
      controller: "HomeCtrl",
      templateUrl: "partials/home.html"
    })
    .when("/login",{
      controller: "LoginCtrl",
      templateUrl: "partials/login.html"
    })
    .when("/createPost",{
      controller: "CreatepostCtrl",
      templateUrl: "partials/home.html",
      resolve: checkForAuth
    })
    .when("/register",{
      controller: "RegisterCtrl",
      templateUrl: "partials/register.html"
    })
    .when("/logout",{
      controller: "LogoutCtrl",
      templateUrl: "partials/logout.html"
    })
})
