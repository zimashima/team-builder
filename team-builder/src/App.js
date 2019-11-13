import React, {useState} from 'react';
import './App.css';

import {NewMemberForm} from "./components/Form"

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
      
      <h1>Join my Team!</h1>
        <NewMemberForm />
    </div>
  );
}

export default App;
