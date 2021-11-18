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
        path: 'images/edt.png'
    });


    //console.log("envoie de l'emploi du temps sur discord dans le channel (nom du channel")
})()

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
client.on('messageCreate', message => {
  if (message.content === '!amine') {
    message.channel.send("un amine sauvage aparraifeft")
    client.channels.cache.get(`890225002643877908`).send({files : ['images/amine.png'],});
  }
});


client.on('messageCreate', message => {
  if (message.content === '!tibo') {
    message.channel.send("#autiste Gang!")
    client.channels.cache.get(`890225002643877908`).send({files : ['images/tibo.jpg'],});
  }
});

client.on('messageCreate', message => {
  if (message.content === '!dani') {
    message.channel.send("#il était dans la meme voiture que tibo!")
    client.channels.cache.get(`890225002643877908`).send({files : ['images/dani.jpg'],});
  }
});

client.on('messageCreate', message => {
  if (message.content === '!romin') {
    message.channel.send("#il aime les enfants")
    client.channels.cache.get(`890225002643877908`).send({files : ['images/romin.png'],});
  }
});

client.on('messageCreate', message => {
  if (message.content === '!negro') {
    message.channel.send("#KIRIKOU")
    client.channels.cache.get(`890225002643877908`).send({files : ['images/negro.mov'],});
  }
});

client.on('messageCreate', message => {
  if (message.content === '!matis') {
    message.channel.send("#c'est mathis avec un gros crâne mdrr")
    client.channels.cache.get(`890225002643877908`).send({files : ['images/matis.jpg'],});
  }
});

client.on('messageCreate', message => {
  if (message.content === '!alaixandre') {
    message.channel.send("#c'est un terroriste mdrr")
    client.channels.cache.get(`890225002643877908`).send({files : ['images/huskedd.jpg'],});
  }
});

client.on('messageCreate', message => {
  if (message.content === '!dodo') {
    message.channel.send("#si y'a une attaque ont est mal");
    client.channels.cache.get(`890225002643877908`).send({files : ['images/dodo.jpg'],});
  }
});


client.on('messageCreate', message => {
  if (message.content === '!avionbite') {
    message.channel.send("#les tours jumelles");
    client.channels.cache.get(`890225002643877908`).send({files : ['images/avionbite.jpg'],});
  }
});

client.on('messageCreate', message => {
  if (message.content === '!baba') {
    message.channel.send("#UN prof tout à fais banal");
    client.channels.cache.get(`890225002643877908`).send({files : ['images/baba.jpg'],});
  }
});

client.on('messageCreate', message => {
  if (message.content === '!babamaiscunemeuf') {
    message.channel.send("baba mais c'est une meuf mdr");
    client.channels.cache.get(`890225002643877908`).send({files : ['images/babamaiscunemeuf.jpg'],});
  }
});

client.on('messageCreate', message => {
  if (message.content === '!arouf') {
    message.channel.send("il pointe comme une souris");
    client.channels.cache.get(`890225002643877908`).send({files : ['images/arouuf.jpg'],});
  }
});


(async () => {
     client.login(data.token)
})();
  

   
