import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { queryEntity } from '../services/page1Service';

export default {
  namespace: 'page1',
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
        yield put(showLoading());// 开始顶部进度条
        const { data } = yield call(queryEntity, payload);
        yield put({
          type: 'save',
          payload: { entitys: data },
        });
      } finally {
        yield put(hideLoading());// 结束顶部进度条
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
