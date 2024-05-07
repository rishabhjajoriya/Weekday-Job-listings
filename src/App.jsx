import { useState } from 'react'
import './App.css'

function App() {
  const [jobs, setJobs] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  // API Integration
  const fetchData = async () => {
    const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
    
            const body = JSON.stringify({
              limit: 10,
              offset: offset,
            });
    
            const requestOptions = {
              method: "POST",
              headers: myHeaders,
              body,
            };
    
            try {
              const response = await fetch(
                "https://api.weekday.technology/adhoc/getSampleJdJSON",
                requestOptions
              );
              const data = await response.json();
              setJobs((prevJobs) => [...prevJobs, ...data.jdList]);
              setOffset((prevOffset) => prevOffset + 10);
              if (data.jdList.length === 0) {
                setHasMore(false);
              }
    
            } catch (e) {
              console.error(e);
            }
    
  };
  return (
    <>

    </>
  )
}

export default App
