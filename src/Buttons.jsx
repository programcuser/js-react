import React from 'react'; // , { useEffect }
import { useImmer } from 'use-immer';
import cn from 'classnames';

const Buttons = (props) => {
  const [counters, updateCounters] = useImmer({
    count: props.count,
    currentButton: -1,
    countersStates: Array(props.count).fill(0),
  });

  const incCounter = (id) => (_event) => {
    updateCounters((currState) => {
      currState.currentButton = id;
      currState.countersStates[id] += 1;
    });
  }

  return (
    <React.Fragment>
      {
        counters.countersStates.map((cnt, ind) => {
          // console.log(counters.countersStates);
          const btnClass = cn('btn', {
            'btn-primary': counters.currentButton !== ind,
            'btn-success': counters.currentButton === ind,
            'm-1': true,
          });
          return <button key={ind} className={btnClass} type='button' onClick={incCounter(ind)}>{cnt}</button>;
        })
      }
    </React.Fragment>
  );
};

Buttons.defaultProps = {
  count: 3,
};

export default Buttons;
