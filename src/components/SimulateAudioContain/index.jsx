import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SimulateAudio from './components';
import './index.less';

class SimulateAudioContain extends Component {
  // static propTypes = {
  //   num: PropTypes.string,
  // };
  //
  // static defaultProps = {
  //   num: '',
  // };

  render() {
    return (
      <div className="simulateAudioContain">
        <p className="simulateAudioContain_title">模拟音乐播放器</p>
        <div className="simulateAudioContain_show">
          <SimulateAudio />
        </div>
        <div className="simulateAudioContain_introduce">
          <div className="simulateAudioContain_function_introduce">

          </div>
          <a
            tabIndex="0"
            role="button"
            className="simulateAudioContain_code_introduce"
          >
            <p>代码介绍</p>
          </a>
        </div>
      </div>
    );
  }
}

export default SimulateAudioContain;
