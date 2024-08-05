import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function Users() {
    const baseUrl = "https://reqres.in/";
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);
    const userForm = useRef(null)
    const [isUserAdded, addUser] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(baseUrl + 'api/users?page=2');
                setData(response.data.data);
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, [response]);

    const saveUser = async (e) => {
        e.preventDefault();
        const form = userForm.current
        if (form['name'].value && form['job'].value) {
            let reqJson = {
                'name': `${form['name'].value}`,
                'job': `${form['job'].value}`
            }
            try {
                const response = await axios.post(baseUrl + 'api/users', reqJson)
                setResponse(response.name);
                addUser(false)
            } catch (err) {
                setError(err)
            }
        }
    }

    function onClickAddUser() {
        addUser(true)
    }


    return (
        <div>
            <button className='btn btn-primary me-5 mt-2' style={{ float: "right" }} onClick={onClickAddUser}>Add User</button>
            <div className='row w-100 ps-5'>
                {data.map(user => (
                    <div className='mt-3 col-md-2' key={user.id}>
                        <section className='col d-grid'>
                            <div className="card--badge">{user.id}</div>
                            <img className='card--image' src={user.avatar} alt={user.first_name + '' + user.last_name} />
                            <small className='card--text'>{user.first_name + '' + user.last_name}</small>
                            <small className='card--text'>{user.email}</small>
                        </section>
                    </div >
                ))}
            </div>
            {isUserAdded &&
                <form className='mt-5 d-grid justify-content-center' ref={userForm} onSubmit={saveUser}>
                    <label>Name</label>
                    <input className='ms-2' type='text' name="name" />
                    <label>Job</label>
                    <input className='ms-2 mt-1' type='text' name="job" />
                    <button className='btn btn-secondary w-50 mt-1 ms-5'>Save</button>
                </form>
            }
        </div>
    );
}

export default Users;
