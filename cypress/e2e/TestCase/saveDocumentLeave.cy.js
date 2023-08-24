
import { saveDocumentLeavePage } from "../pageObject/saveDocumentLeavePage";

const saveLeave = new saveDocumentLeavePage();

describe('Processing Document', () => {
      before(() => {
            // Ignore Error Function App
            Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
            });
      });

      beforeEach('Go to Document Form Page', () => {
            // Re-use Session Storage
            cy.getAuthentication('MENG002', 'MENG002', 'เม้ง ง');
            cy.getAuthorization();
            // แสดงไปที่เอกสารใบลา
            cy.visit('https://demo.compupower-home.com:8082/computest/program/HR/wwomanwf/?program=WWOmanWF&RQ_CODE=TAMANAD#/homewf')
      });

      it('SAVE-LA-001', () => {
            saveLeave.clickCreateDocument();
            saveLeave.clickchooseTypeOfLeaveM();
            saveLeave.clickNext();
            saveLeave.clickSelectDateTime();
            //รอเลือกวันที่
        })

      it('SAVE-LA-002', () => {
            saveLeave.clickCreateDocument();
            saveLeave.clickchooseTypeOfLeaveF();
        })
      
})







