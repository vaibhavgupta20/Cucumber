Feature: logging in to facebook.com


Scenario: Success Login
Given i open "Chrome" and go to "http://facebook.com"
Then i enter "username" as "vaibhavcool20@protonmail.com" 
And i enter "password" as "LSKWzGW4uN]"
And i click on "loginbutton"
Then login should be sucessful and "profile" should be visible
And I close the browser