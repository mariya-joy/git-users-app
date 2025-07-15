import React, { useState } from 'react'
import UserNavBar from './UserNavBar'

const AddUser = () => {
    const[input,changeInput]=useState(
        {id:"",node_id:"",avatar_url:"",gravatar_id:"",url:"",html_url:"",followers_url:"",following_url:"",gists_url:"",starred_url:"",subscriptions_url:"",organizations_url:"",repos_url:"",events_url:"",received_events_url:"",type:"",user_view_type:""}
    )
    const inputHandler=(event)=>{
        changeInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
    }
  return (
    <div>
        <UserNavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Id</label>
                            <input type="text" className="form-control" name='id' value={input.id} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Node Id</label>
                            <input type="text" className="form-control" name='node_id' value={input.node_id} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Avatar URl</label>
                            <input type="text" className="form-control" name='avatar_url' value={input.avatar_url} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Gravatar Id</label>
                            <input type="text" className="form-control" name='gravatar_id' value={input.gravatar_id} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">URL</label>
                            <input type="text" className="form-control" name='url' value={input.url} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">HTML URL</label>
                            <input type="text" className="form-control" name='html_url' value={input.html_url} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Followers URL</label>
                            <input type="text" className="form-control" name='followers_url' value={input.followers_url} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Following URL</label>
                            <input type="text" className="form-control" name='following_url' value={input.following_url} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Gists URL</label>
                            <input type="text" className="form-control" name='gists_url' value={input.gists_url} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Starred URL</label>
                            <input type="text" className="form-control" name='starred_url' value={input.starred_url} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Subscriptions URL</label>
                            <input type="text" className="form-control" name='subscriptions_url' value={input.subscriptions_url} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Organizations URL</label>
                            <input type="text" className="form-control" name='organizations_url' value={input.organizations_url} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Repos URL</label>
                            <input type="text" className="form-control" name='repos_url' value={input.repos_url} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Events URL</label>
                            <input type="text" className="form-control" name='events_url' value={input.events_url} onChange={inputHandler} />
                        </div>
                         <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Received Events Url</label>
                            <input type="text" className="form-control" name='received_events_url' value={input.received_events_url} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Type</label>
                            <input type="text" className="form-control" name='type' value={input.type} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">User View Type</label>
                            <input type="text" className="form-control" name='user_view_type' value={input.user_view_type} onChange={inputHandler} />
                        </div>
                       
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>Add User</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser