import React, {useState} from 'react';
import './App.css';

import NewMemberForm, {MemberInfo} from "./components/Form"

function App() {
  const [members, setMember] = useState([
    {
      id: 0,
      membername: "Gingerbread Snap",
      email: "theginger@gingery.com",
      role: "UX Developer"
    }
  ])

  

  const addNewMember = newMember => {
    const newOne = {
      id: Date.now(),
      name: newMember.membername,
      email: newMember.email,
      role: newMember.role
    };
    setMember([...members, newOne]);
  }

  return (
    <div className="teamMember">
      <div className="temMemberform">
      <h1>Join my Team!</h1>
        <NewMemberForm addNewMember={addNewMember}/>
      </div>
      <div className="temMemberDisplay">
        <MemberInfo members={members}/>
      </div>  
    </div>
  );
}

export default App;
