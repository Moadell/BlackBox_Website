const XLSX = require("xlsx");

const exportExcel = (fileName, jsonData) => {
    let path = `${__dirname}/../public/${fileName}.xlsx`;
    let workbook = XLSX.readFile(path);
    let worksheet = workbook.Sheets[workbook.SheetNames[0]];
    XLSX.utils.sheet_add_json(worksheet, jsonData, { skipHeader: true, origin: -1 });
    XLSX.writeFile(workbook, path);
}

module.exports = {
    exportExcel
}