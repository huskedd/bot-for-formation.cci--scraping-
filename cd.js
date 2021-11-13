const puppeteer = require('puppeteer');
const Discord = require('discord.js');
const client = new Discord.Client();
const usrData = require('./userpass.json');
const token = require('./bot.json');


client.login(bot.token);

//!!!!! warining data clear !!!!!! when printing out userpass.json
console.log(usrData);
    console.log("data succesfully imported from userpass.json !");
let url = "https://formations.cci-paris-idf.fr/UTEC/index.php";
//delay function for waiforTimeout()    
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 };


(async () => {
    
    const browser = await puppeteer.launch({headless:false});
    console.log("browser launched");
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768});    
    console.log("redirection to : " + url);
    await page.goto(url);

    console.log("connection au compte");
    await page.type('#login', usrData.username);
    await page.type('#password', usrData.password);
    url = "https://formations.cci-paris-idf.fr/UTEC/index.php/apprenant/planning/courant/";


    await page.click('#btnSeConnecter');
    await console.log("connected successfully !");
    await console.log("4s cooldown");
    await page.waitForTimeout(6000);
    console.log("wait 10 second until the page load");
        for(i = 0; i <11; i++){
        await page.waitForTimeout(1000)
            console.log(i);
    }


    console.log("loading...");
    await console.log("accessing to " + url + " ....");
    await page.goto(url);
    console.log("page loaded");

    //partie emploi du temps
    page.waitForTimeout(1000);
    await page.click("#btn-full-screen-planning-apprenant-3709966");
    console.log("screenshoted");
        await page.screenshot({
        path: 'edt.png'
    });
    


    //console.log("envoie de l'emploi du temps sur discord dans le channel (nom du channel")
})();


client.on("message", msg => {
    if (msg.content === "!edt"){
        msg.reply("salut");
    }
})

