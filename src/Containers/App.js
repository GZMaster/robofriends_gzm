import React, { useState, useEffect } from 'react'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry'
import './App.css'


function App() {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { setRobots(users) })
        console.log(count)
    }, [count]) // Only run if count changes.

    

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    console.log(robots, setRobots)
    return !robots.length ? <h1>Loading!</h1> : 
        (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <button onClick={()=>setCount(count+1)}>Click Me!</button>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
}

export default App