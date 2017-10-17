import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SimulateAudioContain from '../SimulateAudioContain';
import CloseTheDomByClickBlankAreaContain from '../CloseTheDomByClickBlankContain';
import './index.less';

class Structure extends Component {
  state = {
    num: 1,
  };

  // 组件目录单列分布，页面有截图，功能说明和点击测试按钮，点击测试可以弹出效果
  render() {
    return (
      <div className="structure_contain">
        <h2 className="structure_title">组件目录</h2>
        <div>
          <SimulateAudioContain />
          <CloseTheDomByClickBlankAreaContain />
        </div>
      </div>
    );
  }
}

export default Structure;
