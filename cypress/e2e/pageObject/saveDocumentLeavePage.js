export class saveDocumentLeavePage {
    
    btnCreateDocument = 'button.btn-add.ng-scope.btn-80'; //สร้างเอกสาร
    btnStartCreateDocument = 'button.btn-success.btn-block.ng-binding'//เริ่มสร้างเอกสาร
    //inputประเภทการลา
    inputTypeOfLeave = 'input#ABS_TYPE'
    chooseTypeOfLeave = 'b.ng-binding'
    


    clickchooseTypeOfLeave(){
      cy.get(this.btnCreateDocument).click({ multiple: true });
      cy.get(this.btnStartCreateDocument).click;
      cy.visit('https://demo.compupower-home.com:8082/computest/program/HR/wtamanad/#/main/0000002564/202308000008874/1');
      cy.wait(2000);
      cy.get(this.inputTypeOfLeave).click({ multiple: true });
      cy.get(this.chooseTypeOfLeave).contains('35-ลาได้เฉพาะเพศชาย (Automate Test)').click();
    }
  

  }