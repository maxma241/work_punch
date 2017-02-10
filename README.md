# work_punch :books:
用[selenium-webdriver](https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver)自動打卡

# How to use :wrench:
make sure that you have installed [node and npm](https://nodejs.org/en/)

~~install [webdriver](https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver)~~

~~I use [firefox](https://github.com/mozilla/geckodriver/releases/)~~

~~run geckodriver for your OS~~

**edit properties.js**
~~~ javascript
export default {
    user:"<your user name>",
    password:"<your password>"
}

~~~

## :memo: then run the shell below:

~~~ shell
npm install
npm run transpile-es2015
~~~

上班或下班
~~~ shell
# 上班
node .\lib\punchin.js
# 下班
node .\lib\punchout.js
~~~
