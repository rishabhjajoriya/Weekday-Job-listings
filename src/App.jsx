import { useState,useEffect } from 'react'
import './App.css'
import { Container, Typography } from '@mui/material';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const [minSalaryFilter, setMinSalaryFilter] = useState(0); // Default filter value for minimum base pay
  const [minExpFilter, setMinExpFilter] = useState(0); // Default filter value for experience
  const [roleFilters, setRoleFilters] = useState([]); // Default filter value for role
  const [companyFilter, setCompanyFilter] = useState(""); // Default filter value for company name
  const [locationFilter, setLocationFilter] = useState(""); // Default filter value for location
  const [remoteFilter, setRemoteFilter] = useState(""); // Default filter value for remote
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

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <>
     <Container>
      <div className='container'>
      <Typography
          variant="h4"
          sx={{ my: 4, textAlign: "center", color: "primary.main" }}
        >
          Job Listings
        </Typography>

        

        <InfiniteScroll
          dataLength={filteredJobs.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<Typography>Loading...</Typography>}
          endMessage={<Typography>No more jobs to load</Typography>}
        >
          <Grid container spacing={4}>
            {filteredJobs.map((job, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <JobCard job={job} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>

      </div>
     </Container>
    </>
  )
}

export default App
