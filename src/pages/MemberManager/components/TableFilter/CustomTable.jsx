import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table, Pagination, Balloon, Icon } from '@alifd/next';
import { compose } from 'redux';
import reducer from '../../reducer';
import { memberList } from '../../actions';
import injectReducer from '../../../../utils/injectReducer';
// import DynamicIcon from '@icedesign/dynamic-icon';

@compose(injectReducer({ key: 'member', reducer }))
@withRouter
@connect(({ member }) => ({ ...member }), { memberList })
export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      dataSource: getData(),
    };
    console.log(props);
  }

  handlePagination = (current) => {
    this.setState({
      current,
    });
  };

  renderCatrgory = (value) => {
    return (
      <Balloon
        align="lt"
        trigger={<div style={{ margin: '5px' }}>{value}</div>}
        closable={false}
        style={{ lineHeight: '24px' }}
      >
        青霉素是抗菌素的一种，是能破坏细菌的细胞壁并在细菌细胞的繁殖期起杀菌作用的一类抗生素
      </Balloon>
    );
  };

  renderState = (value) => {
    return (
      <div style={styles.state}>
        <span style={styles.circle} />
        <span style={styles.stateText}>{value}</span>
      </div>
    );
  };

  renderOper = () => {
    return (
      <div style={styles.oper}>
        <Icon type="edit" size="small" style={styles.editIcon} />
      </div>
    );
  };

  componentDidMount() {
    this.props.memberList();
  }

  render() {
    const { lists } = this.props;
    return (
      <div style={styles.tableContainer}>
        <Table
          dataSource={lists}
          hasBorder={false}
          className="custom-table"
        >
          <Table.Column title="学生" dataIndex="sname" align="center" />
          <Table.Column title="手机号" dataIndex="mobile" />
          <Table.Column title="七鱼呼叫" dataIndex="call_number" />
          <Table.Column title="最近拨打状态" dataIndex="conn_show" />
          <Table.Column title="最近拨打时间" dataIndex="last_dial_up" />
          <Table.Column title="注册时间" dataIndex="create_time_show" />
          <Table.Column title="预约课时间" dataIndex="ty_lsn_time" />
          <Table.Column title="设备类型" dataIndex="device" />
          <Table.Column title="操作" cell={this.renderOper} />
        </Table>
        <Pagination
          style={styles.pagination}
          current={this.state.current}
          onChange={this.handlePagination}
        />
      </div>
    );
  }
}

const styles = {
  tableContainer: {
    background: '#fff',
    paddingBottom: '10px',
  },
  pagination: {
    margin: '20px 0',
    textAlign: 'center',
  },
  editIcon: {
    color: '#999',
    cursor: 'pointer',
  },
  circle: {
    display: 'inline-block',
    background: '#28a745',
    width: '8px',
    height: '8px',
    borderRadius: '50px',
    marginRight: '4px',
  },
  stateText: {
    color: '#28a745',
  },
};
