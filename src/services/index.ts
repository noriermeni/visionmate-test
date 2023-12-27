import {request} from '@src/utils';

export const getUsers = async () => {
  try {
    const response = await request('GET', '', undefined, {
      inc: 'login, name, email, picture, location',
      results: 200,
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @method getRandomUser - is created to get random user, provided by https://randomuser.me/
 * @implements is not used.
 *
 */
export const getRandomUser = async () => {
  try {
    const response = await request('GET', '', undefined, {
      inc: 'login, name, email, picture, location',
      results: 1,
      callback: 'randomuserdata',
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @method getUsersWithPagination
 * @param page - pagination number, used for infinite scroll.
 * @param results - length of response, maximum of data to return.
 *
 */
export const getUsersWithPagination = async (page: number, results: number) => {
  try {
    const response = await request('GET', '', undefined, {
      inc: 'login, name, email, picture, location',
      page: page,
      seed: 'abc',
      results: results,
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
