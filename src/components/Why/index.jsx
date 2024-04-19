import React, { useState, useEffect } from "react";
// import { fetchPipelineData, fetchJobData } from "../../utils/getGitlabData";
import { getGitlabPipelineDataGraphQL} from "../../utils/getGitlabPipelineDataGraphQL";
import { paragraphs } from "./constants";
import { iconMap } from "./iconMap";
import Loading from '../Loading';
import "./styles.css";

const Why = () => {
  // const [jobData, setJobData] = useState([]);
  const [pipelineData, setPipelineData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const getJobData = async () => {
    //   let data = await fetchJobData();
    //   setJobData(data);
    // };
    // const getPipelineData = async () => {
    //   let data = await fetchPipelineData();
    //   setPipelineData(data);
    // };
    const getPipelineData = async () => {
      let data = await getGitlabPipelineDataGraphQL();
      setPipelineData(data.project.pipelines.nodes);
      setIsLoading(false); 
    };

    getPipelineData();
  }, []);

  const WhyParagraphs = () => {
    return paragraphs.map((paragraph, index) => {
      return (
        <p className="" key={index}>
          {paragraph}
        </p>
      );
    });
  };

	const parseDate = (dateString) => {

		return dateString.replace('T', ' ').replace('Z', ' ') // "2024-04-05T03:32:02Z"
		
		// const year = new Date(dateString).getFullYear()
		// const month = new Date(dateString).getMonth()
		// const day = new Date(dateString).getDate()
		// const hours = new Date(dateString).getHours()
		// const minutes = new Date(dateString).getMinutes()
		
		// return `${year} / ${month} / ${day} @ ${hours}:${minutes}`
	}

	const iconGenerator = (name, index = 0) => {
		// console.log('index:', index);
		return <span key={index} className={`${iconMap[name].class} icon`}>{iconMap[name].shortName} </span>;
  };

  const JobDataTable = () => {
    return (
      <>
        <div className="job-data-table">
          <table>
            <thead>
              <tr>
                <th>Index</th>
                <th>Status</th>
                <th>Stage</th>
                <th>Jobs from Stage</th>
                <th>Failure Reason</th>
                <th>Job Run Date/Time</th>
                <th>Artifact Link</th>
              </tr>
            </thead>
            <tbody>
              <JobDataRow />
            </tbody>
          </table>
        </div>
      </>
    );
  };

  const JobDataRow = () => {
    return pipelineData.map((node, index) => {
      return (
        <React.Fragment key={index}>
          <tr>
            <td className="index">{index + 1}</td>
            <td className="status">{node.status}</td>
            <td className="stage">{node.stages.nodes[0]?.name || null}</td>
            {/* <td className="job-from-stage">{node.stages.nodes.map(node => node.jobs.nodes.map((subNode, index) => subNode.name )) || null}</td> */}
            <td className="job-from-stage">{node.stages.nodes.map(node => node.jobs.nodes.map((subNode, index) => iconGenerator(subNode.name, index) )) || null}</td>
            {/* <td className="stage">{node.stages.nodes[0]?.stages || null}</td>.map(job => job.name */}
            <td className="failureReason">{node.failureReason || "N/A"}</td>
            <td className="datetime">{parseDate(node.createdAt) || "N/A"}</td>
            <td className="link">
              <a
                href={`https://gitlab.com${node.jobArtifacts[0]?.downloadPath}`}>
                {node.jobArtifacts[0]
                  ? `${node.jobArtifacts[0].name} @ ${parseInt(
                      node.jobArtifacts[0].size / 1000
                    )}kb`
                  : ""}
              </a>
            </td>
          </tr>
        </React.Fragment>
      );
    });
  };

const Legend = () => {
  return (
    <div className="icon-legend">
      <b>Icon Legend</b>

      <table>
        <thead>
          <tr>
            <th>Short Name</th>
            <th>Long Name</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(iconMap).map((item, index) => {
						const parentProperties = Object.keys(iconMap);

            return (
              <tr key={index}>
								{iconGenerator(parentProperties[index], index) || null}
                <td className="long-name">{item[1].longName}</td>
                <td className="description">{item[1].description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

  return (
    <div className="container">
      <div className="title">Why Rosie</div>
      <div className="paragraph">
        <WhyParagraphs />
      </div>
      {(isLoading && <Loading />) || <JobDataTable />}
			<Legend />
    </div>
  );
};

export default Why;
