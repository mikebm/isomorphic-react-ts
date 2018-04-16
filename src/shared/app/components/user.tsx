import * as React from 'react'; 
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../redux/actions/user-actions'

export interface UserProps {
	name: string;
	email: string;
}

export interface UserState {
	user: UserProps
}

class User extends Component<UserProps, UserState> {
    static fetchData({ store }: any) {
        return store.dispatch(actions.getName(1));
    }
    componentDidMount() {
        (this.props as any).getName(1);
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>User</title>
                </Helmet>
                <strong>User page </strong>
                Async data [
                    name: {this.props.name}
                    email: {this.props.email}
                ]
            </div>
        );
    }
}
function mapStateToProps(state: UserState) {
    return {
        ...state.user,
    }
}
function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(User as any);