import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const name = 'Mike Perez';
// const element = <h1>Hello, {name}</h1>;

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Mike',
  lastName: 'Perez',
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App1() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahel" />
      <Welcome name="Edite" />
    </div>
  );
}

const element = <Welcome name="Sara" />;
// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// function tick() {
//   const element1 = (
//     <div>
//       <h1>Hello, World</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element1,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);
function App2() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
