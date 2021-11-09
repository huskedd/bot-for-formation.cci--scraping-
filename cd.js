const { format } = require('path');
const path = require('path-posix');
const puppeteer = require('puppeteer');

const url = "https://www.cdiscount.com/informatique/achat-pc-ordinateur/megaport-pc-gamer-amd-ryzen-9-3900x-12x-3-8-ghz/f-1070853-meg4260568826719.html#mpos=0|mp";

(async () => {
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    await page.goto(url, {waitUntil:'networkidle2'});
    
    //mon code
    await page.setViewport({
        width: 1920,
        height : 1080
    });

    await page.pdf({
        path:"screen1.pdf",
        format:"a4"
    });
    //await browser.close();
})();