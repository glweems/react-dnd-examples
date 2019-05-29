import React, { Component } from 'react';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';

import arrayMove from 'array-move';
import { render } from 'react-dom';

const SortableItem = sortableElement(({ value }) => (
  <a className="list-item">{value}</a>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <div className="list is-hoverable">{children}</div>;
});

class SortableList extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex)
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <SortableContainer onSortEnd={this.onSortEnd}>
        {items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </SortableContainer>
    );
  }
}

export default SortableList;
