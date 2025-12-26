// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2

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

export const handler = async (event) => {
  try {
    const response = await fetch("https://gitlab.com/api/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Private-Token": process.env.GITLAB_API_TOKEN,
      },
      body: JSON.stringify({
        query: pipelinesQuery,
        variables: {},
      }),
    });

    const result = await response.json();

    if (result.errors) {
      console.error("GitLab GraphQL Errors:", result.errors);
      return {
        statusCode: 400,
        body: JSON.stringify({ errors: result.errors }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result.data),
    };
  } catch (error) {
    console.error("Fetch Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error", details: error.message }),
    };
  }
};
