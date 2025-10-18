function getAge(sb) {
  const currentDate = new Date();
  let age = currentDate.getFullYear() - parseInt(sb[2]);
  let monthDiff = currentDate.getMonth() + 1 - parseFloat(sb[1]);
  let daysDiff = currentDate.getDate() - parseInt(sb[0]);
  if(monthDiff < 0) {
    age--;
  } else if(monthDiff == 0 && daysDiff < 0) {
    age--;
  }
  return age;
}
