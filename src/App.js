import './App.css';

import React, { Component } from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Item from './Item';
import SortableList from './SortableList';
import Target from './Target';

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' }
    ]
  };

  deleteItem = id => {
    this.setState(prevState => {
      let items = prevState.items;
      const index = items.findIndex(item => item.id === id);
      items.splice(index, 1);
      return { items };
    });
    console.log(`Deleting item ${id}`);
  };
  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <section className="hero is-primary">
          <div className="hero-body container">
            <h1 className="title">React drag and drop examples</h1>
          </div>
        </section>
        <section className="container drag-to-delete">
          <div className="list is-hoverable">
            {items.map(item => (
              <Item
                key={item.id}
                item={item}
                className="list-item"
                handleDrop={id => this.deleteItem(id)}
              />
            ))}
          </div>
          <div>
            <Target />
            <h1>Drag to delete</h1>
          </div>
        </section>
        <section className="container drag-to-reorder">
          <SortableList />
          <div>
            <h6>Drag list items to reorder them!</h6>
          </div>
        </section>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
