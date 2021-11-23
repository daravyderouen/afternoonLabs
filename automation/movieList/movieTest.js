const {Builder, Capabilities, By} = require('selenium-webdriver')

const {search} = require('./src/search')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get('http://localhost:5500/exercises/automation/movieList/index.html')
})

afterAll(async () => {
    await (await driver).quit()
})