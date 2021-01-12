import axios from 'axios';
import React, { Component,useState,useEffect } from 'react'
import { Link, NavLink,useHistory,useParams } from "react-router-dom";
import { connect } from 'react-redux'

import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { fetchDataForUpdate,UpdateUserData  } from '../Redux/Actions/user_Edit_Actions'

const Editform=(props)=>{
    let history=useHistory();
    var {id}=useParams();
    const [user,setUser]=useState({
        name:'',
        email:'',
        address:'',
        id:null,
        phone:null,
        username:'',
        website:'' 
});
    
    const onInputchange=(e)=>{
        let fieldname=e.target.name;
        setUser({...props.userData,[fieldname]:e.target.value})  
        if(fieldname=='name')
            props.userData.name=e.target.value
        else if(fieldname=='address')
            props.userData.address=e.target.value
        else if(fieldname=='website')
            props.userData.website=e.target.value
        else if(fieldname=='username')
            props.userData.username=e.target.value
        else if(fieldname=='phone')
            props.userData.phone=e.target.value
        else if(fieldname=='email')
            props.userData.email=e.target.value
    }

    const onSubmit=async(e)=>{
         e.preventDefault();
        props.UpdateUserData(user);
        history.push('/');
    }

    useEffect(()=>{        
       loaduser();

    },[]);
    const loaduser=async()=>{
        props.fetchDataForUpdate(id);
    }
    const onclickcancel=(e)=>{
        history.push('/');
    }
    return props.isLoading ?(
        <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
    ):props.error!='' ?(
        <h2>Error</h2>
    ):
    (
        <div className="container">     
            <br></br>
            <br></br>
            <div className="w-75 mx-auto shadow p-5"> 
                <h4>Update User Form</h4>
                <form onSubmit={e=>onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control"  
                            placeholder="Enter Name" 
                            name="name"
                            value={props.userData.name}
                            onChange={e=>onInputchange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control"  
                            placeholder="Enter User Name" 
                            name="username"
                            value={props.userData.username}
                            onChange={e=>onInputchange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="email" 
                            className="form-control"  
                            placeholder="Enter Email id" 
                            name="email"
                            value={props.userData.email}
                            onChange={e=>onInputchange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                            className="form-control"  
                            placeholder="Enter Address" 
                            name="address"
                            value={props.userData.address}
                            onChange={e=>onInputchange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="number"
                            className="form-control"  
                            placeholder="Enter Mobile number" 
                            name="phone"
                            value={props.userData.phone}
                            onChange={e=>onInputchange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"  
                            placeholder="Enter Website name" 
                            name="website"
                            value={props.userData.website}
                            onChange={e=>onInputchange(e)}
                        />
                    </div>
                    <button type="submit"  class="btn btn-success">Update user</button> 
                    <button type="button" onClick={onclickcancel} class="btn btn-secondary">Cancel</button>
                    </form>
                    </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        isLoading:state.editUserReducer.loading,
        userData:state.editUserReducer.user,
        error:state.editUserReducer.error
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchDataForUpdate:(id)=>{
            dispatch(fetchDataForUpdate(id));
        },
        UpdateUserData:(user)=>{
            dispatch(UpdateUserData(user));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Editform);