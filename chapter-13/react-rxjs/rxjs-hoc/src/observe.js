import React from 'react';

const observe = (WrappedComponent, observableFactory, defaultState) => {
  return class extends React.Component {
    constructor() {
      super(...arguments);
      this.state = defaultState;
      this.props$ = observableFactory(this.props, this.state);
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />
    }

    componentWillUnmount() {
      this.subscription.unsubscribe();
    }

    componentDidMount() {
      this.subscription = this.props$.subscribe(value => this.setState(value));
    }
  };
};

export default observe;
