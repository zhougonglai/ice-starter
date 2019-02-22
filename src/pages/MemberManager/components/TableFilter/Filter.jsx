import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, DatePicker, Select, Input } from '@alifd/next';
import { memberAdd, memberModel, memberList } from '../../actions';

import './Filter.scss';

const is_coon_options = [
  { id: -1, value: '未打' },
  { id: 1, value: '拨打未接' },
  { id: 2, value: '拨打接通' },
  { id: 3, value: '无效资源' },
];

const device_options = [
  { id: 1, value: 'iPad' },
  { id: 2, value: 'Windows' },
  { id: 3, value: 'Mac' },
  { id: 0, value: '其他' },
];

@connect(({ member }) => ({ ...member }), { memberAdd, memberModel, memberList })
export default class TableFilter extends Component {
  static displayName = 'TableFilter';

  constructor(props) {
    super(props);
    this.state = {
      std: '',
      is_conn: '',
      create_time: '',
      exp_time: '',
      divice: '',
    };
  }

  onChange = (file, value) => {
    this.setState({
      [file]: value,
    });
  }

  memberList = () => {
    this.props.memberList();
  }

  componentWillMount() {
    this.props.memberModel();
  }

  render() {
    const { std, is_conn, create_time, exp_time, divice } = this.state;
    return (
      <div id="tableFilter">
        <div className="filterItem">
          <Input
            name="std"
            value={std}
            placeholder="请输入学员ID/手机号"
            label="学生信息"
            onChange={e => this.onChange('std', e)}
            trim
            hasClear
          />
        </div>
        <div className="filterItem">
          <Select
            name="is_conn"
            value={is_conn}
            label="最近拨打状态"
            onChange={e => this.onChange('is_conn', e)}
            hasClear
          >
            {
              is_coon_options.map(({ id, value }) =>
                (<Select.Option value={id} key={id}>
                  {value}
                </Select.Option>))
            }
          </Select>
        </div>
        <div className="filterItem">
          <DatePicker
            name="create_time"
            value={create_time}
            label="注册时间"
            onChange={e => this.onChange('create_time', e)}
            hasClear
          />
        </div>
        <div className="filterItem">
          <DatePicker
            name="exp_time"
            value={exp_time}
            label="预约课时间"
            onChange={e => this.onChange('exp_time', e)}
            hasClear
          />
        </div>
        <div className="filterItem">
          <Select
            name="divice"
            value={divice}
            label="设备类型"
            onChange={e => this.onChange('divice', e)}
            hasClear
          >
            {
              device_options.map(({ id, value }) =>
              (<Select.Option value={id} key={id}>
                {value}
              </Select.Option>))
            }
          </Select>
        </div>
        <div className="spacer" />
        <Button type="primary" className="submitBotton" onClick={this.memberList}>
          查询
        </Button>
        <Button type="primary" className="submitBotton">
          导入
        </Button>
      </div>
    );
  }
}
