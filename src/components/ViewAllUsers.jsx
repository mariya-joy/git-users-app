import React, { useEffect, useState } from 'react'
import UserNavBar from './UserNavBar'
import axios from 'axios'

const ViewAllUsers = () => {

const[isLoading,changeLoading]=useState(true)

    const[user,ChangeUser]=useState(
        []
    )
    const fetchData=()=>{
        axios.get("https://api.github.com/users").then(
            (response)=>{
                changeLoading(false)
                ChangeUser(response.data)
            }
        ).catch(
             (error) => {
                alert("Ooops!!!!!Something went wrong!!!!!" + error)
            }
        )
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <UserNavBar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div style={{ textAlign: "center", padding: "30px" }}>
                                    <h2> All Users</h2>
                                    <table border="1" cellSpacing="0" cellPadding="10" className="table table-bordered table-striped" style={{ margin: "0 auto", width: "80%" }}>
                                        <thead style={{ backgroundColor: "#f2f2f2" }}>
                                            <tr>
                                                
                                                <th>Login</th>
                                                <th>ID</th>
                                                <th>Node_Id</th>
                                                <th>Avatar_url</th>
                                                <th>Gravatar_id</th>
                                                <th>URl</th>
                                                <th>html_url</th>
                                                <th>Followers URL</th>
                                                <th>Following URL</th>
                                                <th>Gists Url</th>
                                                <th>Starred URL</th>
                                                <th>Subscriptions URL</th>
                                                <th>Organisations URL</th>
                                                <th>Repos URL</th>
                                                <th>Events URL</th>
                                                <th>Received Events Url</th>
                                                <th>Type</th>
                                                <th>User View Type</th>
                                                <th>Site Admin</th>
                                                
                                                

                                            </tr>
                                        </thead>
                                        {isLoading ? (<div class="d-flex align-items-center">
                                            <strong role="status">Loading...</strong>
                                            <div class="spinner-border ms-auto" aria-hidden="true"></div>
                                        </div>):(
                                            <tbody>
                                            {user.map(
                                                (value, index) => {
                                                    return (
                                                        <tr>
                                                            <td>{value.id}</td>
                                                            <td>{value.login}</td>
                                                            <td>{value.node_id}</td>
                                                            <td><img className='rounded-circle' src={value.avatar_url}  height="50px" alt="" /></td>
                                                            <td>{value.gravatar_id}</td>
                                                            <td>{value.url}</td>
                                                            <td>{value.html_url}</td>
                                                            <td>{value.followers_url}</td>
                                                            <td>{value.following_url}</td>
                                                            <td>{value.gists_url}</td>
                                                            <td>{value.starred_url}</td>
                                                            <td>{value.subscriptions_url}</td>
                                                            <td>{value.organizations_url}</td>
                                                            <td>{value.repos_url}</td>
                                                            <td>{value.events_url}</td>
                                                            <td>{value.received_events_url}</td>
                                                            <td>{value.type}</td>
                                                            <td>{value.user_view_type}</td>
                                                            <td>{value.site_admin ? <p className='text-success'>True</p> : <p className='text-danger'>False</p>}</td>
                                                        </tr>
                                                    )
                                                }
                                            )}
                                        </tbody>

                                        )}
                                        

                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewAllUsers