export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const TOGGLE_PASSWORD_VISIBILITY = 'TOGGLE_PASSWORD_VISIBILITY';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE';

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

export function startAccountCreation() {
  return {
    type: CREATE_ACCOUNT,
  };
}


export function createAccountSuccess(successMessage) {
  return {
    type: CREATE_ACCOUNT_SUCCESS,
    successMessage,
  }
}

export function createAccount(data) {
  return function (dispatch) {
    dispatch(startAccountCreation());
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    };
    return fetch('/signup/createaccount', options)
      .then(
        response => response.text(),
        (error) => { console.log('An error occured...', error.message); },
      )
      .then(
        text => dispatch(createAccountSuccess(text)),
      );
  };
}

export function toggleShowPassword() {
  return {
    type: TOGGLE_PASSWORD_VISIBILITY,
  };
}
