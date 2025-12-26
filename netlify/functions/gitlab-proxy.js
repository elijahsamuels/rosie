// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2

import axios from "axios";
// const { GITLAB_API_TOKEN: ACCESS_TOKEN } = process.env;

// https://gitlab.com/-/graphql-explorer
const pipelinesQuery = `
query {
	project(fullPath: "elijahsamuels/rosie") {
		pipelines(first: 25) {
			nodes {
				id
				status
				failureReason
				createdAt
				updatedAt
				stages {
					nodes {
						name
						status
						jobs {
							nodes {
								name
							}
						}
					}
				}
				jobArtifacts { 
					downloadPath
					fileType
					name
					size
					expireAt
				}
			}
		}
	}
}`;

export const handler = async () => {
  // const response = await fetch('https://gitlab.com/api/v4/...', {
  //   headers: { 'Authorization': `Bearer ${process.env.GITLAB_API_TOKEN}` }
  // });
  // const data = await response.json();
  // return { statusCode: 200, body: JSON.stringify(data) };

  let data = JSON.stringify({
    query: pipelinesQuery,
    variables: {},
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://gitlab.com/api/graphql",
    headers: {
      "Content-Type": "application/json",
      // "Private-Token": ACCESS_TOKEN,
    },
    data,
  };

  let axiosResponse = axios
    .request(config)
    .then((response) => {
      const { data } = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
  return axiosResponse;
};
