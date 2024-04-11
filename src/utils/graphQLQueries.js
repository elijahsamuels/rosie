// https://gitlab.com/-/graphql-explorer

export const pipelinesQuery = `
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

export const pipelinesQuery2 = `
{
  project(fullPath: "elijahsamuels/rosie") {
    jobs(first: 5) {
      nodes {
        name
        kind
        id
        createdAt
        browseArtifactsPath
        artifacts(last: 1) {
          edges {
            node {
              id
            }
          }
        }
        failureMessage
        pipeline {
          detailedStatus {
            id
          }
        }
        runner {
          description
        }
        status
        allowFailure
        webPath
      }
    }
  }
}`
	