import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

class App extends Component {

  state = {
    users: [
      { userName: 'Max', age: 28 },
      { userName: 'Manu', age: 29 },
    ],
    otherState: 'some other value'
  };

  userNameChangeHandler = (event, number) => {
    const tempUsers = [...this.state.users];
    tempUsers[number] = {userName: event.target.value, age: this.state.users[number].age};
    this.setState({
      users: tempUsers
    });
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <div>
        {this.state.users.map((user, index) => 
          <div className='Card' key={'div'+index}>
            <UserOutput
            key={index+'userOutput'}
            userName={this.state.users[index].userName}
            age={this.state.users[index].age}
            ></UserOutput>

            <UserInput
            key={index+'userInput'}
            userName={this.state.users[index].userName}
            changed={(e)=> this.userNameChangeHandler(e, index)}
            ></UserInput>
          </div>
        )}
        </div>
      </div>

    );
  }
}

export default App;
