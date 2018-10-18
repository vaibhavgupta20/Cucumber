Feature: logging in to facebook.com


Scenario Outline: Profile test for facebook
Given i open "<Browser>" and go to "<website>"
Then i enter "<username_xpath>" as "<username>" 
And i enter "<password_xpath>" as "<password>"
And i click on "<loginbutton>"
Then login should be sucessful and "<profile>" should be visible
And I close the browser

Examples:
|	website				|username |password| loginbutton |profile|Browser| username_xpath | password_xpath |
|	http://facebook.com |xyz		|pass1234|loginbutton|profile|Chrome| username		| 	password	|
|	http://facebook.com |xyz		|pass1234|loginbutton|profile|Chrome| username		| 	password	|
|	http://facebook.com |xyz		|pass1234|loginbutton|profile|Chrome| username		| 	password	|
|	http://facebook.com |xyz		|pass1234|loginbutton|profile|Chrome| username		| 	password	|
|http://google.com |abc 			| efg |	loginbtn_google| profile_google|mozilla|username_google|password_google|	
		




