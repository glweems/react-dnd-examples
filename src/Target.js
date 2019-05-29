import React, { Component } from 'react';

import { DropTarget } from 'react-dnd';
import { lighten } from 'polished';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    monitor: monitor.getItem()
  };
}

class Target extends Component {
  render() {
    const { connectDropTarget, hovered, item } = this.props;

    const targetStyle = {
      height: '100px',
      textAlign: 'center',
      backgroundColor: !hovered ? '#ff3860' : lighten(0.1, '#ff3860')
    };

    return connectDropTarget(
      <div className="target box has-text-white" style={targetStyle} />
    );
  }
}

export default DropTarget('item', {}, collect)(Target);
