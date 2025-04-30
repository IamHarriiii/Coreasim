import { useState } from 'react';
import api from '@/utils/api';

export default function PatientPortal() {
  const [patientId, setPatientId] = useState('');
  const [reportURL, setReportURL] = useState(null);
  const [show3D, setShow3D] = useState(false);

  const handleGetReport = async () => {
    try {
      const url = `get-report/${patientId}/`;
      const res = await api.get(url, { responseType: 'blob' });

      const fileURL = window.URL.createObjectURL(new Blob([res.data], { type: 'application/pdf' }));
      setReportURL(fileURL);
    } catch (err) {
      alert('Report not found or patient ID incorrect.');
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
      <div className="space-x-2 mb-4">
        <button onClick={handleGetReport} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          View My Report
        </button>
        <button onClick={() => setShow3D(!show3D)} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          {show3D ? "Hide" : "View"} 3D Animation
        </button>
      </div>

      {reportURL && (
        <div className="mb-4">
          <iframe src={reportURL} className="w-full h-96 border rounded" title="Patient Report" />
        </div>
      )}

      {show3D && (
        <div className="mt-6 h-[500px] border rounded overflow-hidden">
          <iframe src="/simulate" className="w-full h-full" title="3D Surgery Animation" />
        </div>
      )}
    </div>
  );
}
