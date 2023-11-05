import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BuildingDetail() {
  const [studySpots, setStudySpots] = useState([]);
  let { buildingName } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/study_spots/building/${buildingName}`)
      .then((response) => response.json())
      .then((data) => {
         setStudySpots(data);
              })
      .catch((error) => {
        console.error('Error fetching study spots:', error);
      });
  }, [buildingName]);

    return (
      <div>
        <h2>Study Spots in {buildingName}</h2>
        <ul>
          {studySpots.map((spot) => (
            <li key={spot.id}>
              {spot.name} - <a href={spot.url}>More info</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default BuildingDetail;
