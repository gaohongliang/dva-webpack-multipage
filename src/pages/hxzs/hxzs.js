import dva from 'dva';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { message } from 'antd';
import { ERROR_MSG_DURATION } from '../globalconstants.js';
import '../globalstyle.css';

// 1. Initialize
const app = dva({
  extraReducers: {
    loadingBar: loadingBarReducer,
  },
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
  },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
