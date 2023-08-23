import { loginPage } from "../e2e/pageObject/loginPage"
const authentication = new loginPage()

// Method Re-use Session Storage
Cypress.Commands.add('getAuthentication',(username, password,fullName) => {
    cy.session('MySession', () => {
    cy.visit('/');
    authentication.login(username, password);
    authentication.loginVerifyUser(fullName);
    }, {
        cacheAcrossSpecs: true // ทำให้ทุกไฟล์สามารถนำ session มาใช้ร่วมกันได้ทุกไฟล์
    })
})

// Method Set Authorization in OT Form Page
Cypress.Commands.add('getAuthorization',()=>{
    cy.window().then((win) => {
        win.sessionStorage.setItem('ls.CLERK', 'N');
        win.sessionStorage.setItem('ls.DS_FLAG', 'NM');
        win.sessionStorage.setItem('ls.EM_RUNNO', '202205000000010');
        win.sessionStorage.setItem('ls.AdAcEM_RUNNO', '202205000000010');
        win.sessionStorage.setItem('ls.RES_LIST', '[{"EM_RUNNO":"202205000000010","EM_CODE":"K001","EM_PRENAME":"นางสาว","EM_FULLNAME":"ดารารัตน์ นามสมมุติ","EM_NAME":"ดารารัตน์","EM_SURNAME":"นามสมมุติ"}]');
    })
})

