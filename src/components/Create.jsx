import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    let [info, setInfo] = useState([])

    useEffect(()=>{
        axios.get('https://bookmark-data.onrender.com/sites')
        .then((res)=>{
            setInfo(res.data)
        })
    },[])

    let navigate = useNavigate()

    // console.log(info);

    let [inputData, setInputData] = useState({name:'', url:''})


    let {name,url} = inputData;

    let handleChnage = (e)=>{
        let {name,value} = e.target; 
            setInputData({...inputData, [name] : value})
    }

    let handleSubmit = (e)=>{
        e.preventDefault()
        if(name.trim() && url.trim()){
        axios.post('https://bookmark-data.onrender.com/sites',inputData)
        .then(()=>{
            alert('The data is added Successfully!!!')
            navigate('/')
        })
        }

    }
  return (
    <>
    <div id="form">
        <form  onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="name">Site</label>
                <input type="text" name='name' value={name} onChange={handleChnage}/>
            </div>
            <div className='form-group'>
                <label htmlFor="url">Site Url</label>
                <input type="url" name='url' value={url} onChange={handleChnage}/>
            </div>
            <div className='form-group'>
                <button type='submit'>Add Bookmark</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Create