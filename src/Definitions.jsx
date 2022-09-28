import React from 'react';

// const definitions = [
//   { dt: 'one', dd: 'two' },
//   { dt: 'another term', dd: 'another description' },
// ];

export default class Definitions extends React.Component {
  renderDefs () {
    return (
      <>
        {this.props.data.map((item, index) => (
          <React.Fragment key={index}>
            <dt>{item.dt}</dt>
            <dd>{item.dd}</dd>
          </React.Fragment>
        ))}
      </>
    );
  }

  render () {
    return (this.props.data.length !== 0) ? <dl>{this.renderDefs()}</dl> : null;
  }
}
