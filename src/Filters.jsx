import React from 'react';
import { Box, TextField, InputLabel, Select, MenuItem } from '@mui/material';

// Role filter component
const RoleFilter = ({ value, onChange }) => (
  <Box >
    <InputLabel>Role</InputLabel>
    <Select
    sx={{width:"100px",height:"50px"}}
      multiple
      value={value}
      onChange={onChange}
      renderValue={(selected) => selected.join(', ')}
    >
      {["frontend", "backend", "ios", "android", "tech lead"].map((role) => (
        <MenuItem key={role} value={role}>
          {role}
        </MenuItem>
      ))}
    </Select>
  </Box>
);

// Experience filter component
const ExperienceFilter = ({ value, onChange }) => (
  <Box>
    <InputLabel>Experience</InputLabel>
    <Select
      value={value}
      onChange={onChange}
      sx={{width:"100px",height:"50px"}}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
        <MenuItem key={value} value={value}>
          {value}
        </MenuItem>
      ))}
    </Select>
  </Box>
);

// Location filter component
const LocationFilter = ({ value, onChange }) => (
  <Box>
    <InputLabel>Location</InputLabel>
    <Select
      value={value}
      onChange={onChange}
      sx={{width:"150px",height:"50px"}}
    >
      {["delhi ncr", "bangalore", "chennai", "mumbai", "remote"].map((location) => (
        <MenuItem key={location} value={location}>
          {location}
        </MenuItem>
      ))}
    </Select>
  </Box>
);

// Remote filter component
const RemoteFilter = ({ value, onChange }) => (
  <Box>
    <InputLabel>Remote</InputLabel>
    <Select
     sx={{width:"100px",height:"50px"}}
      value={value}
      onChange={onChange}
    >
      {["remote", "hybrid", "on-site"].map((remoteOption) => (
        <MenuItem key={remoteOption} value={remoteOption}>
          {remoteOption}
        </MenuItem>
      ))}
    </Select>
  </Box>
);

// Minimum base pay filter component
const MinSalaryFilter = ({ value, onChange }) => (
  <Box>
    <InputLabel>Minimum Base Pay</InputLabel>
    <Select
     sx={{width:"100px",height:"50px"}}
      value={value}
      onChange={onChange}
    >
      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((value) => (
        <MenuItem key={value} value={value}>
          {value}L
        </MenuItem>
      ))}
    </Select>
  </Box>
);

// Company name filter component
const CompanyFilter = ({ value, onChange }) => (
  <Box >
    <InputLabel>Company Name</InputLabel>
    <TextField
     
      variant="outlined"
      value={value}
      onChange={onChange}
    />
  </Box>
);

export { RoleFilter, ExperienceFilter, LocationFilter, RemoteFilter, MinSalaryFilter, CompanyFilter };
