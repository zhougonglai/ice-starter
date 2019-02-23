import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table, Pagination, Button } from '@alifd/next';
import { compose } from 'redux';
import reducer from '../../reducer';
import { memberList } from '../../actions';
import injectReducer from '../../../../utils/injectReducer';

import './CustomTable.scss';

@compose(injectReducer({ key: 'member', reducer }))
@withRouter
@connect(({ member }) => ({ ...member }), { memberList })
export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  renderIcon = () => {
    return (
      <svg className="icon pointer" aria-hidden="true">
        <use xlinkHref="#icon-call" />
      </svg>
    );
  }

  renderOper = token => {
    return (
      <div className="split">
        <Button text type="primary" component="a" target="_blank" href={`http://www.landi.com/Member/Test/reserve/f/2?token=${token}`}>约体验课</Button>
        <div className="spacer" />
        <Button text type="primary" component="a" target="_blank" href={`http://www.landi.com/Member/Course/index?token=${token}`}>下单</Button>
      </div>
    );
  };

  renderSplit = timerange => {
    return timerange.length ?
      <div className="columns">
        {
          timerange.map(time => <div className="row" key={time}>{time}</div>)
        }
      </div> :
      '';
  }

  componentDidMount() {
    this.props.memberList();
    console.log('ENV', process.env.ENV);
  }

  render() {
    const { list, total, loading } = this.props;
    return (
      <div id="tableContainer">
        <Table
          dataSource={list}
          hasBorder={false}
          loading={loading}
          className="custom-table"
        >
          <Table.Column title="学生" dataIndex="sname" align="center" />
          <Table.Column title="手机号" dataIndex="mobile" align="center" />
          <Table.Column title="七鱼呼叫" cell={this.renderIcon} align="center" />
          <Table.Column title="最近拨打状态" dataIndex="conn_show" align="center" />
          <Table.Column title="最近拨打时间" dataIndex="last_dial_up" align="center" />
          <Table.Column title="注册时间" dataIndex="create_time_show" align="center" />
          <Table.Column title="预约课时间" dataIndex="ty_lsn_time" cell={this.renderSplit} align="center" />
          <Table.Column title="设备类型" dataIndex="device" align="center" />
          <Table.Column title="操作" dataIndex="token" cell={this.renderOper} align="center" />
        </Table>
        <Pagination className="pagination"
          current={this.state.current}
          onChange={this.handlePagination}
          total={total}
        />
      </div>
    );
  }
}
