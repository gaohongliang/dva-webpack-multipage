import request from '../utils/swordRequest';

export async function queryEntity(payload) {
  return request('YhhxHxpzCtrl_queryEntitys', payload.query);
}
