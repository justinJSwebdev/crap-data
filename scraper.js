const detailCategory = async (browser, url) => {
    return new Promise(async (resolve, reject) => {
        try {
            let page = await browser.newPage()
            console.log(">>Mở tab chi tiết category film")
            await page.goto(url)
            console.log("Truy cập vào " + url)
            await page.waitForSelector("#dt_contenedor")
            console.log(">>Website category detail đã load xong...")
            const dataCategoryFilm = await page.$$eval("#archive-content>article .poster", els => {
                dataCategoryFilm = els.map(el => {
                    return {
                        image: el.querySelector("img").src,
                        imgAlt: el.querySelector("img").alt
                    }
                })
                return dataCategoryFilm
            })
            console.log(dataCategoryFilm)
            await page.close();
            console.log(">> Cào xong detail category. Đóng tab")
            resolve()
        } catch (err) {
            reject(err)
        }
    })
}


const scrapeCategory = async (browser, url) => {
    return new Promise(async (resolve, reject) => {
        try {
            let page = await browser.newPage()
            console.log(">>Mở tab mới")
            await page.goto(url)
            console.log("Truy cập vào " + url)
            await page.waitForSelector("#dt_contenedor")
            console.log(">>Website đã load xong...")
            const dataCategory = await page.$$eval(".menu-header-container>ul>li", els => {
                dataCategory = els.map(el => {
                    return {
                        category: el.querySelector('a').innerText,
                        url: el.querySelector('a').href
                    }
                })
                return dataCategory
            })
            console.log(dataCategory)
            await page.close();
            dataCategory.forEach((item) => {
                detailCategory(browser, item.url)
            })
            console.log(">> Cào xong. Đóng tab")
            resolve()
        } catch (err) {
            reject(err)
        }
    })
}




module.exports = {
    scrapeCategory
}