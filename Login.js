import WebDriver, {By, until} from 'selenium-webdriver';
import Account from './properties';
import chromedriver from 'chromedriver';

//export const driver = new WebDriver.Builder().forBrowser('firefox').usingServer('http://localhost:4444/').build();
export const driver = new WebDriver.Builder().forBrowser('chrome').build();

export default class Login {
    constructor(){
        this.user = Account.user;
        this.password = Account.password;
    }

    browseToLogin(callback){
        driver.get('https://dn1361-portal.aoacloud.com.tw/desk_auth_index.php')
        //set account and password
        .then(()=>driver.findElement(By.css('#login_name')).sendKeys(this.user) && driver.findElement(By.css('#password')).sendKeys(this.password))
        .then(()=>driver.findElement(By.css('#loginBtn')))
        .then(btn=>btn.click())
        .then(()=>driver.wait(until.elementLocated( By.css("div.moduleBox:nth-child(1) > div:nth-child(1)") ), 20000 ))
        .then(callback());
    }
}