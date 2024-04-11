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