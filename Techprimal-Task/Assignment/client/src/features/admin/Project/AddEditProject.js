import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ProjectService from "../../../services/ProjectService";

const AddEditProject = () => {
  const [project, setProject] = useState({});
  const [operation, setOperation] = useState("add");

  const handelChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };
  const handleSubmit = () => {
    if (operation == "add") {
      ProjectService.createProject(project)
        .then((response) => {
          alert("created");
          console.log("fsfs", response?.data?.data);
        })
        .catch((err) => {
          alert("not created");
          console.log(err);
        });
    } else {
      ProjectService.updateProject(project._id, project)
        .then((response) => {
          alert("created");
          console.log("fsfs", response?.data?.data);
        })
        .catch((err) => {
          alert("not created");
          console.log(err);
        });
    }
  };

  return (
    <>
      <h2>Create Project</h2>
      <Container>
        <Box>
          <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
            <Grid item xs={12} md={6} lg={7}>
              <TextField
                fullWidth
                label="Project Name"
                name="projectname"
                variant="outlined"
                value={project?.projectname}
                onChange={handelChange}
              />
            </Grid>
          </Grid>
          {/* <label sx={{ display: "flex" }}>Reason:</label> */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Reason</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Reason"
                  name="reason"
                  variant="outlined"
                  value={project?.reason}
                  onChange={handelChange}
                >
                  <MenuItem value="For Business">For Business</MenuItem>
                  <MenuItem value="For Education">For Education</MenuItem>
                  <MenuItem value="For Personal">For Personal</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Type"
                  name="type"
                  variant="outlined"
                  value={project?.type}
                  onChange={handelChange}
                >
                  <MenuItem value="internal">Internal</MenuItem>
                  <MenuItem value="external">External</MenuItem>
                  <MenuItem value="vendor">Vendor</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Division</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  variant="outlined"
                  label="Division"
                  name="division"
                  value={project.division}
                  onChange={handelChange}
                >
                  <MenuItem value="compressor">Compressor</MenuItem>
                  <MenuItem value="pumps">Pumps</MenuItem>
                  <MenuItem value="glass">Glass</MenuItem>
                  <MenuItem value="waterheater">Water Heater</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  variant="outlined"
                  label="Category"
                  name="category"
                  value={project.category}
                  onChange={handelChange}
                >
                  <MenuItem value="qualityA">Quality A</MenuItem>
                  <MenuItem value="qualityB">Quality B</MenuItem>
                  <MenuItem value="qualityC">Quality C</MenuItem>
                  <MenuItem value="qualityD">Quality D</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  variant="outlined"
                  label="Priority"
                  name="priority"
                  value={project.priority}
                  onChange={handelChange}
                >
                  <MenuItem value="high">High</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="low">Low</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Department
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  variant="outlined"
                  label="Department"
                  name="department"
                  value={project.department}
                  onChange={handelChange}
                >
                  <MenuItem value="stratergy<">Stratergy</MenuItem>
                  <MenuItem value="finance">Finance</MenuItem>
                  <MenuItem value="quality">Quality</MenuItem>
                  <MenuItem value="maintaince">Maintaince</MenuItem>
                  <MenuItem value="store">Store</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
              <TextField
                fullWidth
                variant="outlined"
                type="date"
                label="StartDate"
                name="startdate"
                value={project.startdate}
                onChange={handelChange}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
              <TextField
                fullWidth
                variant="outlined"
                type="date"
                label="EndDate"
                name="enddate"
                value={project.enddate}
                onChange={handelChange}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={project.loaction}
                  label="Location"
                  name="location"
                  onChange={handelChange}
                >
                  <MenuItem value="pune">Pune</MenuItem>
                  <MenuItem value="mumbai">Mumbai</MenuItem>
                  <MenuItem value="ahmednagar">Ahmednagar</MenuItem>
                  <MenuItem value="delhi">Delhi</MenuItem>
                  <MenuItem value="nagpur">Nagpur</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              sx={{ padding: "10px", marginLeft: "779px" }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={project.status}
                  label="Status"
                  name="status"
                  onChange={handelChange}
                >
                  <MenuItem value="Registered">Registered</MenuItem>
                  <MenuItem value="Close">Close</MenuItem>
                  <MenuItem value="Cancelled">Cancelled</MenuItem>
                  <MenuItem value="Running">Running</MenuItem>
                  <MenuItem value="Closure Delay">Closure Delay</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              lg={12}
              sx={{ margin: "auto", padding: "10px" }}
            >
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  paddingleft: "10px",
                  borderRadius: "50px",
                  margin: "10px",
                }}
              >
                Save Project
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AddEditProject;
