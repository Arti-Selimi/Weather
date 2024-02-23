import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from './App'
import logo from './weatherIcons/AppIcon.png'

export const Navbar = () =>{

    const { city, setCity, handleSubmit } = useContext(AppContext)

    return (
        <div className="navbar">
            <img src={logo} style={{width:"70px", height: "60px", marginTop:"0"}}/>
            <Link to="/">Home</Link>
            <Link to="/News">News</Link>
            <Link to="/Contact">Contact</Link>
                <form className='submitCity' onSubmit={handleSubmit}>
                    <input
                        id='inputCity'
                        type="text"
                        placeholder="Enter city name"
                        value={city.Name}
                        onChange={(e)=>setCity({...city, Name : e.target.value})}
                    />
                    <button type="submit">Get Weather</button>
                </form>
        </div>
    )
}