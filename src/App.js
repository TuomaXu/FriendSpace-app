import React, { Component } from 'react';

import { Route,Redirect } from "react-router-dom";



import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import CreateUserScreen from './Screen/CreateUserScreen';
import TabBarScreen from './Screen/TabBarScreen';
import CreateMessageScreen from './Screen/CreateMessageScreen';
import AddFriendScreen from './Screen/AddFriendScreen';
import UserScreen from './Screen/UserScreen';
import ChangePassWordScreen from './Screen/ChangePassWordScreen';
import ChangePersonInfoScreen from './Screen/ChangePersonInfoScreen';


class App extends Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={LoginScreen} />
        <Route path={'/RegisterScreen'} component={RegisterScreen} />
        <Route path={'/CreateUserScreen'} component={CreateUserScreen} />
        <Route path={'/TabBarScreen'} component={TabBarScreen} />
        <Route path={'/CreateMessageScreen'} component={CreateMessageScreen} />
        <Route path={'/AddFriendScreen'} component={AddFriendScreen} />
        <Route path={'/UserScreen'} component={UserScreen} />
        <Route path={'/ChangePassWordScreen'} component={ChangePassWordScreen} />
        <Route path={'/ChangePersonInfoScreen'} component={ChangePersonInfoScreen} />
      </div>
    );
  }
}

export default App;
