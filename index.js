const puppeteer = require('puppeteer');

function reaper (url, product) {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      let totalQuantitySold = 0;
      let pageCount = 0;

      await page.goto(url, { waitUntil: 'networkidle0' });
      await page.waitForSelector('a.pagination__next');

      while (await page.$$eval('li.s-item > div.s-item__wrapper', items => items.length)) {
        let pageQuantitySold = await page.evaluate(() => {
          let items = [...document.querySelectorAll('li.s-item span.s-item__additionalItemHotness > span.BOLD')];

          return items.reduce((accumulator, item) => {
            let quantity = 0;
            const itemText = item.innerText.split(' ');

            if (itemText[1] === 'sold') {
              quantity = itemText[0];
            }

            return accumulator + parseInt(quantity, 10);
          }, 0);
        });

        console.log('page', ++pageCount, '>>> ', pageQuantitySold);
        totalQuantitySold += pageQuantitySold;

        await page.click('a.pagination__next', { waitUntil: 'networkidle0' });
        await page.waitForSelector('a.pagination__next');
      }
      
      browser.close();
      return resolve(`${totalQuantitySold} ${product} were sold.`);
    } catch (e) {
      return reject(e);
    }
  })
}

reaper('https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=ps5&_sacat=0', 'PS5').then(console.log).catch(console.error);
reaper('https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1312&_nkw=xbox+series+x&_sacat=0&LH_TitleDesc=0&_osacat=0&_odkw=ps5', 'Xbox Series X').then(console.log).catch(console.error);
