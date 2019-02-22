/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { Input, Checkbox, Grid, Form } from '@alifd/next';

import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from '../../utils/injectReducer';
import { userLogin } from './actions';
import reducer from './reducer';

const Icon = FoundationSymbol;
const { Row } = Grid;
const FormItem = Form.Item;

@compose(injectReducer({ key: 'user', reducer }))
@withRouter
@connect(({ user }) => ({ ...user }), { userLogin })
export default class UserLogin extends Component {
  static displayName = 'UserLogin';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
      remember: false,
    };
  }

  formChange = form => {
    this.setState({
      ...this.state,
      ...form,
    });
  };

  handleSubmit = ({ account, password }, errors) => {
    if (errors) {
      console.log('errors', errors);
    } else {
      this.props.userLogin({ account, password });
    }
  };

  render() {
    return (
      <div className="user-login">
        <div className="formContainer">
          <Form value={this.state} onChange={this.formChange}>
            <FormItem required requiredMessage="必填" className="formItem">
              <Input
                innerBefore={
                  <Icon type="person" size="small" className="inputIcon" />
                }
                name="account"
                maxLength={20}
                placeholder="用户名"
              />
            </FormItem>
            <FormItem required requiredMessage="必填" className="formItem">
              <Input
                innerBefore={
                  <Icon type="lock" size="small" className="inputIcon" />
                }
                name="password"
                htmlType="password"
                placeholder="密码"
              />
            </FormItem>
            <FormItem>
              <Checkbox name="remember" className="checkbox">
                记住账号
              </Checkbox>
            </FormItem>
            <Row className="formItem">
              <Form.Submit
                type="primary"
                validate
                onClick={this.handleSubmit}
                className="submitBtn"
              >
                登 录
              </Form.Submit>
            </Row>

            {/* <Row className="tips">
              <Link to="/user/register" className="tips-text">
                立即注册
              </Link>
            </Row> */}
          </Form>
        </div>
      </div>
    );
  }
}
