import React, {useState} from "react"

export function NewMemberForm(){
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" />
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="email"/>
            <label htmlFor="email">Role</label>
            <select id="role" name="role">
                <option>User Experience Designer</option>
                <option>User Interface Developer</option>
                <option>Front End Engineer</option>
                <option>Back End Engineer</option>
                <option>Project Manager</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}

export function MemberInfo(props){
    return(
        <div className="memberInfo">
            <h3>Name</h3>
            <p></p>
            <h3>Email Address</h3>
            <p></p>
            <h3>Role</h3>
        </div>
    )
}