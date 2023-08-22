export class loginPage  {

    // LOCATOR LOGIN PAGE
    txtUsername = '#username'
    txtPassword = '.input-group > .form-control'
    btnSignIn   = '#sign-in'
    txtUserName = '.dropdown-toggle > .ng-binding'
    txtloginError = '.jquery-notific8-message'

    // เข้าสู่ระบบโดยการกรอก username,password และกด signin
    login(username, password){
      cy.get(this.txtUsername).type(username)
      cy.get(this.txtPassword).type(password)
      cy.get(this.btnSignIn).click()
    }

    // ตรวจสอบเข้าสู่ระบบแล้ว ชื่อผู้ใช้ตรงกัน
    loginVerifyUser(userName){
      cy.contains(this.txtUserName,userName)
    }

    // ตรวจสอบข้อความผิดพลาดในการเข้าสู่ระบบไม่สำเร็จ
    loginVerifyError(message){
      cy.contains(this.txtloginError,message)
    }

}