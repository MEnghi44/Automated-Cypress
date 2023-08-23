export class saveDocumentLeavePage {
    
    btnCreateDocument = 'button.btn-add.ng-scope.btn-80'; //สร้างเอกสาร
    btnStartCreateDocument = 'button.btn-success.btn-block.ng-binding'//เริ่มสร้างเอกสาร

    //inputประเภทการลา
    inputTypeOfLeave = 'input#ABS_TYPE'
    chooseTypeOfLeave = 'b.ng-binding'
  
    btnNext = 'a#btnnext' //คลิ๊กต่อไป
    btnSelectDateTime  = 'input#ABS_DATE' //คลิ๊กเลือกวันเวลา
    SelectDateTime = 'button.btn-primary' //เลือกวันเดียว
    SelectDate = 'button.btn-default.cs-button-hover' //เลือกวันหยุด
    elementsToClick = ['button.btn-default.cs-button-hover'];



    //---------------------------------------------------------------------------//



    //คลิ๊กเลือกประเภทการลา
    clickchooseTypeOfLeave(){
      cy.get(this.btnCreateDocument).click();
      cy.get(this.btnStartCreateDocument).click;
      cy.visit('https://demo.compupower-home.com:8082/computest/program/HR/wtamanad/#/main/0000002564/202308000008874/1');
      cy.wait(2000);
      cy.get(this.inputTypeOfLeave).click();
      cy.get(this.chooseTypeOfLeave).contains('35-ลาได้เฉพาะเพศชาย (Automate Test)').click();
      cy.wait(1000);
    }

    //คลิ๊กปุ่มต่อไป
    clickNext(){
      cy.get(this.btnNext).click();
    }
    
    //คลิ๊กเลือกวันเวลาที่ต้องการลา
    clickSelectDateTime(){
      cy.get(this.btnSelectDateTime).click();
      cy.get(this.SelectDateTime).contains('ลาวันเดียว').click();
      cy.wrap(this.elementsToClick).each((selector) => {
      cy.get(selector).click();
      cy.wait(10000); // รอเวลาเพื่อรอให้โหลดหรือดำเนินการต่อไปตามความเหมาะสม
});

    }

  }