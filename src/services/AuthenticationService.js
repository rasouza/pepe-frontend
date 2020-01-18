// import { isEmpty } from 'lodash/fp';

// export const USER_DATA = 'TELECOM_USER_DATA';

// export const logUserIn = googleLoginUserData => {
//   const {
//     tokenId: token,
//     profileObj: { name, email, imageUrl, googleId }
//   } = googleLoginUserData;

//   const userData = { token, name, email, imageUrl, googleId };
//   localStorage.setItem(USER_DATA, JSON.stringify(userData));
// };

// export const getUserData = () => JSON.parse(localStorage.getItem(USER_DATA));

export const isUserLogged = () => {
  // const userData = getUserData();
  // return !isEmpty(userData);
  return false;
};

// export const GOOGLE_CLIENT_ID =
// '335705794943-ivkd7jma7apejboa8b7b23nkq3ajvuss.apps.googleusercontent.com';
