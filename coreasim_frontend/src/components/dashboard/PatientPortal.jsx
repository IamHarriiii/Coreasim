//C:\Users\User\Coreasim\coreasim_frontend\src\components\dashboard\PatientPortal.jsx

import { useState } from 'react';
import api from '@/utils/api';
import Link from 'next/link';

export default function PatientPortal() {
  const [patientId, setPatientId] = useState('');
  const [reportURL, setReportURL] = useState(null);
  const [predictedDisease, setPredictedDisease] = useState(null);
  const [show3D, setShow3D] = useState(false);

  const handleFetchDisease = async () => {
    try {
      const scans = await api.get(`eye-scans/?patient_id=${patientId}`);
      const latestScan = scans.data[0];
      const prediction = await api.post('predict-disease/', {
        eye_scan_id: latestScan.id,
      });
      setPredictedDisease(prediction.data.predicted_disease);
      alert(`Disease: ${prediction.data.predicted_disease}`);
    } catch (err) {
      alert('Failed to fetch prediction.');
    }
  };

  const handleGetReport = async () => {
    try {
      const res = await api.get(`get-report/${patientId}/`, { responseType: 'blob' });
      const fileURL = window.URL.createObjectURL(new Blob([res.data], { type: 'application/pdf' }));
      setReportURL(fileURL);
    } catch {
      alert('Report not found');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Patient Portal</h2>

      <input
        type="text"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        placeholder="Enter Your Patient ID"
        className="w-full px-4 py-2 mb-4 border rounded"
      />

      <div className="space-y-3">
        <button onClick={handleFetchDisease} className="bg-indigo-600 text-white px-4 py-2 rounded w-full">
          Get My Predicted Disease
        </button>

        <button onClick={handleGetReport} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          View Report
        </button>

        {predictedDisease && (
          <Link
            href={{
              pathname: '/simulate',
              query: { disease: predictedDisease },
            }}
            className="bg-purple-600 text-white px-4 py-2 rounded block text-center hover:bg-purple-700"
          >
            View 3D Simulation
          </Link>
        )}
      </div>

      {reportURL && (
        <div className="mt-4">
          <iframe src={reportURL} className="w-full h-96 border rounded" title="Patient Report" />
        </div>
      )}
    </div>
  );
}
