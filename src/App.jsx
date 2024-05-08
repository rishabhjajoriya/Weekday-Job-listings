import React, { useState, useEffect } from "react";
import "./App.css";
import JobCard from "./JobCard";
import { Container, Grid, Typography, Select, MenuItem, Box, TextField, InputLabel } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { RoleFilter, ExperienceFilter, LocationFilter, RemoteFilter, MinSalaryFilter, CompanyFilter } from './Filters'; // Adjust the path as per your file structure

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
  
  // Function to filter jobs based on minimum base pay, experience, role, company name, location, and remote
  const filterJobs = () => {
    const filtered = jobs.filter(job =>
      job.minJdSalary >= minSalaryFilter &&
      job.minExp >= minExpFilter &&
      (roleFilters.length === 0 || roleFilters.includes(job.jobRole)) &&
      (companyFilter === "" || job.companyName.toLowerCase().includes(companyFilter.toLowerCase())) &&
      (locationFilter === "" || job.location.toLowerCase() === locationFilter.toLowerCase()) &&
      (remoteFilter === "" || (remoteFilter === "remote" && job.location.toLowerCase() === "remote") || (remoteFilter !== "remote" && job.location.toLowerCase() !== "remote"))
    );
    setFilteredJobs(filtered);
  };
  
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

  useEffect(() => {
    filterJobs();
  }, [jobs, minSalaryFilter, minExpFilter, roleFilters, companyFilter, locationFilter, remoteFilter]); // Update filtered jobs when jobs or filter values change


  const handleSalaryFilterChange = (event) => {
    setMinSalaryFilter(event.target.value);
  };

  const handleExpFilterChange = (event) => {
    setMinExpFilter(event.target.value);
  };

  const handleRoleFilterChange = (event) => {
    const selectedRoles = event.target.value;
    setRoleFilters(selectedRoles);
  };

  const handleCompanyFilterChange = (event) => {
    setCompanyFilter(event.target.value);
  };

  const handleLocationFilterChange = (event) => {
    const selectedLocation = event.target.value;
    setLocationFilter(selectedLocation);
  };

  const handleRemoteFilterChange = (event) => {
    setRemoteFilter(event.target.value);
  };


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

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
         
         
         <RoleFilter value={roleFilters} onChange={handleRoleFilterChange} />
         <ExperienceFilter value={minExpFilter} onChange={handleExpFilterChange} />
         <LocationFilter value={locationFilter} onChange={handleLocationFilterChange} />
         <RemoteFilter value={remoteFilter} onChange={handleRemoteFilterChange} />
         <MinSalaryFilter value={minSalaryFilter} onChange={handleSalaryFilterChange} />
         <CompanyFilter value={companyFilter} onChange={handleCompanyFilterChange} />
       
          
       </Box>
        

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
