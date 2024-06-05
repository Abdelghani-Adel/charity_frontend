export function validateEgyptianNationalID(id: string | undefined): boolean {
  if (!id) return false;

  // Check if the input is a 14-digit number
  const idPattern = /^\d{14}$/;
  if (!idPattern.test(id)) {
    return false;
  }

  // Extract parts of the ID using slice
  const centuryDigit = parseInt(id.charAt(0), 10);
  const year = parseInt(id.slice(1, 3), 10);
  const month = parseInt(id.slice(3, 5), 10);
  const day = parseInt(id.slice(5, 7), 10);

  // Validate century digit (2 or 3)
  if (centuryDigit !== 2 && centuryDigit !== 3) {
    return false;
  }

  // Validate month (01-12)
  if (month < 1 || month > 12) {
    return false;
  }

  // Validate day (01-31) - a simple check, not accounting for different month lengths and leap years
  if (day < 1 || day > 31) {
    return false;
  }

  // Optional: Validate the governorate code (01-29, 31-35, 88) - Add more codes if needed
  const governorateCode = parseInt(id.slice(7, 9), 10);
  const validGovernorateCodes = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 31, 32, 33, 34, 35, 88,
  ];
  if (!validGovernorateCodes.includes(governorateCode)) {
    return false;
  }

  // Optional: Add more complex validation if needed (e.g., check digit validation)

  return true;
}

export function pullDataFromEgyptianID(id: string) {
  const birthDate = getBirthdate(id);
  const gender = getGender(id);
  const governorate = getGovernorateCode(id);
  const age = calculateAge(id);

  return {
    birthDate,
    gender,
    governorate,
    age,
  };
}

function getBirthdate(id: string): Date | null {
  // Check if the input is a 14-digit number
  const idPattern = /^\d{14}$/;
  if (!idPattern.test(id)) {
    return null;
  }

  // Extract parts of the ID using slice
  const centuryDigit = parseInt(id.charAt(0), 10);
  const year = parseInt(id.slice(1, 3), 10);
  const month = parseInt(id.slice(3, 5), 10);
  const day = parseInt(id.slice(5, 7), 10);

  // Determine the full year based on the century digit
  let fullYear: number;
  if (centuryDigit === 2) {
    fullYear = 1900 + year;
  } else if (centuryDigit === 3) {
    fullYear = 2000 + year;
  } else {
    return null; // Invalid century digit
  }

  // Validate the date components
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return null;
  }

  // Construct the birthdate
  const birthdate = new Date(fullYear, month - 1, day);
  if (isNaN(birthdate.getTime())) {
    return null; // Invalid date
  }

  return birthdate;
}

function getGender(nationalID: string): string {
  // Check if the national ID is a valid 14-digit number
  if (!/^\d{14}$/.test(nationalID)) {
    return "";
  }

  const genderDigitStr = nationalID.substring(12, 13);
  const genderDigit = parseInt(genderDigitStr, 10);

  // Determine gender based on the value of the gender digit
  return genderDigit % 2 === 0 ? "أنثي" : "ذكر";
}
function getGovernorateCode(nationalID: string): string {
  // Check if the national ID is a valid 14-digit number
  if (!/^\d{14}$/.test(nationalID)) {
    return "";
  }

  // Extract the governorate code part from the national ID (7th and 8th digits)
  const governorateCode = nationalID.substring(7, 9);

  return governorateCode;
}

function calculateAge(nationalID: string): string {
  // Check if the national ID is a valid 14-digit number
  if (!/^\d{14}$/.test(nationalID)) {
    return "";
  }

  // Extract the birthdate part from the national ID
  const year = parseInt(nationalID.substring(1, 3), 10);
  const month = parseInt(nationalID.substring(3, 5), 10);
  const day = parseInt(nationalID.substring(5, 7), 10);

  // Calculate the birthdate
  const birthDate = new Date(year + 1900, month - 1, day);

  // Calculate the age
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  if (currentMonth < month || (currentMonth === month && currentDate.getDate() < day)) {
    age--;
  }

  return `${age}`;
}
