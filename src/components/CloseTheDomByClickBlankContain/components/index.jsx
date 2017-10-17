import React, { Component } from 'react';
import './index.less';

class CloseTheDomByClickBlankArea extends Component {
  state = {
    openCurrentArea: true,
  };

  componentDidMount() {
    // 点击blank_area区域，关闭current_area面板
    this.blankAreaElem.addEventListener('click', this.handleClickCloseCurrentArea.bind(this));
  }

  handleClickCloseCurrentArea() {
    // 当界面上渲染出内部面板时，可执行如下操作（若无此判断条件，点击打开面板按钮区域，就会先触发如下操作，再触发handleClickOpenCurrentArea函数）
    if (document.body.contains(this.currentAreaElem)) {
      // 点击面板以外的部分（灰色区域以内，面板区域以外），就关闭面板
      if (this.blankAreaElem.contains(window.event.target)
        && !this.currentAreaElem.contains(window.event.target)
      ) {
        this.setState({
          openCurrentArea: false,
        })
      }
    }
  }

  // 点击"打开面板"按钮，打开面板
  handleClickOpenCurrentArea() {
    this.setState({
      openCurrentArea: true,
    })
  }

  render() {
    return (
      <div
        className="blank_area"
        ref={(r) => {
          this.blankAreaElem = r;
        }}
      >
        <a
          role="button"
          tabIndex="0"
          className="btn_open_current_area"
          onClick={this.handleClickOpenCurrentArea.bind(this)}
        >
          <p className="btn_open_current_area_text">打开面板</p>
        </a>
        {
          this.state.openCurrentArea
          &&
          <div
            className="current_area"
            ref={(r) => {
              this.currentAreaElem = r;
            }}
          >
            <p className="current_area_text">点击旁边灰色区域关闭当前面板</p>
          </div>
        }
      </div>
    );
  }
}

export default CloseTheDomByClickBlankArea;
