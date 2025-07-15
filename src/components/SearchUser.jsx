import React, { useState } from 'react'
import UserNavBar from './UserNavBar'

const SearchUser = () => {
    const[input,changeInput]=useState(
            {id:""}
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
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Id</label>
                            <input type="text" className="form-control"  name='id' value={input.id} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>Search User</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchUser