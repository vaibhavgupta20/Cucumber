$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "logging in to facebook.com",
  "description": "",
  "id": "logging-in-to-facebook.com",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Success Login",
  "description": "",
  "id": "logging-in-to-facebook.com;success-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "i open \"Chrome\" and go to \"http://facebook.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i enter \"username\" as \"vaibhavcool20@protonmail.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "i enter \"password\" as \"LSKWzGW4uN]\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "i click on \"loginbutton\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "login should be sucessful and \"profile\" should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 8
    },
    {
      "val": "http://facebook.com",
      "offset": 27
    }
  ],
  "location": "LoginTest.gotofacebook(String,String)"
});
formatter.result({
  "duration": 7505231189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "vaibhavcool20@protonmail.com",
      "offset": 23
    }
  ],
  "location": "LoginTest.i_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 494905992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    },
    {
      "val": "LSKWzGW4uN]",
      "offset": 23
    }
  ],
  "location": "LoginTest.i_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 110426119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginbutton",
      "offset": 12
    }
  ],
  "location": "LoginTest.i_click_on_loginbutton(String)"
});
formatter.result({
  "duration": 2434916960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile",
      "offset": 31
    }
  ],
  "location": "LoginTest.login_should_be_sucessful(String)"
});
formatter.result({
  "duration": 20032274999,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_close_the_browser()"
});
formatter.result({
  "duration": 672552738,
  "status": "passed"
});
});