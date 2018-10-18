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
  "duration": 7036664784,
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
  "duration": 346631172,
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
  "duration": 96901503,
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
  "duration": 2392939646,
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
  "duration": 20049367195,
  "error_message": "java.lang.AssertionError: profile link was not present\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat login.LoginTest.login_should_be_sucessful(LoginTest.java:40)\r\n\tat ✽.Then login should be sucessful and \"profile\" should be visible(login.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginTest.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});