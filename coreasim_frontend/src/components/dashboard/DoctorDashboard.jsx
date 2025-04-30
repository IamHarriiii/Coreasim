import { useState } from 'react';
import api from '@/utils/api';

export default function DoctorDashboard() {
  const [patientId, setPatientId] = useState('');
  const [scanImage, setScanImage] = useState(null);
  const [eyeScanId, setEyeScanId] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [simulationResult, setSimulationResult] = useState(null);
  const [reportPath, setReportPath] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('patient', patientId);
    formData.append('scan_image', scanImage);

    try {
      const res = await api.post('upload-scan/', formData);
      setEyeScanId(res.data.data.id);
      alert('Scan uploaded!');
    } catch (err) {
      alert('Upload failed');
    }
  };

  const handlePrediction = async () => {
    try {
      const res = await api.post('predict-disease/', { eye_scan_id: eyeScanId });
      setPrediction(res.data);
      alert('Prediction complete!');
    } catch {
      alert('Prediction failed');
    }
  };

  const handleSimulation = async () => {
    try {
      const res = await api.post('run-simulation/', { eye_scan_id: eyeScanId });
      setSimulationResult(res.data.result);
      alert('Simulation complete!');
    } catch {
      alert('Simulation failed');
    }
  };

  const handleReport = async () => {
    try {
      const body = {
        patient_id: patientId,
        disease_name: prediction.predicted_disease,
        simulation_name: prediction.simulation_name,
        simulation_id: prediction.simulation_id,
      };
      const res = await api.post('generate-report/', body);
      setReportPath(res.data.report_path);
      alert('Report generated!');
    } catch {
      alert('Report failed');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Doctor Dashboard</h2>

      <input
        type="text"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        placeholder="Enter Patient ID"
        className="w-full px-4 py-2 mb-3 border rounded"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setScanImage(e.target.files[0])}
        className="w-full px-4 py-2 mb-3"
      />
      <div className="space-x-2">
        <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Upload Scan</button>
        <button onClick={handlePrediction} disabled={!eyeScanId} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Predict Disease</button>
        <button onClick={handleSimulation} disabled={!eyeScanId} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Run Simulation</button>
        <button onClick={handleReport} disabled={!prediction} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Generate Report</button>
      </div>

      {prediction && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold mb-2">Prediction:</h3>
          <p><strong>Disease:</strong> {prediction.predicted_disease}</p>
          <p><strong>Surgery:</strong> {prediction.simulation_name}</p>
          <p><strong>ID:</strong> {prediction.simulation_id}</p>
        </div>
      )}

      {simulationResult && (
        <div className="mt-4 text-sm text-gray-600 italic">
          <strong>Simulation Result:</strong> {simulationResult}
        </div>
      )}

      {reportPath && (
        <div className="mt-4">
          <a href={`http://localhost:8000/${reportPath}`} target="_blank" className="text-blue-600 underline">Download Report</a>
        </div>
      )}
    </div>
  );
}
