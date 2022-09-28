import React from 'react';
import cn from 'classnames';

export default class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'none',
    };
  }

  activeLeftBtn = () => {
    this.setState(({ active }) => ({ active: 'left' }));
  };

  activeRightBtn = () => {
    this.setState(({ active }) => ({ active: 'right' }));
  };

  render () {
    const leftBtnClass = cn('btn', 'btn-secondary', 'left', {
      active: this.state.active === 'left',
    });
    const rightBtnClass = cn('btn', 'btn-secondary', 'right', {
      active: this.state.active === 'right',
    });

    return (
      <div className='btn-group' role='group'>
        <button type='button' className={leftBtnClass} onClick={this.activeLeftBtn}>Left</button>
        <button type='button' className={rightBtnClass} onClick={this.activeRightBtn}>Right</button>
      </div>
    );
  }
}
