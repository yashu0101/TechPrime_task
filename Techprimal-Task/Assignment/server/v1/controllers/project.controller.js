const ProjectModel = require("../models/project.model");

class ProjectCtrl {
  static createProject(req, res) {
    const project = req.body;
    new ProjectModel(project)
      .save()
      .then((result) => {
        res.status(201).send({ message: "Project created", data: result });
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "Project not created", error: err });
      });
  } // createProject

  static updateProject(req, res) {
    const { id } = req.params;
    const project = req.body;
    ProjectModel.findOneAndUpdate({ _id: id }, project, { new: true })
      .then((result) => {
        res.status(201).send({
          message: "Project updated",
          data: result,
        });
        // res.status(200).send({ message: "User updated", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "Project not updated", error: err });
        console.log("error", err);
      });
  }
  static deleteProject(req, res) {
    const { id } = req.params;

    ProjectModel.findOneAndDelete({ _id: id }, { status: 2 })
      .then((result) => {
        res.status(201).send({
          message: "Project deleted",
          data: result,
        });
        // res.status(201).send({ message: "User deleted", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "Project not deleted", error: err });
      });
  }
  static getSingleProject(req, res) {
    const { id } = req.params;
    ProjectModel.findOne({ _id: id })
      .then((result) => {
        res.status(200).send({ message: "User document", data: result });
        // res.status(200).send({ message: "User details", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "User not availabel", error: err });
      });
  }
  // static getAllProject(req, res) {
  //   const { projectname } = req.query;
  //   const filter = { $or: [{ status: 0 }, { status: 1 }, { status: 2 }] };
  //   if (projectname) filter.projectname = projectname;
  //   ProjectModel.find(filter)
  //     .then((result) => {
  //       res.status(201).send({ message: "Project details ", data: result });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res
  //         .status(404)
  //         .send({ message: " Project details could not fetch", error: err });
  //     });
  // } // fetch All project

  static getAllProject(req, res) {
    ProjectModel.find()
      .then((result) => {
        res.status(201).send({ message: "Project details ", data: result });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ message: " Project details could not fetch", error: err });
      });
  }
  static async projectStatistic(req, res) {
    const start = await UserModel.countDocuments({
      status: "Register",
    });
    const close = await UserModel.countDocuments({
      status: "Cancel",
    });
    const cancel = await UserModel.countDocuments({
      status: "Close",
    });

    res.status(200).send({
      message: `details`,
      data: { register, cancel, close },
    });
  }
}

module.exports = ProjectCtrl;
