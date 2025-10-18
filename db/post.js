function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const splitedBirthday = data.birthday.split('.');
  
  // Check if input is valid
  if(validateInput(data.fullName, splitedBirthday)) {
    return ContentService.createTextOutput("Invalid data!!! Request failed");
  }

  // Get person's age to check if the person is too old or too young
  const age = getAge(splitedBirthday);
  
  // Return our solution if there is an impropper age
  if(age >= 60) {
    return ContentService.createTextOutput("You are too old! Request failed");
  } else if(age < 18) {
    return ContentService.createTextOutput("You are too young! Request failed");
  }
  
  // Get an active sheet and write data
  const activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const rowNumber = parseInt(activeSheet.getRange("A:B").getValues().filter(content => content[0] && content[1]).length + 1);
  activeSheet.getRange(`A${rowNumber}:B${rowNumber}`).setValues(
    [
      [data.fullName, data.birthday]
    ]
  );
  return ContentService.createTextOutput("DONE!");
}