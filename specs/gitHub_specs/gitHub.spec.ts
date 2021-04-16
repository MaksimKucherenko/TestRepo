import {Method} from "../../classes/gitHub_classes/method";
import {chromium, ChromiumBrowser, Page, webkit, WebKitBrowser} from "playwright";

describe("Tests", async () => {
    let browser:ChromiumBrowser;
    let page: Page;

    before(async () => {
    });
    after(async () => {
    });
    beforeEach(async () => {
        browser = await chromium.launch({headless: false, slowMo: 10});
        page = await browser.newPage();
        console.log('<---------------------->')
    });
    afterEach(async () => {
        await browser.close();
    });

    it('Test1: Login to GitHub', async () => {
        const method = new Method(page);
        await method.navigate();
        await method.login();
        await method.checkLogin();
    });
    it('Test2: Logout', async () => {
        const method = new Method(page);
        await method.navigate();
        await method.login();
        await method.logout();
        await method.checkLogout()
    })
    it('Test3: Change Settings', async () => {
        const method = new Method(page);
        await method.navigate();
        await method.login();
        await method.goSettings();
        await method.changeSettings1();
        await method.goProfile();
        await method.checkChangeSettings();
    });
    it('Test4: Search', async () => {
        const method = new Method(page);
        await method.navigate();
        await method.search();
        await method.checkSearch();

    });
    it('Test5: comparisonOfResultsSearch', async () => {
        const method = new Method(page);
        await method.navigate();
        await method.comparisonOfResults();
    });
    it('Test6: Free acc', async () => {
        const method = new Method(page);
        await method.navigate();
        await method.login();
        await method.goUpgrade();
        await method.checkAccFree();
    });
    it('Test7: Navigating through search results', async () => {
        const method = new Method(page);
        await method.navigate();
        await method.login();
        await method.search();
        await method.allResultsFromPage();


    });
    it.only('Test8: Create new Project', async () => {
        const method = new Method(page);
        await method.navigate();
        await method.login();
        await method.goYourProjects();
        await method.newProject();
        await method.checkCreateProject();
        //await method.deleteProject();

    })

})
