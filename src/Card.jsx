import React from 'react';

// export default class Card extends React.Component {
//   render() {
//     return  <div className="card">
//               <div className="card-body">
//                 <h4 className="card-title">Card title</h4>
//                 <p className="card-text">Some quick example text to build on the card</p>
//                 <button type="button" className="btn btn-primary">Go somewhere</button>
//               </div>
//             </div>
//   }
// }

export default class Card extends React.Component {
  render () {
    return  <div className="card">
              <div className="card-body">
                <h4 className="card-title">{this.props.title}</h4>
                <p className="card-text">{this.props.text}</p>
              </div>
            </div>
  }
}

Card.defaultProps = {
  title: 'default title',
  text: 'default text',
};
