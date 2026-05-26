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

  const parseDate = (dateString) => {
    if (!dateString) return "N/A";
    return dateString.replace("T", " ").replace("Z", " ");
  };

  const pillGenerator = (name, index = 0) => {
    const config = iconMap[name];
    const shortText = config ? config.shortName : name.substring(0, 4);
    const classNameVal = config ? config.class : name;
    
    return (
      <span key={index} className={`job-pill ${classNameVal}`}>
        {shortText}
      </span>
    );
  };

  const renderStatusBadge = (status) => {
    const norm = (status || "").toUpperCase();
    if (norm === "SUCCESS") {
      return <span className="badge-status status-success">● SUCCESS</span>;
    } else if (norm === "FAILED" || norm === "FAILED_STRICT") {
      return <span className="badge-status status-failed">▲ FAILED</span>;
    } else {
      return <span className="badge-status status-running">■ {norm || "PENDING"}</span>;
    }
  };

  return (
    <div className="container">
      <header className="page-header">
        <div className="page-subtitle">QA & OPERATIONS</div>
        <h1 className="page-title">Operations & QA</h1>
      </header>

      <div className="why-wrapper">
        {/* Paragraphs Card */}
        <div className="glass-card why-paragraphs-card">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Pipeline DataTable Card */}
        <div className="glass-card dashboard-table-card">
          {isLoading ? (
            <Loading />
          ) : (
            <table className="gitops-table">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Status</th>
                  <th>Stage</th>
                  <th>Jobs Output</th>
                  <th>Failure Reason</th>
                  <th>Run Date/Time</th>
                  <th>Artifact Link</th>
                </tr>
              </thead>
              <tbody>
                {pipelineData.map((node, index) => (
                  <tr key={index}>
                    <td>{(index + 1).toString().padStart(2, "0")}</td>
                    <td>{renderStatusBadge(node.status)}</td>
                    <td>
                      <span className="stage-tag">
                        {node.stages.nodes[0]?.name || "build"}
                      </span>
                    </td>
                    <td>
                      <div className="job-pill-container">
                        {node.stages.nodes.map((stageNode) =>
                          stageNode.jobs.nodes.map((subNode, subIdx) =>
                            pillGenerator(subNode.name, subIdx)
                          )
                        )}
                      </div>
                    </td>
                    <td style={{ color: node.failureReason ? 'var(--error)' : 'inherit' }}>
                      {node.failureReason || "N/A"}
                    </td>
                    <td>{parseDate(node.createdAt)}</td>
                    <td>
                      {node.jobArtifacts && node.jobArtifacts[0] ? (
                        <a 
                          href={`https://gitlab.com${node.jobArtifacts[0].downloadPath}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {node.jobArtifacts[0].name} ({parseInt(node.jobArtifacts[0].size / 1000)}kb)
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Legend Card */}
        <div className="glass-card legend-card">
          <div className="legend-title">Job Key & Definitions</div>
          <table className="legend-table">
            <tbody>
              {Object.entries(iconMap).map(([key, value], index) => (
                <tr key={index}>
                  <td className="pill-cell">
                    {pillGenerator(key, index)}
                  </td>
                  <td className="name-cell">
                    {value.longName}
                  </td>
                  <td className="desc-cell">
                    {value.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Why;
