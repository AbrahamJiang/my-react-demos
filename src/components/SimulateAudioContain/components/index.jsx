import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './index.less';

// 导入测试音频文件
const testMp3 = require('../../../statics/medias/test_audio.mp3');

class SimulateAudio extends Component {
  state = {
    testSound: false,
    soundTestPlayingBarLength: 0,
  };

  componentDidMount() {
    // 监听音频播放，模拟进度条随音量变化; 当音频播放完毕，重置testSound值
    this.audioElem.addEventListener('timeupdate', this.soundTestPlayingBarMove.bind(this));
  }

  // 点击测试扬声器：播放一段声音
  // 若无声音，则开启声音并设定testSound状态值为有声音true，若有声音，则反向设置
  onClickTestSound() {
    if (!this.state.testSound) {
      this.audioElem.play();
      this.setState({ testSound: true });
    } else {
      this.audioElem.pause();
      this.setState({ testSound: false });
    }
  }

  // 模拟'测试音效'进度条
  soundTestPlayingBarMove() {
    const durationTime = this.audioElem.duration;
    const currentTime = this.audioElem.currentTime;
    const currentBarLength = (currentTime / durationTime) * 100;
    this.setState({ soundTestPlayingBarLength: currentBarLength });

    // 如果测试音频播放完毕，则变更testSound状态值，从而变更文字
    if (this.audioElem.ended) {
      this.setState({ testSound: false });
      setTimeout(() => { this.setState({ soundTestPlayingBarLength: 0 }); }, 300);
    }
  }

  render() {
    const testSoundIcon = this.state.testSound ? 'test_sound_icon_play' : 'test_sound_icon_pause';
    const testSoundTips = this.state.testSound ? '暂停' : '播放';

    return (
      <div className="SimulateAudio_contain">
        <div className="sound_volume_test_contain">
          <p className="test_sound_text">点击“播放”试听音效：</p>
          <div className="test_sound_content">
            <a
              role="button"
              tabIndex="0"
              className="test_sound_btn"
              onClick={this.onClickTestSound.bind(this)}
            >
              <span className={testSoundIcon} />
              <audio
                ref={(r) => {
                  this.audioElem = r;
                }}
                src={testMp3}
              />
            </a>
            <p className="test_sound_tips">{testSoundTips}</p>
            <div className="test_sound_bar">
              <span
                className="test_sound_bar_playing"
                style={{
                  width: `${this.state.soundTestPlayingBarLength}%`,
                }}
              />
              <span
                className="test_sound_drag_ball"
                style={{
                  left: `${this.state.soundTestPlayingBarLength}%`,
                }}
              >
                <span />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimulateAudio;
