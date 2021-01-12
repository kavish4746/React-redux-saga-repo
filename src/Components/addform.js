import axios from 'axios';
import React, { Component,useState,useEffect } from 'react'
import { Link, NavLink,useHistory } from "react-router-dom";
import { connect } from 'react-redux'

import { userAddRequest } from '../Redux/Actions/user_Add';

const Addform=(props)=>{
    let history=useHistory();
    const [user,setUser]=useState({
        name:'',
        username:'',
        email:'',
        address:'',
        phone:'',
        website:'',
    })

    const onInputchange=(e)=>{
        let fieldname=e.target.name;
        setUser({...user,[fieldname]:e.target.value})
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        props.userAddRequest(user);
        history.push('/');
    }

    const onclickcancel=(e)=>{
        history.push('/');
    }
    return(
        <div className="container">
            <br></br>
            <br></br>
            <div className="w-75 mx-auto shadow p-5"> 
                <h4>Add User Form</h4>
                <form onSubmit={e=>onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control"  
                            placeholder="Enter Name" 
                            name="name"
                            value={user.name}
                            onChange={e=>onInputchange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control"  
                            placeholder="Enter User Name" 
                            name="username"
                            value={user.username}
                            onChange={e=>onInputchange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="email" 
                            className="form-control"  
                            placeholder="Enter Email id" 
                            name="email"
                            value={user.email}
                            onChange={e=>onInputchange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                            className="form-control"  
                            placeholder="Enter Address" 
                            name="address"
                            value={user.address}
                            onChange={e=>onInputchange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="number"
                            className="form-control"  
                            placeholder="Enter Mobile number" 
                            name="phone"
                            value={user.phone}
                            onChange={e=>onInputchange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"  
                            placeholder="Enter Website name" 
                            name="website"
                            value={user.website}
                            onChange={e=>onInputchange(e)}
                        />
                    </div>
                    <button type="submit"  class="btn btn-success">Add user</button> 
                    <button type="button" onClick={onclickcancel} class="btn btn-secondary">Cancel</button>
                    </form>
                    </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        user:state.addUserReducer.users,
        error:state.addUserReducer.error
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        userAddRequest:(user)=>{
            dispatch(userAddRequest(user));
        },
    }
}


export default connect(null,mapDispatchToProps)(Addform);