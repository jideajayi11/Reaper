# Reaper
A puppeteer bot in Node.js

## Usage
- Clone the [`repo`](https://github.com/jideajayi11/Reaper) - `git clone https://github.com/jideajayi11/Reaper.git`
- Run `npm i`
- Run `npm start`

## About
The bot perform web scrapping on eBay's website to get the number of [`PS5`](https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=ps5&_sacat=0) and [`Xbox Series X`](https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1312&_nkw=xbox+series+x&_sacat=0&LH_TitleDesc=0&_osacat=0&_odkw=ps5) that were sold through the website.

## Method
It uses the Puppeteer library to open eBay on a chrome browser and interacts with the website like a human user would normally do.
It goes from page to page to add up all the sold items (for [`PS5`](https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=ps5&_sacat=0) and [`Xbox Series X`](https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1312&_nkw=xbox+series+x&_sacat=0&LH_TitleDesc=0&_osacat=0&_odkw=ps5)) to get the total.