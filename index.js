const puppeteer = require('puppeteer');
const usrData = require('./userpass.json');
const data = require('./bot.json');
const Discord = require('discord.js'); 
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

//!! warining data is echoed !!when printing out userpass.json
//console.log(usrData);
    console.log("data succesfully imported from userpass.json !");
let url = "https://formations.cci-paris-idf.fr/UTEC/index.php";


//delay function for waiforTimeout()    
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 };

(async () => {
    
    const browser = await puppeteer.launch({headless:true});
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
        path: 'images/edt.png'
    });
    browser.close();


    //console.log("envoie de l'emploi du temps sur discord dans le channel (nom du channel")
})()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('messageCreate', message => {
  if (message.content === '!edt') {
    message.channel.send("edt dispo dans le channel #planning de la semaine");
    client.channels.cache.get(`960530159788752907`).send({files : ['images/edt.png'],});
  }
  if (message.content === '!sage') {
    message.channel.send("edt dispo dans le channel #planning de la semaine");
    client.channels.cache.get(`916750276877226024`).send({files : ['images/sage.jpg'],});
  }
  if(message.content === '!tibo'){
    message.channel.send("il a la gaule sur sa photo insta ");
    client.channels.cache.get(`916750276877226024`).send({files : ['images/tibo.jpg']})
  } 
  if(message.content == '!amine'){
    client.channels.cache.get(`916750276877226024`).send({files : ['images/amine.png']})
  }
  if(message.content == '!dani'){
    client.channels.cache.get(`916750276877226024`).send({files : ['images/dani.jpg']})
  } if(message.content == '!avionbite'){
    client.channels.cache.get(`916750276877226024`).send({files : ['images/avionbite.jpg']})
  } if(message.content == '!alaixandre'){
    client.channels.cache.get(`916750276877226024`).send({files : ['images/huskedd.jpg']})
  }
  if(message.content == '!baba'){
    message.channel.send("si y'a une attaque on est mal");
    client.channels.cache.get(`916750276877226024`).send({files : ['./images/dodo.jpg']});
  }
  if(message.content == '!baba'){
    client.channels.cache.get(`916750276877226024`).send({files : ['images/baba.jpg']});
  }
  if(message.content == '!kirikou version wii party'){
    client.channels.cache.get(`916750276877226024`).send({files : ['images/negro.mov']});
  }
  if(message.content == '!roumin'){
    client.channels.cache.get(`916750276877226024`).send({files : ['images/romin.jpg']});
  }
});

//make a command handler to simplify the syntax

(async () => {
     client.login(data.token);
})();
  

   
