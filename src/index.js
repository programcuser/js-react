// import React from 'react';
import ReactDOM from 'react-dom/client';
// import Carousel from './Carousel';
import './index.css';
// import App from './App';
// import Hello from './Hello.jsx';
// import Card from './Card.jsx';
// import Definitions from './Definitions.jsx';
// import Progress from './Progress.jsx';
// import Alert from './Alert.jsx';
// import ListGroup from './ListGroup.jsx';
// import BtnGroup from './BtnGroup.jsx';
// import Carousel from './Carousel.jsx';
// import Collapse from './Collapse.jsx';
// import MyForm from './MyForm.jsx';
// import Component from './Component.jsx';
// import TodoBox from './TodoBox.jsx';
// import Card from './CardFucnt.jsx';
// import Component from './ComponentModal.jsx';
// import TodoBox from './TodoBoxNew.jsx';
// import MarkdownEditor from './MarkdownEditor.jsx';
// import FormPopup from './FormPopup.jsx';
// import BtnGroup from './BtnGroup2.jsx';
// import Buttons from './Buttons.jsx';
// import Notebook from './AppNotebook.jsx';
import TableList from './TableList.jsx';
import reportWebVitals from './reportWebVitals';

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);

// root.render(<Card />);
// const title = 'title 1';
// const text = 'text 1';
// root.render(<Card title={title} text={text} />);

// const definitions = [
//   { dt: 'one', dd: 'two' },
//   { dt: 'another term', dd: 'another description' },
// ];
// root.render(<Definitions data={definitions} />);

// root.render(<Progress percentage={40} />);

// root.render(<Alert type='warning' text='what is love?' />);

// const vdom = <ListGroup>
//   <p>one</p>
//   <p>two</p>
// </ListGroup>;
// root.render(vdom);

// root.render(<BtnGroup />);

// const images = [
//   './logo192.png',
//   './logo512.png',
// ];
// root.render(<Carousel images={images} />);

// const text = 'collapse me';
// root.render(<Collapse text={text} opened={false} />);

// root.render(<MyForm />);

// root.render(<Component />);

// root.render(<TodoBox />);

// root.render(<Card>
//     <Card.Body>
//       <Card.Title>Title</Card.Title>
//       <Card.Text>Text</Card.Text>
//     </Card.Body>
//   </Card>
// );

// root.render(<Component />);

// root.render(<TodoBox />);

// root.render(<MarkdownEditor onContentChange={console.log} />);

// root.render(<FormPopup />);

// root.render(<BtnGroup />);

// root.render(<Buttons />); // count={5}

// root.render(<Notebook />);

const list = [
  { id: 1, firstName: 'Amaya', lastName: 'Torphy', jobTitle: 'Legacy Group Facilitator', email: 'Rosie_Mann@gmail.com' },
  { id: 2, firstName: 'Weston', lastName: 'Huel', jobTitle: 'Regional Data Agent', email: 'Tristian_Vandervort68@yahoo.com' },
  { id: 3, firstName: 'Bridgette', lastName: 'Corwin', jobTitle: 'Internal Usability Officer', email: 'Sherman.Purdy@hotmail.com' },
];
root.render(<TableList list={list} />); 

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
