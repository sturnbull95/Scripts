const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    var final = [];
    for(var i = 1; i < 10; i++){
      await page.goto('https://www.pokedex.org/#/pokemon/'+ i);
      await page.waitFor(1000);

      const result = await page.evaluate(() => {
          let data = []; // Create an empty array that will store our data
          let elements = document.querySelectorAll('.monster-moves'); // Select all Products
          let name = document.querySelector('#detail-view > div.detail-view-fg > div > h1').innerText;
          let type1 = document.querySelector('#detail-view > div.detail-view-fg > div > div > div.detail-header > div.detail-infobox > div.detail-types-and-num > div.detail-types > span:nth-child(1)').innerText;
          let tempType2 = document.querySelector('#detail-view > div.detail-view-fg > div > div > div.detail-header > div.detail-infobox > div.detail-types-and-num > div.detail-types > span:nth-child(2)');
          let healthStat = document.querySelector('#detail-view > div.detail-view-fg > div > div > div.detail-header > div.detail-infobox > div.detail-stats > div:nth-child(1) > span.stat-bar > div.stat-bar-fg').innerText
          let attStat = document.querySelector('#detail-view > div.detail-view-fg > div > div > div.detail-header > div.detail-infobox > div.detail-stats > div:nth-child(2) > span.stat-bar > div.stat-bar-fg').innerText
          let defStat = document.querySelector('#detail-view > div.detail-view-fg > div > div > div.detail-header > div.detail-infobox > div.detail-stats > div:nth-child(3) > span.stat-bar > div.stat-bar-fg').innerText
          let speedStat = document.querySelector('#detail-view > div.detail-view-fg > div > div > div.detail-header > div.detail-infobox > div.detail-stats > div:nth-child(4) > span.stat-bar > div.stat-bar-fg').innerText
          let spAttStat = document.querySelector('#detail-view > div.detail-view-fg > div > div > div.detail-header > div.detail-infobox > div.detail-stats > div:nth-child(5) > span.stat-bar > div.stat-bar-fg').innerText
          let spDefStat = document.querySelector('#detail-view > div.detail-view-fg > div > div > div.detail-header > div.detail-infobox > div.detail-stats > div:nth-child(6) > span.stat-bar > div.stat-bar-fg').innerText
          let tempGender = document.querySelector('#detail-view > div.detail-view-fg > div > div > div.detail-below-header > div:nth-child(5) > span:nth-child(4)').innerText
          let gender = tempGender.substring(0,tempGender.indexOf('%'));
          let newObj = []
          let newObj2 = []
          var temp = ""
          let acc = ""
          for(var element of elements){
            var i = 1;
            while(element.childNodes[i] != null){
              let boiler = element.childNodes[i].innerText;
              boiler.substring(0,-2)
              let boilerArr = boiler.split('\n');
              if(!boiler.includes("Machine Moves") && !boiler.includes("Tutor Moves") && !boiler.includes("Egg Moves")){
                let boiler2 = element.childNodes[i].children[1].innerText
                let power = boiler2.substring(0,boiler2.indexOf("Acc:")).replace("Power: ","")
                let acc = boiler2.substring(boiler2.indexOf("Acc:"),boiler2.indexOf("PP:")).replace("Acc: ","")
                if(!acc.includes("N/A")){
                  acc = acc.substring(0,acc.length-1)
                }
                let pptemp = boiler2.substring(boiler2.indexOf("PP: ")).replace("PP: ", "")
                let pp = pptemp.substring(0,pptemp.indexOf(" ")).replace(/\D/g,'');
                if (boilerArr[0].match(/[a-z]/i)) {
                    let moveName = boilerArr[0]
                    let moveType = boilerArr[1]
                    newObj.push({moveName,moveType,power,acc,pp})
                }
                else{
                  let moveLvl = boilerArr[0]
                  let moveName = boilerArr[1]
                  let moveType = boilerArr[2]
                  newObj.push({moveLvl,moveName,moveType,power,acc,pp})
                }
              }
                  i++;
              }
          }
          if(tempType2 != null){
            type2 = tempType2.innerText;
            data.push({name,type1,type2,healthStat,attStat,defStat,speedStat,spAttStat,spDefStat,gender,newObj})
          }
          else{
            type2 = null;
            data.push({name,type1,type2,healthStat,attStat,defStat,speedStat,spAttStat,spDefStat,gender,newObj})
          }
          return data; // Return our data array
        });
        final.push(result);
      }
    browser.close(); // Return the data
    return final;
};
const fs = require('fs');
scrape().then((value) => {
    //console.log(value); // Success!

// write to a new file named 2pac.txt
fs.writeFile('data.txt', JSON.stringify(value,null,2), (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Data saved!');
});
});
