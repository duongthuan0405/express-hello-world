const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

test('Kiem tra MSSV trong HTML cua ung dung', () => {
    // Duong dan toi file app.js
    const filePath = path.join(__dirname, 'app.js');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Kiem tra xem chuoi '23521548' co ton tai trong file app.js khong
    const hasStudentID = fileContent.includes('23521548');
    
    assert.strictEqual(hasStudentID, true, 'Loi: Khong tim thay MSSV 23521548 trong file app.js!');
});
