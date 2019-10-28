import React, { Suspense } from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

// import RouteView from "./routerConfig/RouteView"
import RouteConfig from "./routerConfig/RouterConfig"

import TopMenu from './components/HomePage/Menu'
// import HomePage from './routes/HomePage';
// import Activity from './routes/Activity';
// import Poem from './routes/Poem';
// import Message from './routes/Message';
// import Writing from './routes/Writing';
import style from './index.css'

// function mapRoute (routeIt, idx) {
//   return <Route key={idx} path={routeIt.path} render={(props) => {
//     return <routeIt.component {...props} />
//   }}>
//     {routeIt.children ? routeIt.children.map((item, index) => {
//       return mapRoute(item, index)
//     }) : null}
//   </Route>
// }
function RouterConfig ({ history }) {
  return <Router history={history}>
    <TopMenu>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          {
            RouteConfig.map((item, index) => {
              if (item.redirect) {
                return <Redirect key={index} from={item.path} to={item.redirect}></Redirect>
              } else {
                if (item.exact) {
                  return <Route key={index} exact path={item.path} render={props => (
                    <item.component children={item.children} {...props} />
                  )}
                  />
                } else {
                  return <Route key={index} path={item.path} render={(props) => {
                    return <item.component children={item.children} {...props}></item.component>
                  }}></Route>
                }
              }
            })
          }
        </Switch>
      </Suspense>
    </TopMenu>
  </Router>
  // return (
  //   <Router history={history}>
  //     <div className={style.mainBox}>
  //       <TopMenu />
  //       <Switch>
  //         <Route path="/" exact component={HomePage} />
  //         <Route path="/activity" exact component={Activity} />
  //         <Route path="/poem" exact component={Poem} />
  //         <Route path="/writing" exact component={Writing} />
  //         <Route path="/message" exact component={Message} />
  //       </Switch>
  //     </div>
  //   </Router>
  // );
}

export default RouterConfig;
