function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const rawFullName = data.fullName.replace(/\s+/g, ' ');
  const splitedFullName = rawFullName.split(' ');
  const splitedBirthday = data.birthday.split('.');

  // Check if full name input is valid
  if(splitedFullName.length != 3 || 
  splitedBirthday.length != 3 || 
  splitedBirthday[0].length != 2 || parseInt(splitedBirthday[0]) > 31 || 
  splitedBirthday[1].length != 2 || parseInt(splitedBirthday[1]) > 12 ||
  splitedBirthday[2].length != 4) {
    return ContentService.createTextOutput("Invalid data!!! Request failed");
  }

  // Get the current date to check if a person is too young or too old
  const currentDate = new Date();
  let yearsDiff = currentDate.getFullYear() - parseInt(splitedBirthday[2]);
  Logger.log(`Raw difference: ${yearsDiff}`);
  let monthDiff = currentDate.getMonth() + 1 - parseFloat(splitedBirthday[1]);
  let daysDiff = currentDate.getDate() - parseInt(splitedBirthday[0]);
  if(monthDiff < 0) {
    yearsDiff--;
  } else if(monthDiff == 0 && daysDiff < 0) {
    yearsDiff--;
  }
  
  // Return our solution if there is an impropper age
  if(yearsDiff >= 60) {
    return ContentService.createTextOutput("You are too old! Request failed");
  } else if(yearsDiff < 18) {
    return ContentService.createTextOutput("You are too young! Request failed");
  }
  Logger.log(`After calculation: ${yearsDiff}`);
  
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