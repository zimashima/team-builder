import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [member, setMember] = useState([])

  const addNewMember = newMember => {
    const newOne = {
      name: newMember.name,
      email: newMember.email,
      role: newMember.role
    };
    setMember([...member, newOne]);
  }

  return (
    <div className="teamMemberList">
      <h1>Meet my Team!</h1>

    </div>
  );
}

export default App;
