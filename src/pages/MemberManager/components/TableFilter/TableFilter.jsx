import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Message } from '@alifd/next';

import injectReducer from '../../../../utils/injectReducer';
import reducer from '../../reducer';
import { memberAdd, memberModel, memberList, getSDK } from '../../actions';
import CustomTable from './CustomTable';
import Filter from './Filter';

@compose(injectReducer({ key: 'member', reducer }))
@withRouter
@connect(({ member }) => ({ member }), { memberAdd, memberModel, memberList, getSDK })
export default class TableFilter extends Component {
  static displayName = 'TableFilter';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      std: '',
      is_conn: '',
      create_time: [],
      exp_time: [],
      device: '',
      mobile: '',
      nickname: '',
      current: 1,
      dialog: false,
    };
  }

  onChange = (file, value) => {
    this.setState({
      [file]: value,
    });
  }

  handlePagination = current => {
    this.setState({ current }, () => this.memberList(true));
  }

  memberList = (page = false) => {
    const { std, is_conn, create_time, exp_time, device, current } = this.state;
    this.props.memberList(Object.assign({},
      std ? { std } : {},
      is_conn ? { is_conn } : {},
      create_time.length ? { create_time: create_time.map(moment => moment.format('YYYY-MM-DD')) } : {},
      exp_time.length ? { exp_time: exp_time.map(moment => moment.format('YYYY-MM-DD')) } : {},
      Number.isFinite(device) ? { device } : {},
      page === true ? { page: current } : { page: 1 }
    )).then(({ status }) => {
      if (status && page !== true) {
        this.setState({ current: 1 });
      }
    });
  }

  addStd = () => {
    const { mobile, nickname } = this.state;
    if (mobile && nickname) {
      this.props.memberAdd({ mobile, nickname })
        .then(({ status }) => {
          if (status) {
            this.memberList();
          }
          this.onChange('dialog', false);
        });
    } else {
      Message.info('字段未完成');
    }
  }

  componentDidMount() {
    this.memberList();
    this.props.getSDK();
  }

  render() {
    const {
      member,
    } = this.props;
    /* eslint-disable */
    return (
      <>
        <Filter
          {...this.state}
          {...member}
          memberAdd={this.props.memberAdd}
          memberModel={this.props.memberModel}
          memberList={this.memberList}
          onChange={this.onChange}
          />
        <CustomTable
          {...this.state}
          {...member}
          memberList={this.memberList}
          handlePagination={this.handlePagination}
          onChange={this.onChange}
          />
      </>
    );
  }
}
