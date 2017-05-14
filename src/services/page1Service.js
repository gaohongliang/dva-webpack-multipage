import request from '../utils/request';

export async function queryEntity(payload) {
  return request('YhhxHxpzCtrl_queryEntitys', payload.query);
}
