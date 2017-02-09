import WebDriver, {By, until} from 'selenium-webdriver';
import account from './properties';

const driver = new WebDriver.Builder().forBrowser('firefox').usingServer('http://localhost:4444/').build();
let cookies={};

let test = () => {
    driver.get('https://dn1361-portal.aoacloud.com.tw/desk_auth_index.php')
    //set account and password
    .then(()=>driver.findElement(By.css('#login_name')).sendKeys(account.user) && driver.findElement(By.css('#password')).sendKeys(account.password))
    .then(()=>driver.findElement(By.css('#loginBtn')))
    .then(btn=>btn.click())
    .then(()=>driver.wait(until.elementLocated( By.css("div.moduleBox:nth-child(1) > div:nth-child(1)") ), 20000 ))
    .then(punchin());
}

let punchin = () => {
    driver.get('https://erp.aoacloud.com.tw/HR/HRHB003S00.aspx')
    .then(()=>driver.findElement(By.css("#btnclock")))
    .then(btn=>btn.click())
    .then(()=>console.log("SUCCESS!!"))
    .then(()=>{driver.sleep(5000);driver.quit();});
}

console.log("start");
test();