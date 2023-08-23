import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTrainDetails } from './api';

function SingleTrain() {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = 'ZxcAbi'; // Get the access token from the API
        const trainData = await getTrainDetails(token, trainNumber);
        setTrain(trainData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [trainNumber]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Display train details */}
    </div>
  );
}

export default SingleTrain;