import WebDriver, {By, until} from 'selenium-webdriver';
import Login, {driver} from './Login';

let myLogin = new Login();

let punchin = () => {
    driver.get('https://erp.aoacloud.com.tw/HR/HRHB003S00.aspx')
    .then(()=>driver.findElement(By.css("#btnclock")))
    .then(btn=>btn.click())
    .then(()=>console.log("SUCCESS!!"))
    .then(()=>{driver.sleep(5000);driver.quit();});
}

console.log("start");
myLogin.browseToLogin(punchin);