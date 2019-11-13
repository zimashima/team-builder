import React, {useState} from "react"

export default function NewMemberForm(props){

    const [memberData, setMemberData] = useState({
        membername: '',
        email: '',
        role: ''
    })

    const inputChanges = event => {
        setMemberData({
            ...memberData, 
            [event.target.name]: event.target.value
        })
    }

    const formSubmission = event =>{
        event.preventDefault();
        props.addNewMember(memberData);
        setMemberData({membername: "", email: ""})
    }
    return (
        <form onSubmit={formSubmission}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="membername" onChange={inputChanges} value={memberData.membername} />
          
            <label htmlFor="email" >Email</label>
            <input id="email" type="text" name="email" onChange={inputChanges} value={memberData.email} />
            
            <label htmlFor="role" onChange={inputChanges}>Role</label>
            <select id="role" name="role" onChange={inputChanges} value={memberData.value}>
                <option value="Default">Select your role</option>
                <option value="UX Designer">UX Designer</option>
                <option value="UI Developer Developer">UI Developer</option>
                <option value="Front End Engineer">Front End Engineer</option>
                <option value="Back End Engineer">Back End Engineer</option>
                <option value="Project Manager">Project Manager</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}

export function MemberInfo(props){
    return(
        <div className="memberList">
            {
                props.members.map((person, index) => (
                    <div className="teamMember" key={index}>
                    <h3>{person.role}</h3>
                    <h3>Name</h3>
                    <p>{person.membername}</p>
                    <h3>Email Address</h3>
                    <p>{person.email}</p>
                    </div>
                ))
            }
        </div>
    )
}