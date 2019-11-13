import React, {useState} from "react"

export default function NewMemberForm(props){

    const [memberData, setMemberData] = useState({
        name: '',
        email: '',
        role: ''
    })

    const inputChanges = event => {
        setMemberData({
            ...memberData, 
            [event.target.name]: event.target.value,
        })
    }

    const formSubmission = event =>{
        event.preventDefault();
        props.addNewMember(memberData);
        setMemberData({name: "", email: "", role:""})
    }
    return (
        <form onSubmit={formSubmission}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" onChange={inputChanges}/>
            <label htmlFor="email" >Email</label>
            <input id="email" type="text" onChange={inputChanges}/>
            <label htmlFor="email" onChange={inputChanges}>Role</label>
            <select id="role" name="role" onChange={inputChanges}>
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
                    <p>{person.name}</p>
                    <h3>Email Address</h3>
                    <p>{person.email}</p>
                    </div>
                ))
            }
        </div>
    )
}