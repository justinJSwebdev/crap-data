const scrapers = require("./scraper")
const scrapController = async (browserInstance) => {
    const url = "https://phimmoiyyy.net/"
    try {
        let browser = await browserInstance;
        let categories = scrapers.scrapeCategory(browser, url)
        //gọi hàm cào ở file scape 
    } catch (err) {
        console.log("Lỗi ở scrape controller" + err)
    }
}
module.exports = scrapController