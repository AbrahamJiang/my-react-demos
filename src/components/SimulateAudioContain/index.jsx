import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SimulateAudio from './components';
import './index.less';

var getCode = (function(secureCode){
  secureCode = "0]Eal(eh&2";

  return secureCode
})();

// getCode;

class SimulateAudioContain extends Component {
  // static propTypes = {
  //   num: PropTypes.string,
  // };
  //
  // static defaultProps = {
  //   num: '',
  // };

  componentDidMount() {
    console.log(getCode);

    // console.log('a' !== ('a' && 'b'));
  }

  render() {
    return (
      <div className="simulateAudioContain">
        <p className="simulateAudioContain_title">模拟音乐播放器</p>
        <div className="simulateAudioContain_show">
          <SimulateAudio />
        </div>
        <div className="simulateAudioContain_introduce">
          <div className="simulateAudioContain_function_introduce">
            <p>介绍：</p>
            <p>——html提供audio音乐播放器，但样式简陋，不易更改，通常情况下采用css自行模拟</p>
            <p>描述：</p>
            <p>1.点击播放／暂停按钮实现相应功能：利用state改变样式；利用play(),pause()实现功能；</p>
            <p>2.模拟进度条：利用audio的属性，音乐总时长--duration，目前播放时间--currentTime来计算进度位置；
              利用addEventListener监听timeupdate事件，实时更新进度条；</p>
            <p>3.ref属性：react提供的属性，用于获取真实dom节点，提倡通过箭头函数中的回调函数来获取；</p>
          </div>
          <a
            tabIndex="0"
            role="button"
            className="simulateAudioContain_code_show"
          >
            <p className="simulateAudioContain_code_show_text">代码展示</p>
          </a>
        </div>
      </div>
    );
  }
}

export default SimulateAudioContain;
