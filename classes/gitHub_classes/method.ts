import {Page} from "playwright";
import {PageObjects} from "../../page_object/gitHub_objects/pageObjects";
import {expect} from 'chai';

export class Method extends PageObjects {
    private page: any;

    constructor(page: Page) {
        super();
        this.page = page;
    }

    async navigate() {
        await this.page.goto(this.gitHub); //переход на github.com
        await console.log(`>Перешел на ${this.gitHub}`);
    };

    async login() {
        await this.page.click(this.signInBtn); //клик на Sign In
        await console.log(`>Клик на Sign In`);
        await this.page.fill(this.loginField, this.testLogin); //ввод логина
        await console.log(`>Ввел логин - ${this.testLogin}`);
        await this.page.fill(this.passwordField, this.testPassword); //ввод пароля
        await console.log(`>Ввел пароль - ${this.testPassword}`);
        await this.page.click(this.submitBtn); //клик сабмит
        await console.log(`>Клик на Submit`);
    };

    async logout() {
        await this.page.click(this.userMenuSelect); //клик юзер меню
        await console.log(`>Клик на User Menu`);
        await this.page.click(this.userMenuSignOut); //клик сигнаут
        await console.log(`>Клик на Sign Out`);

    };

    async goYourProjects() {
        await this.page.click(this.userMenuSelect); //клик юзер меню
        await console.log(`>Клик на User Menu`);
        await this.page.click(this.userMenuYourProjects);
        await console.log(`>Клик на Your Projects`);
    };

    async newProject() {
        await this.page.click(this.newProjectBtn);
        await console.log(`>Клик на New Project`);
        await this.page.fill(this.projectNameField, this.projectName);
        await console.log(`>Ввел Project Name - ${this.projectName}`);
        await this.page.fill(this.descriptionField, this.description);
        await console.log(`>Ввел Description - ${this.description}`);
        // await this.page.check('#project_public_true');
        await this.page.check(this.radioBtnPrivate);
        await console.log(`>Клик radioBtn Private`);
        await this.page.click(this.createProjectBtn);
        await console.log(`>Клик на Create Project`);
    }

    async deleteProject() {
        /*await this.page.click(this.userMenuSelect);
        await this.page.click(this.userMenuYourProjects);
        await this.page.click('.octicon-kebab-horizontal');
        await this.page.click('details[class=\'details-reset details-overlay dropdown position-static\'] a:nth-child(1)');
        await this.page.click('.btn.btn-danger.flex-auto');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(20000)*/
        const fetch = require("node-fetch");
        const url = 'https://github.com/users/TestForTest456/projects';
        const data = {_method: 'delete'};

        try {
            const response = await fetch(url, {
                method: 'POST', // или 'PUT'
                body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
                headers: {'content-type': 'application/x-www-form-urlencoded'}
            });
            const json = await response.json();
            console.log('Успех:', JSON.stringify(json));
        } catch (error) {
            console.log('Ошибка:', error);
        }
    }

    async checkCreateProject() {
        await this.page.click(this.userMenuSelect);
        await this.page.click(this.userMenuYourProjects);
        let a = await this.page.innerText(this.projectResults);
        expect(a).contain(this.projectName);
        await this.page.click('.octicon-kebab-horizontal');
        await this.page.click('button[name="state"]')

    }

    async checkLogout() {
        await this.page.waitForSelector(this.signUpBtn, {timeout: 5000});
        if (await this.page.isVisible(this.signUpBtn)) {
            await console.log(`>Logout`)
        }
    };

    async goSettings() {
        await this.page.click(this.userMenuSelect); //клик юзер меню
        await console.log(`>Клик на User Menu`);
        await this.page.click(this.userMenuSettings,); //клик сетинг
        await console.log(`>Клик на Settings`);
    };

    async goProfile() {
        await this.page.click(this.userMenuSelect); //клик юзер меню
        await console.log(`>Клик на User Menu`);
        await this.page.click(this.userMenuSignedInAss); //клик профиль
        await console.log(`>Клик на Signed in ass`);
    };

    async goUpgrade() {
        await this.page.click(this.userMenuSelect);
        await console.log(`>Клик на User Menu`);
        await this.page.click(this.userMenuUpgrade);
        await console.log(`>Клик на Upgrade`);
    }

    async changeSettings1() {
        await this.page.fill(this.userNameField, this.name); //изменить имя
        await console.log(`>Ввел - ${this.name}`);
        await this.page.fill(this.userBioField, this.bio); //изменить био
        await console.log(`>Ввел - ${this.bio}`);
        await this.page.fill(this.userUrlField, this.url); //изменить урл
        await console.log(`>Ввел - ${this.url}`);
        await this.page.fill(this.userCompanyField, this.company); //изменить компанию
        await console.log(`>Ввел - ${this.company}`);
        await this.page.fill(this.userLocationField, this.location); //изменить локацию
        await console.log(`>Ввел - ${this.location}`);
        await this.page.click(this.userUpdateProfileBtn);
        await console.log(`>Клик на Upgrade profile`);
    };

    async search() {
        await this.page.fill(this.searchField, this.searchText);
        await console.log(`>Ввел - ${this.searchText}`);
        await this.page.keyboard.press('Enter');
        await this.page.waitForSelector(this.repoResults);
    };

    async comparisonOfResults() {
        await this.search();
        let results1 = await this.page.innerText(this.searchResults);
        await this.login();
        await this.search();
        let results2 = await this.page.innerText(this.searchResults);
        expect(results1).equal(results2);
        await console.log(`>Результат поиска 1 равен результату поиска 2`);
    };

    async checkLogin() {
        await this.page.click(this.userMenuSelect);
        const userName = await this.page.innerText(this.userMenuSignedInAss);
        expect(userName).contain(this.testLogin);
        await console.log(`>User >>> ${userName}`);
    };

    async checkChangeSettings() {
        const userTrueName = await this.page.innerText(this.nameInfo);
        expect(userTrueName).equal(this.name);
        const userBio = await this.page.innerText(this.bioInfo);
        expect(userBio).equal(this.bio);
        const userUrl = await this.page.innerText(this.urlInfo);
        expect(userUrl).equal(this.url);
        const userCompany = await this.page.innerText(this.companyInfo);
        expect(userCompany).equal(this.company);
        const userLocation = await this.page.innerText(this.locationInfo);
        expect(userLocation).equal(this.location);
        await console.log('Настройки изменились')
    };

    async checkSearch() {
        const searchRes = await this.page.url();
        expect(searchRes).contain(this.searchText);
        const numberRes = await this.page.innerText(this.searchResults);
        if (await this.page.isVisible(this.elemResults)) {
            await console.log(`>Results - ${numberRes}`)
        } else {
            console.log(`>No Results for ${this.searchText}`)
        }
    };

    async checkAccFree() {
        const free = await this.page.innerText(this.freePlan);
        expect(free).contain('Current plan')
        await console.log('>account FREE')
    };

    async allResultsFromPage() {
        let a = await this.page.$$(this.nameResults);
        await console.log('>Результаты поиска');
        if (await this.page.isVisible(this.nameResults)) {
            for (let x = 0; x <= 9; x++) {
                await console.log(`${x + 1} > ${await a[x].innerText()}`)
            }
        } else {
            console.log(`>Нет результата для ${this.searchText}`)
        }
    }

}
