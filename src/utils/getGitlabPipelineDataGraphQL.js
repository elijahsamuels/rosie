import axios from "axios";
import { pipelinesQuery } from "./graphQLQueries";

export const getGitlabPipelineDataGraphQL = async () => {
  const data = JSON.stringify({
    query: pipelinesQuery,
    variables: {},
  });

  try {
    // This URL works in PROD and LOCALLY (via Netlify Dev)
    const response = await axios.post("/.netlify/functions/gitlab-proxy", data);
		console.log('response.data', response.data.data);
    return response.data.data; 
  } catch (error) {
    console.error("Error fetching GitLab data:", error);
    throw error;
  }
};

// import axios from "axios";
// import { pipelinesQuery } from "./graphQLQueries";
// import { handler } from "../../netlify/functions/gitlab-proxy.js";

// // https://docs.gitlab.com/ee/api/graphql/reference/#pipeline
// export const getGitlabPipelineDataGraphQL = async () => {
//   let data = JSON.stringify({
//     query: pipelinesQuery,
//     variables: {},
//   });

//   if (process.env.NODE_ENV === "local") {
//     const { REACT_APP_GITLAB_API_TOKEN1: ACCESS_TOKEN } = process.env;
//     let config = {
//       method: "post",
//       maxBodyLength: Infinity,
//       url: "https://gitlab.com/api/graphql",
//       headers: {
//         "Content-Type": "application/json",
//         "Private-Token": ACCESS_TOKEN,
//       },
//       data,
//     };

//     let axiosResponse = axios
//       .request(config)
//       .then((response) => {
//         const { data } = response.data;
//         return data;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     return axiosResponse;
//   } else {
//     // /.netlify/functions/gitlab-proxy

//     const data = await handler.then((response) => response.data).catch((error) => error);

//     return data;
//   }
// };
