function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const rowNumber = parseInt(activeSheet.getRange("A:B").getValues().filter(content => content[0].length > 0 && content[1].length > 0).length + 1);
  activeSheet.getRange(`A${rowNumber}:B${rowNumber}`).setValues(
    [
      [data.fullName, data.birthday]
    ]
  );
  return ContentService.createTextOutput("DONE!");
}