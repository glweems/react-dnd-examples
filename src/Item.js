import React, { Component } from 'react';

import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag(props) {
    console.log('dragging');
    return props.item;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    return props.handleDrop(props.item.id);
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
};

class Item extends Component {
  render() {
    const { isDragging, connectDragSource, item } = this.props;

    return connectDragSource(
      <a className="list-item">
        <span>{item.name}</span>
      </a>
    );
  }
}

export default DragSource('item', itemSource, collect)(Item);
