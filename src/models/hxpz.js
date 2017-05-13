import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { queryEntity } from '../services/hxpzService';

export default {
  namespace: 'hxpz',
  state: {
    entitys: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        // 进入配置页面初始化查询实体列表
        if (pathname === '/') {
          dispatch({
            type: 'fetchQueryEntity',
            payload: { query },
          });
        }
      });
    },
  },

  effects: {
    *fetchQueryEntity({ payload, }, { call, put }) { // eslint-disable-line
      try {
        yield put(showLoading());
        const { data } = yield call(queryEntity, payload);
        yield put({
          type: 'save',
          payload: { entitys: data },
        });
      } finally {
        yield put(hideLoading());
      }
    },
    // *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //   yield put({ type: 'save' });
    // },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
