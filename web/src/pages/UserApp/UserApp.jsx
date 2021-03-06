import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './UserApp.css';
import { fetchUser } from '../../actions/userActions';
import { selectBase } from '../../actions/basesActions';
import NavBases from '../../components/NavBases/NavBases';
import MainPage from '../MainPage/MainPage';
import BasePage from '../BasePage/BasePage';
import BaseSettingsPage from '../BaseSettingsPage/BaseSettingsPage';
import BaseChatPage from '../BaseChatPage/BaseChatPage';
import BaseCreatePage from '../BaseCreatePage/BaseCreatePage';
import UserDetailsPage from '../UserDetailsPage/UserDetailsPage';

class UserApp extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { user, pathname } = this.props;

    if (!user) {
      return (
        <div className='user-app'>
          <div className='loader'></div>
        </div>
      );
    }
    return (
      <div className='user-app'>
        <NavBases pathname={pathname} />
        <Route exact path='/user' render={() => <MainPage />} />
        <Route exact path='/user/profile' render={() => <UserDetailsPage />} />
        <Route exact path='/user/bases/new' render={() => <BaseCreatePage />} />
        {user.bases.map((base) => (
          <>
            <Route
              exact
              path={`/user/bases/${base.uuid}`}
              key={base.uuid}
              render={() => <BasePage base={base} />}
            />
            <Route
              exact
              path={`/user/bases/${base.uuid}/settings`}
              key={base.uuid}
              render={() => <BaseSettingsPage base={base} />}
            />
            <Route
              exact
              path={`/user/bases/${base.uuid}/chat`}
              key={base.uuid}
              render={() => <BaseChatPage base={base} pathname={pathname} />}
            />
          </>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    selectedBase: state.selectedBase,
  };
};

export default connect(mapStateToProps, { fetchUser, selectBase })(UserApp);
