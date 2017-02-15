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
~~~

上班或下班
~~~ shell
# 上班
npm run in
# 下班
npm run out
~~~
