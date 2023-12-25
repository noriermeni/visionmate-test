import {request} from '@src/utils';

export const getUsers = async (count: number) => {
  try {
    const response = await request('GET', '', undefined, {
      results: count,
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getRandomUser = async () => {
  try {
    const response = await request('GET', '', undefined, {
      results: 1,
      callback: 'randomuserdata',
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
