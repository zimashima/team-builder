import React, {useState} from 'react';
import './App.css';

import NewMemberForm, {MemberInfo} from "./components/Form"

function App() {
  const [members, setMember] = useState([])

  

  const addNewMember = newMember => {
    const newOne = {
      name: newMember.name,
      email: newMember.email,
      role: newMember.role
    };
    setMember([...members, newOne]);
  }

  return (
    <div className="teamMemberList">
      <MemberInfo />
      <h1>Join my Team!</h1>
        <NewMemberForm addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
