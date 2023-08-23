import React, { useState, useEffect } from 'react';
import { getAllTrains } from './api';

function AllTrains() {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = 'your_access_token'; // Get the access token from the API
        const trainData = await getAllTrains(token);
        setTrains(trainData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Display the list of trains */}
    </div>
  );
}

export default AllTrains;