import React,{useEffect,useState} from 'react'
import { Link ,useLocation} from 'react-router-dom'

const Header = () => {
    const[activetab,setActiveTab]=useState('Home')
    const location=useLocation()
    useEffect(()=>{
        if(location.pathname==="/"){
            setActiveTab('Home')
        }
        else if(location.pathname==="/add"){
            setActiveTab("AddContact")
        }
        else if(location.pathname==="/about"){
            setActiveTab("About")
        }
    })
  return (
    <div className='header'>
        <p className='logo'>
            Contact App

            
        </p>
        <div className='header-right'>
            <Link to='/'>
                <p onClick={()=>setActiveTab('Home')} className={`${activetab==="Home"?"active":""}`}>
                    Home
                </p>
            </Link>
            <Link to='/add'>
                <p onClick={()=>setActiveTab('Home')} className={`${activetab==="AddContact"?"active":''}`}>
                    Add Contact
                </p>
            </Link>
            <Link to='/add'>
                <p onClick={()=>setActiveTab('AddContact')} className={`${activetab==="AddContact"?"active":''}`}>
                    Add Contact
                </p>
            </Link>
            <Link to='/about'>
                <p onClick={()=>setActiveTab('About')} className={`${activetab==="About"?"active":''}`}>
                    About
                </p>
            </Link>

            
        </div>
      
    </div>
  )
}

export default Header
