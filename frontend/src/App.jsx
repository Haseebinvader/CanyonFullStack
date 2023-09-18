import { useEffect, useState } from 'react'
import './App.css'
import DetailPage from './Pages/DetailPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/index'
import { UserContext } from './UserContext/UserContext'
import axios from 'axios'

function App() {
  const [pageSize, setPageSize] = useState(25)
  const [url, setUrl] = useState(`http://127.0.0.1:8000/api/products/?Block=False&limit=${pageSize}&ordering=CompoundNumber`)
  const [data, setData] = useState([])
  const [sizeToggle, setSizeToggle] = useState(true)
  const [tempToggle, setTempToggle] = useState(true)
  const [row, setRow] = useState({})
  const [nextPage, setNextPage] = useState('')
  const [previousPage, setPreviousPage] = useState('')
  const [accessToken, setAccessToken] = useState('')
  const [clearFiler, setClearFilter] = useState(false)
  
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.results)
      setNextPage(res.data.next);
      setPreviousPage(res.data.previous);
    })
    axios.get('http://127.0.0.1:8000/api/get_access_token/').then((res) =>{
        setAccessToken(res.data.access_token)
      })
  }, [url, pageSize, setAccessToken, setData]);
  return (
    <div className="App">
       <UserContext.Provider value={{url, setUrl,setPageSize, data, pageSize, sizeToggle, setSizeToggle, tempToggle, setTempToggle, row, setRow, nextPage, setNextPage, previousPage, setPreviousPage, accessToken, setAccessToken, clearFiler, setClearFilter}} >
       <Router>
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
      </UserContext.Provider>
    </div>
  )
}

export default App
