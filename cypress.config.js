const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Config นี้เป็นตัวปิดการ Auto Run เมื่อทำการกด Save Code
    watchForFileChanges: false, 
    // Config นี้เป็นตัวกำหนด Timeout 
    defaultCommandTimeout: 10000,
    // ถ้าต้องการใช้ URL หรือเส้นทางในทุกคำสั่ง cy.visit() โดยอัตโนมัติ คุณสามารถกำหนดค่า baseUrl เพื่อลดความซ้ำซ้อนในการระบุ URL ในทุกที่ต้องใช้ในการทดสอบ
    baseUrl: 'https://demo.compupower-home.com:8082/computest/#/login/SQL?menucode=mwes,mwpn,mwrc,mwhd,mrwf,hr6',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
 