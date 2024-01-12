const puppeteer = require('puppeteer')

const startBrowser = async () => {
    let browser;
    try {
        browser = await puppeteer.launch({

            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        })
    } catch (err) {
        console.log("Không tạo được browser" + error)
    }
    return browser
}

module.exports = startBrowser