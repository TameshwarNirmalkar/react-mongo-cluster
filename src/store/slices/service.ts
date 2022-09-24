import HttpClient from '../../api/HttpClient';

export const loginAPI = (data: any): Promise<any> => {
  console.log(data);
  return new Promise((resolve) => {
    resolve({});
  });
};

export const getUserAPI = (): Promise<Array<any>> => {
  return HttpClient.get('/users');
};
