import React from 'react';
import Popup from 'reactjs-popup';

const fields = {
  firstName: { value: 'Имя', type: 'text', ariaDescribedby: 'popup-1' },
  lastName: { value: 'Фамилия', type: 'text', ariaDescribedby: 'popup-2' },
  email: { value: 'Email', type: 'email', ariaDescribedby: 'popup-3' },
  password: { value: 'Пароль', type: 'password', ariaDescribedby: 'popup-4' },
};

export default class FormPopup extends React.Component {
  render () {
    const fieldsEntries = Object.entries(fields);
    // console.log(fieldsEntries);
  
    return (
      <div id="container" className="container m-3">
        <div className="col-5">
          <h1 className="my-4">Регистрация</h1>
          <form className="">
            {fieldsEntries.map(([ key, { value, type, ariaDescribedby } ]) => (
              <div key={ariaDescribedby} className="mb-3">
                <label className="form-label" htmlFor={key}>{value}</label>
                <Popup
                  trigger={
                    <input
                      aria-describedby={ariaDescribedby}
                      type={type}
                      id={key}
                      className="form-control"
                    />
                  }
                  position="right center"
                  on={['hover', 'focus']} >
                  <span>{key}</span>  
                </Popup>
              </div>
            ))}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

/*
const Tooltip = () => (  
  <Popup    
  trigger={open => (      
    <button classNameName="button">Trigger - {open ? 'Opened' : 'Closed'}</button>
  )}    position="right center"    
  closeOnDocumentClick  >   
  <span> Popup content </span>  
  </Popup>);


import React from 'react';
import Popup from 'reactjs-popup';
import Card from './Card';//
const POSITION_TYPES = [  
  'top left',  
  'top center',  
  'top right',  
  'right top',  
  'right center',  
  'right bottom',  
  'bottom left',  
  'bottom center',  
  'bottom right',  
  'left top',  
  'left center',  
  'left bottom',  
  'center center',
];
const ToolTipPositions = () => (  
  <div className="example-warper">    
  {POSITION_TYPES.map((position, i) => (      
    <Popup        
    key={`tp-${i}`}       
     trigger={          
       <button type="button" className="button">            
       {position}          
       </button>        
      }        
      position={position}        
      on={['hover', 'focus']}        
      arrow={position !== 'center center'}      
      >        
      <Card title={position} />      
      </Popup>    
      ))}  
      </div>);


import React from 'react';
import Popup from 'reactjs-popup';
const BoundedTooltip = () => (  
  <div    
  style={{ height: 200, width: 400, border: '1px solid red' }}    
  className="tooltipBoundary"  
  >    
  <Popup      
  trigger={        
    <button type="button" className="button">          
    Trigger 1        
    </button>      
  }      
  position={['top center', 'bottom right', 'bottom left']}      c
  loseOnDocumentClick      
  keepTooltipInside=".tooltipBoundary"    
  >      
  Tooltip content    
  </Popup>  
  </div>);
*/
