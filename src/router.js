import React, { } from 'react';
import { Router, Route, Switch } from 'dva/router';
import TopMenu from './components/HomePage/Menu'
import HomePage from './routes/HomePage';
import Activity from './routes/Activity';
import style from './index.css'

function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <div className={style.mainBox}>
        <TopMenu />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/activity" exact component={Activity} />
        </Switch>
      </div>
    </Router>
  );
}

export default RouterConfig;
