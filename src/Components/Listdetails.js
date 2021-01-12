import React, { Component,useState,useEffect } from 'react'
import axios from 'axios'
import { Link, NavLink,useHistory } from "react-router-dom";
import { connect } from 'react-redux'



import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { fetchData } from '../Redux/Actions/user_Actions';
import { deleteUser } from '../Redux/Actions/user_delete_Actions'


import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Listuser=(props)=>{
    let history=useHistory();
    const [users,setUser]=useState([]);

    useEffect(()=>{
        loaduser();
    },[]);
    const loaduser=async()=>{
        props.fetchData();
    }

    const onclickAdd=()=>{
        history.push("/adduser");
    }

    const onEdit=(user_id)=>{
        history.push(`/edituser/${user_id}`);
    }

    const onDelete=(user)=>{
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
             
                onClick: () => {
                        props.deleteData(user.id);
                    }
              },
              {
                label: 'No',
              }
            ]
          }); 
        
    }
    return props.isLoading ?(
        <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
    ):props.error!='' ?(
        <h2>Error</h2>
    ):
    (
        <div className="container">
                <br></br>
            <button type="button" onClick={onclickAdd} class="btn btn-success">Add New user</button> 
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Option</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.user.map((user,index)=>(
                            <tr key={index+1}>
                                <th scope="row" >{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                       
                                        <button onClick={()=>onDelete(user)} type="button" class="btn btn-danger">
                                            Delete
                                        </button>
                                        <button onClick={()=>onEdit(user.id)} type="button" class="btn btn-info">
                                            Edit
                                        </button>

                                    </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        isLoading:state.fetchDataReducer.loading,
        user:state.fetchDataReducer.user,
        error:state.fetchDataReducer.error
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchData:()=>{
            dispatch(fetchData());
        },
        deleteData:(id)=>{
            dispatch(deleteUser(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Listuser);