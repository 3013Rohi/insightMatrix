import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart components globally
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart3D({ data }) {
  if (!data) return null;
  const maxVal = Math.max(...data.datasets[0].data);

  return (
    <Canvas style={{ height: 300, width: '100%' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      {data.datasets[0].data.map((val, idx) => (
        <Box
          key={idx}
          args={[0.5, (val / maxVal) * 5, 0.5]}
          position={[idx - data.datasets[0].data.length / 2, (val / maxVal) * 2.5, 0]}
        >
          <meshStandardMaterial color="orange" />
        </Box>
      ))}
    </Canvas>
  );
}

const UploadPage = () => {
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  const onUpload = (fileContent) => {
    try {
      const lines = fileContent.trim().split('\n').filter(Boolean);
      if (lines.length === 0) {
        setError('Empty file or invalid format.');
        return;
      }

      const labels = [];
      const values = [];

      lines.forEach(line => {
        const [labelRaw, valueRaw] = line.split(',');
        if (!labelRaw || !valueRaw) return;

        const label = labelRaw.trim();
        const value = Number(valueRaw.trim());
        if (isNaN(value)) return;

        labels.push(label);
        values.push(value);
      });

      if (labels.length === 0 || values.length === 0) {
        setError('No valid data found.');
        return;
      }

      setError(null);
      setChartData({
        labels,
        datasets: [
          {
            label: 'Sample Data',
            data: values,
            borderColor: 'rgba(75,192,192,1)',
            fill: false,
            tension: 0.1,
          },
        ],
      });
    } catch {
      setError('Failed to parse file.');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      onUpload(reader.result);
      e.target.value = ''; // reset input for re-upload
    };
    reader.readAsText(file);
  };

  return (
    <div style={{ padding: 20 }}>
      <input type="file" onChange={handleFileChange} accept=".csv" />
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {chartData && (
        <div style={{ marginTop: 20 }}>
          <h3>2D Chart</h3>
          <Line key={JSON.stringify(chartData)} data={chartData} />

          <h3>3D Chart</h3>
          <Chart3D data={chartData} />
        </div>
      )}
    </div>
  );
};

export default UploadPage;
