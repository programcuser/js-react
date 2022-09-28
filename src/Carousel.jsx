import React from 'react';
import cn from 'classnames';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  prevBtn = (event) => {
    event.preventDefault();

    this.setState(({ active }) => {
      if (active <= 0) {
        return { active: this.props.images.length - 1 };
      }

      return { active: active - 1 };
    });
  };

  nextBtn = (event) => {
    event.preventDefault();

    this.setState(({ active }) => {
      if (active >= (this.props.images.length - 1)) {
        return { active: 0 };
      }

      return { active: active + 1 };
    });
  };

  renderCarouselItems () {
    return (
      <React.Fragment>
        {this.props.images.map((imgPath, index) => {
          const carouselItemClass = cn('carousel-item', {
            active: this.state.active === index,
          });

          return (
            <div key={index} className={carouselItemClass}>
              <img alt='' className='d-block w-100' src={imgPath} />
            </div>
          );
        })}
      </React.Fragment>
    );
  }

  render () {
    return (
      <div id='carousel' className='carousel slide' data-ride='carousel'>
        <div className='carousel-inner'>
          {this.renderCarouselItems()}
        </div>
        <a className='carousel-control-prev' href='#carousel' role='button' data-slide='prev' onClick={this.prevBtn}>
          <span className='carousel-control-prev-icon'></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a className='carousel-control-next' href='#carousel' role='button' data-slide='next' onClick={this.nextBtn}>
          <span className='carousel-control-next-icon'></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    );
  }
}
