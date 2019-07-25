import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
//import { Router, Route,Switch } from 'dva/router';
import App from '../App'
import TabMainPage from '../page/tab'
import Home from '../page/home'
import Lottery from '../page/lottery'
import BuyLottery from '../page/buylottery'
import LotteryMenu from '../page/lotterymenu'
import User from '../page/user'
import Login from '../page/login'


// class AppRouter extends React.PureComponent {

//     render() {
//         return (
//             <Router>
//                 <Switch>
//                     <Route path='/' children={(props) => (
//                         <App>
//                             <Switch>
//                                 <TabMainPage path={'/'}>
//                                     <Switch>
//                                         <Route exact path='/home' component={Home} />
//                                         <Route path='/lottery' component={Lottery} />
//                                         <Route path='/buylottery' component={BuyLottery} />
//                                         <Route path='/lotterymenu' component={LotteryMenu} />
//                                         <Route path='/user' component={User} />
//                                     </Switch>
//                                 </TabMainPage>
//                                 <Route path='/login' component={Login} />

//                             </Switch>
//                         </App>
//                     )}>
//                     </Route>
//                 </Switch>
//             </Router>
//         )
//     }
// }
function AppRouter() {
    return (
        <Router  >
            <Switch>

                <Route path='/' children={(props) => (
                    <App>
                        <Switch>
                            <Route path='/login' component={Login} />
                            <TabMainPage >
                                <Switch>
                                    <Route exact path='/home' component={Home} />
                                    <Route path='/lottery' component={Lottery} />
                                    <Route path='/buylottery' component={BuyLottery} />
                                    <Route path='/lotterymenu' component={LotteryMenu} />
                                    <Route path='/user' component={User} />
                                    <Redirect from={'/'} to={'/home'} />
                                </Switch>
                            </TabMainPage>
                        </Switch>
                    </App>
                )}>
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter 