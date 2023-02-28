import React, { useState } from "react";
import MuiDatatable from "mui-datatables";
import ProjectService from "../../../services/ProjectService";
import { useEffect } from "react";
import { Button, TextField } from "@mui/material";
const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [operation, setOperation] = useState("add");
  const [status, setStatus] = useState("");

  useEffect(() => {
    ProjectService.fetchAllProject()
      .then((response) => {
        setProjects(response.data.data);
        console.log("hhhh", response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleStatus1 = (project) => {
    setStatus("Register");
  };

  const handleStatus2 = (project) => {
    setStatus("Closed");
  };
  const handleStatus3 = (project) => {
    setStatus("Cancel");
  };

  const columns = [
    {
      label: "ProjectName",
      name: "projectname",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Reason",
      name: "reason",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Type",
      name: "type",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Division",
      name: "division",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Category",
      name: "category",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Priority",
      name: "priority",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Department",
      name: "department",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "FromDate",
      name: "startdate",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "ToDate",
      name: "enddate",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Location",
      name: "location",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Status",
      name: "status",
      options: {
        sort: false,
        filter: true,
      },
    },
    {
      label: "Actions",
      name: "action",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (index) => {
          const project = projects[index];
          return (
            <>
              {/* <IconButton sx={{ backgroundColor: "primary" }}>
                status
              </IconButton> */}
              <Button onClick={() => handleStatus1(project)}>Start</Button>
              <Button onClick={() => handleStatus2(project)}>Close</Button>
              <Button onClick={() => handleStatus3(project)}>Cancel</Button>
            </>
          );
        },
      },
    },
  ];

  return (
    <>
      <TextField type="text" placeholder="Search" />
      <MuiDatatable
        title="Projects Listing"
        data={projects}
        columns={columns}
      />
    </>
  );
};

export default ProjectList;
