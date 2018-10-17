Feature: logging in to facebook.com


Scenario: Success Login
Given i go to facebook
Then i enter username and password
And i click on loginbutton
Then login should be sucessful