var app = angular.module("redditApp",["ngRoute"])

app.config(($routeProvider,$locationProvider)=>{
  firebase.initializeApp({
    apiKey: "AIzaSyC0nd4BNQVW4Zj7z0gXWDOUabtkWvyZGQ0",
    authDomain: "priya-firebase-auth.firebaseapp.com",
    databaseURL: "https://priya-firebase-auth.firebaseio.com",
    storageBucket: "priya-firebase-auth.appspot.com",
    messagingSenderId: "639639001017"
  });
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
      templateUrl: "partials/createpost.html"
    })
})
