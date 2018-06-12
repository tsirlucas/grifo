import React from 'react';

export const StateProvider = (Component, initialState) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = initialState;
    }

    static get name() {
      return Component.name;
    }

    render() {
      return Component({...this.props, state: this.state, setState: this.setState.bind(this)});
    }
  };
