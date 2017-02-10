import WebDriver, {By, until} from 'selenium-webdriver';
import Login, {driver} from './Login';

let myLogin = new Login();

let punchout = () => {
    driver.get('https://erp.aoacloud.com.tw/HR/HRHB003S00.aspx')
    //切換下班
    .then(()=>driver.findElement(By.css("#label-switch > div > span.switch-left.switch-small.switch-info")))
    .then(btn=>btn.click())
    .then(()=>driver.findElement(By.css("#btnclock")))
    .then(btn=>btn.click())
    .then(()=>console.log("SUCCESS!!"))
    .then(()=>{driver.sleep(5000);driver.quit();});
}

console.log("start");
myLogin.browseToLogin(punchout);