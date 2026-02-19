import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
const Update = () => {

    const navigate = useNavigate();

    let [data,setData] = useState({id:'',name:'',url:''});
    let {id} = useParams();
    useEffect(()=>{
        axios.get('https://bookmarkapi-110o.onrender.com/sites/'+id)
        .then((res)=>{
            setData(res.data)
        })  
    },[])

    let handleSubmit = (e)=>{
        e.preventDefault();

        axios.put('https://bookmarkapi-110o.onrender.com/sites/'+id,data)
        .then(()=>{
            alert('Data Updated Successfully!!!')
            navigate('/')
        })
    }

    let handleChnage = (e)=>{
        let {name, value} = e.target;

        setData({...data,[name]:value})
    }

  return (

    <>
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="id">ID</label>
                <input type="text" readOnly name='id' value={data.id} onChange={handleChnage} />
            </div>
            <div className='form-group'>
                <label htmlFor="name">Site</label>
                <input type="text" name='name' value={data.name} onChange={handleChnage}  />
            </div>
            <div className='form-group'>
                <label htmlFor="url">Site Url</label>
                <input type="url" name='url' value={data.url} onChange={handleChnage} />
            </div>
            <div className='form-group'>
                <button type='submit'>Update Bookmark</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Update