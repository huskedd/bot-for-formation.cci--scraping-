const puppeteer = require('puppeteer');
const usrData = require('./userpass.json');
const data = require('./bot.json');
const Discord = require('discord.js'); 
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });



//!!!!! warining data clear !!!!!! when printing out userpass.json
//console.log(usrData);
    console.log("data succesfully imported from userpass.json !");
let url = "https://formations.cci-paris-idf.fr/UTEC/index.php";


//delay function for waiforTimeout()    
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 };




const fetchEdt = (async () => {
    
    const browser = await puppeteer.launch({headless:true});
    console.log("browser launched");
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768});    
    console.log("redirection to : " + url);
    await page.goto(url);

    console.log("connection au compte");
    await page.type('#login', usrData.username);
    await page.type('#password', usrData.password);
    url = "https://formations.cci-paris-idf.fr/UTEC/index.php/apprenant/planning/courant/?semaineDebut=202146&ressources=YToxOntpOjA7YToyOntzOjQ6ImNvZGUiO2k6MzcwOTk2NjtzOjQ6InR5cGUiO2k6NzUwMDt9fQ==&modeAffichage=0";


    await page.click('#btnSeConnecter');
    await console.log("connected successfully !");
    await console.log("4s cooldown");
    await page.waitForTimeout(4000);
    console.log("wait 10 second until the page load");
        for(i = 0; i <11; i++){
        await page.waitForTimeout(1000);
            console.log( ": "+ i);
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
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('messageCreate', message => {
  if (message.content === '!edt') {
    message.channel.send("retrieving edt ...");
    message.channel.send("emploi du temps disponible dans le salon #planning-de-la-semaine")
    client.channels.cache.get(`890482091454767104`).send({files : ['images/edt.png'],});
  }
});


  client.login(data.token);
  

   
