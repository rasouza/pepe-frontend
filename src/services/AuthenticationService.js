/**
 * Copyright 2020, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { isEmpty } from 'lodash/fp';

export const USER_DATA = 'TELECOM_USER_DATA';

export const logUserIn = googleLoginUserData => {
  const {
    tokenId: token,
    profileObj: { name, email, imageUrl, googleId }
  } = googleLoginUserData;

  const userData = { token, name, email, imageUrl, googleId };
  localStorage.setItem(USER_DATA, JSON.stringify(userData));
};

export const getUserData = () => JSON.parse(localStorage.getItem(USER_DATA));

export const isUserLogged = () => {
  const userData = getUserData();
  return !isEmpty(userData);
};

// export const GOOGLE_CLIENT_ID =
// '335705794943-ivkd7jma7apejboa8b7b23nkq3ajvuss.apps.googleusercontent.com';
