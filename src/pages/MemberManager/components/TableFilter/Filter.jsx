import React, { Component } from 'react';
import { Button, DatePicker, Select, Input } from '@alifd/next';

import './Filter.scss';

export default class TableFilter extends Component {
  static displayName = 'TableFilter';

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="tableFilter">
        <div className="filterItem">
          <label>学生信息</label>
          <Input placeholder="请输入学员ID/手机号" />
        </div>
        <div className="filterItem">
          <label >最近拨打状态</label>
          <Select>
            <Select.Option value="all">全部</Select.Option>
            <Select.Option value="call">拨打接听</Select.Option>
            <Select.Option value="unCall">拨打未接</Select.Option>
          </Select>
        </div>
        <div className="filterItem">
          <label >注册时间</label>
          <DatePicker />
        </div>
        <div className="filterItem">
          <label >预约课时间</label>
          <DatePicker />
        </div>
        <div className="filterItem">
          <label >设备类型</label>
          <Select>
            <Select.Option value="all">全部</Select.Option>
            <Select.Option value="ipad">Ipad</Select.Option>
            <Select.Option value="windows">Windows</Select.Option>
            <Select.Option value="mac">Mac</Select.Option>
          </Select>
        </div>
        <div className="spacer" />
        <Button type="primary" className="submitBotton">
          查询
        </Button>
        <Button type="primary" className="submitBotton">
          导入
        </Button>
      </div>
    );
  }
}
