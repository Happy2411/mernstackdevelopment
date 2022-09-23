import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const UserManager = () => {
    
    const [userList, setUserList] = useState([]);

    const getDataFromBackend = async () => {
        
        const response = await fetch('http://localhost:5000/user/getall');

        const data = await response.json();

        console.log(data);
        setUserList(data);
    };

    const deleteUser = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/user/delete/'+id, {
            method : 'DELETE'
        });

        console.log(res.status);
        getDataFromBackend();
        toast.success('User Deleted 😎');

    }

    useEffect(() => {
      getDataFromBackend();
    }, []);

    const displayUsers = () => {

        return <table className='table table-striped table-light'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>

            <tbody>
                {
                    userList.map( (user) => (
                        <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => { deleteUser(user._id) }} >
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                            <td>
                                <button className='btn btn-primary'>
                                    <i className="fas fa-pen"></i>
                                </button>
                            </td>
                        </tr>
                    ) )
                }
            </tbody>

        </table>

    }

  return (
    <div className='container'>
        <h1 className='text-center'>User Manager</h1>
        <hr />
        {displayUsers()}
    </div>
  )
}

export default UserManager;