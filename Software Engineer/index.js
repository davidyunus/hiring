const puppeteer = require('puppeteer')

async function main(inputJob) {
	try {
		const browser = await puppeteer.launch({headless: true})
		const page = await browser.newPage()
		// page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1')
		
		await page.goto(`https://www.karirpad.com/lowongan-kerja/${inputJob}`)

		await page.waitForSelector('#comp_premium_img')
		const listing = await page.$('#comp_premium_img > .premium_listing_bg > a')

		console.log(listing)
		// for(const li of listing) {
			// const name = await li.$eval('span', span => span.innerText)
			// console.log('name: ', name)
		// }

	} catch (err) {
		console.log('the err ===> ', err)
	}
}

main('developer')