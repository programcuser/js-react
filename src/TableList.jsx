import React from 'react'; // , { useEffect }
import Table from 'react-bootstrap/Table';
import { useImmer } from 'use-immer';


const TableList = (props) => {
  // const [sortAsc, setSortAsc] = React.useState('none');
  // const [sortDesc, setSortDesc] = React.useState('none');
  const [state, updateState] = useImmer({
    data: props.list,
    prevKey: 'none',
    sorts: {
      asc: 'none',
      desc: 'none',
    }
  });

  const sortFunction = (key, sortObj) => (obj1, obj2) => {
    if (sortObj.desc === 'none') {
      if (Number.isInteger(obj1[key])) {
        return Math.sign(obj1[key] - obj2[key]);
      }
      return obj1[key].localeCompare(obj2[key]);
    } else if (sortObj.asc === 'none') {
      if (Number.isInteger(obj1[key])) {
        return Math.sign(obj2[key] - obj1[key]);
      }
      return obj2[key].localeCompare(obj1[key]);
    }
  };

  const setSort = (key) => (_event) => {
    updateState(prevState => {
      if (prevState.prevKey !== key) {
        prevState.sorts.asc = key;
        prevState.sorts.desc = 'none';
      } else {
        if (prevState.sorts.asc === 'none') {
          prevState.sorts.asc = key;
          prevState.sorts.desc = 'none';
        } else if (prevState.sorts.desc === 'none') {
          prevState.sorts.desc = key;
          prevState.sorts.asc = 'none';
        }
      }
      prevState.prevKey = key;
    });

    updateState(prevState => {
      prevState.data = prevState.data.sort(sortFunction(key, state.sorts));
    });
  };

  const list = state.data;
  const listEntries = list.map((obj) => Object.entries(obj));
  const listKeys = Object.keys(list[0] ?? []);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          { listKeys.map((key, index) => <th key={index} onClick={setSort(key)}>{key}</th>) }
        </tr>
      </thead>
      <tbody>
        { listEntries.map((currEntrie, index1) => (
          <tr key={index1}>
            { currEntrie.map(([key, value], index2) => <td key={index2}>{value}</td>)}
          </tr>
        )) }
      </tbody>
    </Table>
  );
};

export default TableList;
