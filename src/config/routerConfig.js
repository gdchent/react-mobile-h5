import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from '../App'
import TabMainPage from '../page/tab'
import Home from '../page/home'
import Lottery from '../page/lottery'
import BuyLottery from '../page/buylottery'
import LotteryMenu from '../page/lotterymenu'
import User from '../page/user'
import Login from '../page/login'
import Register from '../page/register'
import Test from '../page/test'

function AppRouter(routerObj) {
    const { history } = routerObj
    return (
        <Router history={history} basename={'/'}>
            <Switch>
                <Route path='/' children={(props) => (
                    <App>
                        <Switch>
                            <Route path="/test" component={Test} />
                            <Route path="/register" component={Register} />
                            <Route path='/login' component={Login} />    {/* 这个放再TabMainPage里面会有问题 */}
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