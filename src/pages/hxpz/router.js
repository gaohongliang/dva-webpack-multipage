import React from 'react';
import { Router } from 'dva/router';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'hxpz',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('../../models/hxpz'));
          cb(null, require('../../routes/hxpz/App'));
        });
      },
    },
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
