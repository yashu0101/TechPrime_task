export default {
  serverBaseurl: "http://localhost:2020",
  api: {
    user: {
      create: "/users",
      update: "/users/",
      delete: "/users/",
      getone: "/users/",
      getAll: "/users",
      changeImage: "/users/image/",
      statistic: "/users/statistic",
    },
    auth: {
      userLogin: "/auth/login",
      validateToken: "/auth/validate-token",
      refreshToken: "/auth/refresh-token",
    },
    project: {
      create: "/project",
      update: "/project/",
      delete: "/project/",
      getone: "/project/",
      getAll: "/project",
      // statistic: "/users/statistic",
    },
  },
};
