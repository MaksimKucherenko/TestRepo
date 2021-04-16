import {TestData} from "./testData";

export class PageObjects extends TestData {

    //     https://github.com/
    //кнопка логина "Sign In"
    signInBtn = '.flex-shrink-0.mr-3'
    //поле поиска "Search GitHub"
    searchField = '.form-control.input-sm.header-search-input'
    //кнопка регистрации Sign up for GitHub
    signUpBtn = '.btn-mktg-fluid.btn-green-mktg-fluid.width-full.width-sm-auto'

    //     https://github.com/login
    //поле ввода логина "Username or email address"
    loginField = '#login_field'
    //поле ввода пароля "Password"
    passwordField = '#password'
    //кнопка сабмит "Sign in"
    submitBtn = '.btn'

    //      меню пользователя (select)
    //селектор пользователя
    userMenuSelect = '.Header-link[aria-label="View profile and more"]'
    //Signed in as
    userMenuSignedInAss = '.header-nav-current-user'
    //upgrade
    userMenuUpgrade = '.dropdown-item[data-ga-click="Header, go to compare plans, text:upgrade"]'
    //settings
    userMenuSettings = '.dropdown-item[href="/settings/profile"]'
    //Sign Out
    userMenuSignOut = '.dropdown-signout'
    // Your projects
    userMenuYourProjects = '.dropdown-item[data-ga-click="Header, go to projects, text:your projects"]'

    //    https://github.com/settings/profile
    //имя "Name"
    userNameField = '#user_profile_name'
    //биография "Bio"
    userBioField = '#user_profile_bio'
    //сайт "URL"
    userUrlField = '#user_profile_blog'
    //Компания "Company"
    userCompanyField = '#user_profile_company'
    //локация "Location"
    userLocationField = '#user_profile_location'
    //кнопка "Update profile"
    userUpdateProfileBtn = '.btn-primary'

    //      https://github.com/AFedorovskii
    //элемент настоящее имя
    nameInfo = '.p-name'
    //элемент Bio
    bioInfo = '.p-note'
    //элемент URL
    urlInfo = '.Link--primary'
    //элемент Company
    companyInfo = '.p-org'
    //элемент Location
    locationInfo = '.p-label'

    //       результаты поиска
    repoResults = '.menu-item.selected'
    //найденно элементов
    elemResults = '.repo-list-item' //массив [0]-1элемент
    nameResults = '.f4 [data-hydro-click]' //массив,[0]-[9]имя 1 результата
    // кол-во результата
    searchResults = '#js-pjax-container > div > div.col-12.col-md-9.float-left.px-2.pt-3.pt-md-0.codesearch-results > div > div > h3'

    // https://github.com/settings/billing/plans
    // элемент Free
    freePlan = '.p-lg-3.color-bg-primary'

    //https://github.com/TestForTest456?tab=projects
    // Кнопка New Project
    newProjectBtn = '.btn.btn-primary.d-block'
    projectResults = '#projects-results'

    //https://github.com/new/project
    // поле Project board name
    projectNameField = '#project_name'
    // поле Description
    descriptionField = '#project_body'
    // radio Btn Private
    radioBtnPrivate = '#project_public_false'
    // кнопка Create Project
    createProjectBtn = '.btn-primary'


}

