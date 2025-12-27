import React, { useState, useEffect } from "react";
import { getGitlabPipelineDataGraphQL } from "../../utils/getGitlabPipelineDataGraphQL";
import { paragraphs } from "./constants";
import { iconMap } from "./iconMap";
import Loading from "../Loading";
import "./styles.css";

const Why = () => {
  const [pipelineData, setPipelineData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPipelineData = async () => {
      let data = await getGitlabPipelineDataGraphQL();
      if (data?.project?.pipelines?.nodes) {
        setPipelineData(data?.project?.pipelines?.nodes);
      }
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
    return dateString.replace("T", " ").replace("Z", " ");
  };

  const iconGenerator = (name, index = 0) => {
    return (
      <span key={index} className={`${iconMap[name].class} icon`}>
        {iconMap[name].shortName}{" "}
      </span>
    );
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
            <td className="job-from-stage">
              {node.stages.nodes.map((node) =>
                node.jobs.nodes.map((subNode, index) => iconGenerator(subNode.name, index))
              ) || null}
            </td>
            {/* <td className="stage">{node.stages.nodes[0]?.stages || null}</td>.map(job => job.name */}
            <td className="failureReason">{node.failureReason || "N/A"}</td>
            <td className="datetime">{parseDate(node.createdAt) || "N/A"}</td>
            <td className="link">
              <a href={`https://gitlab.com${node.jobArtifacts[0]?.downloadPath}`}>
                {node.jobArtifacts[0]
                  ? `${node.jobArtifacts[0].name} @ ${parseInt(node.jobArtifacts[0].size / 1000)}kb`
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
              <th>Icon</th>
              <th>Long Name</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(iconMap).map(([key, value], index) => {
              return (
                <tr key={index}>
                  <td className="icon-cell">{iconGenerator(key, index)}</td>
                  <td className="long-name">{value.longName}</td>
                  <td className="description">{value.description}</td>
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
