## payment api
this is a basic payment api this uses jwt token for making the `/pay` route private 

## Routes
their are 3 routes 
- `/register`</br>
 this route is to register new user and returns a jwt token 
- `/login`</br>
this route is to login user return a jwt token 
- `/pay` </br>
this route is a protected route. if the request doesn't contain a jwt token the request is responced with a 404 

## Models
their are 2 models 
- `Users`</br>
this is the data model to store all users 
- `Payment`</br>
this is the data model to store all payments details

## Payment api 
we are using razorpay as our payment gateway which is not complete but will soon be complete

