import React from 'react';
import Item from './ItemNew.jsx';

export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: [],
      activeTasks: [],
      finishedTasks: [],
      currentTask: '',
    };
  }

  componentDidMount() {
    // axios.get('/tasks').then((res) => {
    //   const actTasks = res.data.filter((task) => task.state === 'active');
    //   const finTasks = res.data.filter((task) => task.state === 'finished');

      this.setState({
        tasks: [],
        activeTasks: [],
        finishedTasks: [],
        currentTask: '',
      })
    // });
    
  };

  handleChange = (event) => {
    this.setState({ currentTask: event.target.value });
  };

  handleSubmit = (event) => {  //async
    event.preventDefault();
    // const res = await axios.post('/tasks', { text: this.state.currentTask });

    this.setState((state, _props) => {
      const newTask = { id: 0, text: state.currentTask, state: 'active' };
      if (state.tasks.length !== 0) {
        newTask.id = state.tasks[0].id + 1;
      }
      const newTasks = [ newTask, ...state.tasks ];

      const actTasks = newTasks.filter((task) => task.state === 'active');
      const finTasks = newTasks.filter((task) => task.state === 'finished');

      return {
        tasks: newTasks,
        activeTasks: actTasks,
        finishedTasks: finTasks,
        currentTask: '',
      };
    });
  };

  changeTaskState = (taskObj) => () => {  // sync
    // let answer;
    // if (taskObj.state === 'active') {
    //   answer = await axios.patch(`/tasks/:${taskObj.id}/finish`);
    // } else if (taskObj.state === 'finished') {
    //   answer = await axios.patch(`/tasks/:${taskObj.id}/activate`);
    // }

    const copyTask = { ...taskObj };
    copyTask.state = copyTask.state === 'active' ? 'finished' : 'active';

    const filteredTasks = this.state.tasks.filter(task => task.id !== taskObj.id);
    const newTasks = [ ...filteredTasks, copyTask ];

    const actTasks = newTasks.filter((task) => task.state === 'active');
    const finTasks = newTasks.filter((task) => task.state === 'finished');

    this.setState({
      tasks: newTasks,
      activeTasks: actTasks,
      finishedTasks: finTasks,
    })
  };

  renderAciveTasks() {
    return (
      <div className='todo-active-tasks'>
        {this.state.activeTasks.map(task => <Item key={task.id} itemObj={task} onClick={this.changeTaskState} />)}
      </div>
    );
  };

  renderFinishedTasks() {
    return (
      <div className='todo-finished-tasks'>
        {this.state.finishedTasks.map(task => <Item key={task.id} itemObj={task} onClick={this.changeTaskState} />)}
      </div>
    );
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className='mb-3'>
          <form className='todo-form form-inline mx-3' onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <input type='text' required className='form-control mr-3' placeholder='I am going...' onChange={this.handleChange} value={this.state.currentTask} />
            </div>
            <button type='submit' className='btn btn-primary'>add</button>
          </form>
        </div>
        {this.state.activeTasks.length !== 0 ? this.renderAciveTasks() : null}
        {this.state.finishedTasks.length !== 0 ? this.renderFinishedTasks() : null}
      </div>
    );
  }
}




/*
В этом упражнении необходимо реализовать записную книжку, которая взаимодействует с бекендом по следующим урлам:

    GET /tasks - получить список задач.
        Формат ответа - [{"id":1,"text":"asdf","state":"finished"},{"id":2,"text":"asdasd","state":"active"}]
    POST /tasks - создать новую задачу.
        Формат запроса - {"text": "new task"}
        Формат ответа - {"id":4,"text":"new task","state":"active"}
    PATCH /tasks/:id/finish - завершить задачу.
        Формат ответа - {"id":1,"text":"asdf","state":"finished"}
    PATCH /tasks/:id/activate - переоткрыть завершенную задачу - {"id":1,"text":"asdf","state":"active"}

Начальный HTML:

<div>
  <div class="mb-3">
    <form class="todo-form form-inline mx-3">
      <div class="form-group">
        <input type="text" value="" required="" class="form-control mr-3" placeholder="I am going...">
      </div>
      <button type="submit" class="btn btn-primary">add</button>
    </form>
  </div>
</div>

HTML после того как добавлены последовательно три задачи "first task", "second task" и "another task".

<div>
  <div class="mb-3">
    <form class="todo-form form-inline mx-3">
      <div class="form-group">
        <input type="text" value="" required="" class="form-control mr-3" placeholder="I am going...">
      </div>
      <button type="submit" class="btn btn-primary">add</button>
    </form>
  </div>
  <div class="todo-active-tasks">
    <div class="row">
      <div class="col-1">3</div>
      <div class="col">
        <a href="#" class="todo-task">another task</a>
      </div>
    </div>
    <div class="row">
      <div class="col-1">2</div>
      <div class="col">
        <a href="#" class="todo-task">second task</a>
      </div>
    </div>
    <div class="row">
      <div class="col-1">1</div>
      <div class="col">
        <a href="#" class="todo-task">first task</a>
      </div>
    </div>
  </div>
</div>

На последнюю добавленную был совершен клик, который перевел задачу в выполненные:

<div>
  <div class="mb-3">
    <form class="todo-form form-inline mx-3">
      <div class="form-group">
        <input type="text" value="" required="" class="form-control mr-3" placeholder="I am going...">
      </div>
      <button type="submit" class="btn btn-primary">add</button>
    </form>
  </div>
  <div class="todo-active-tasks">
    <div class="row">
      <div class="col-1">2</div>
      <div class="col">
        <a href="#" class="todo-task">second task</a>
      </div>
    </div>
    <div class="row">
      <div class="col-1">1</div>
      <div class="col">
        <a href="#" class="todo-task">first task</a>
      </div>
    </div>
  </div>
  <div class="todo-finished-tasks">
    <div class="row">
      <div class="col-1">3</div>
      <div class="col">
        <s><a href="#" class="todo-task">another task</a></s>
      </div>
    </div>
  </div>
</div>

src/TodoBox.jsx

Реализуйте компонент <TodoBox>.

Первоначальная подгрузка задач с сервера должна происходить сразу после монтирования компонента в DOM.
src/Item.jsx

Реализуйте компонент <Item> отвечающий за вывод конкретной записи.
Подсказки

    Для генерации урлов в файле routes.js созданы специальные хелперы


*/
