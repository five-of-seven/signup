export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const TOGGLE_PASSWORD_VISIBILITY = 'TOGGLE_PASSWORD_VISIBILITY';

export function updateFirstName(firstName) {
  return {
    type: UPDATE_FIRST_NAME,
    firstName,
  };
}

export function updateLastName(lastName) {
  return {
    type: UPDATE_LAST_NAME,
    lastName,
  };
}

export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    email,
  };
}

export function updatePassword(password) {
  return {
    type: UPDATE_PASSWORD,
    password,
  };
}

export function updateZipcode(zipcode) {
  return {
    type: UPDATE_ZIPCODE,
    zipcode,
  };
}

export function createAccount() {
  return {
    type: CREATE_ACCOUNT,
  };
}

export function toggleShowPassword() {
  return {
    type: TOGGLE_PASSWORD_VISIBILITY,
  };
}
