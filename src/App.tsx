import React from 'react';
import TableList from './TableList'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        setUsers(res.data)
      })
  }, [])

  return (
    <div className="App">
      <TableList data={users} />
    </div>
  )
}

export default App
