function doPost(e) {
  const data = JSON.parse(e.postData.contents);

  // Get birthday as array => [day, month, year]
  const splitedBirthday = data.birthday.trim().split('.');

  // Get name as array => [lastName, firstName, middleName];
  const splitedName = data.fullName.replace(/\s+/, ' ').trim().split(' ');
  
  // Check if input is valid
  if(validateInput(splitedName, splitedBirthday)) {
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
      [
        `${splitedName[0].toLocaleUpperCase()} ${
          splitedName[1][0].toLocaleUpperCase()}${splitedName[1].slice(1).toLocaleLowerCase()} ${
            splitedName[2][0].toLocaleUpperCase()}${splitedName[2].slice(1).toLocaleLowerCase()}`, 
        splitedBirthday.join('.')
      ]
    ]
  );
  return ContentService.createTextOutput("DONE!");
}