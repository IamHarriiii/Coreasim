# CoreaSim

**AI-Powered Corneal Surgery Planning Tool with 3D Visualization**

CoreaSim is a full-stack web application that allows ophthalmologists to upload patient eye scans, automatically predict corneal diseases using AI, simulate surgical outcomes via biomechanical models, and present patients with interactive 3D visualizations and personalized surgery reports.

---

## 🚀 Features
- Upload eye images (topography/fundus)
- Disease prediction using EfficientNet-B3
- WebAssembly biomechanical simulation (FAKE for demo)
- Automatic PDF surgery report generation
- Interactive 3D eye viewer with disease-based overlays
- Role-based dashboard for Doctors & Patients

---

## 🧠 AI Model
- EfficientNetB3 (Keras/TensorFlow)
- Trained on ODIR dataset
- Predicts diseases: Normal, Diabetes, Glaucoma, Cataract, AMD, Hypertension, Myopia, Other
- Maps prediction to appropriate surgery & simulation ID

---

## 🛠️ Tech Stack

| Layer      | Tools Used                               |
|------------|-------------------------------------------|
| Frontend   | Next.js, Tailwind CSS, React Three Fiber |
| Backend    | Django, Django REST Framework            |
| AI Model   | TensorFlow, Keras, OpenCV, NumPy         |
| 3D Engine  | Three.js, Drei, WebGL                    |
| PDF Gen    | ReportLab                                |
| Storage    | Local (Media folder)                     |

---

## 📁 Project Structure

```
coreasim_project/
├── coreasim_backend/
│   ├── patients/          # Patient + eye scan models
│   ├── ai_inference/      # EfficientNetB3 prediction
│   ├── biomechanics/      # FEA (WASM placeholder)
│   ├── reports/           # PDF generation
├── coreasim_frontend/
│   ├── pages/             # Landing, Login, Doctor, Patient
│   ├── components/        # Reusable + 3D Viewer
│   ├── utils/             # Axios config
```

---

## ⚙️ Setup Instructions

### 🔹 1. Clone Repo & Create Project
```bash
git clone https://github.com/your-org/coreasim.git
cd coreasim_project
```

### 🔹 2. Backend Setup (Django)
```bash
python -m venv venv
source venv/bin/activate  # Windows: .\venv\Scripts\activate
pip install -r requirements.txt
cd coreasim_backend
python manage.py migrate
python manage.py runserver
```

### 🔹 3. Frontend Setup (Next.js)
```bash
cd ../coreasim_frontend
npm install
npm run dev
```

Open the app at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/api/

---

## 📦 API Endpoints

| Endpoint             | Method | Description                            |
|----------------------|--------|----------------------------------------|
| /upload-scan/        | POST   | Uploads an eye scan                    |
| /predict-disease/    | POST   | Predicts disease using EfficientNetB3 |
| /run-simulation/     | POST   | Simulates post-surgery eye            |
| /generate-report/    | POST   | Creates a PDF surgery report          |
| /get-report/<id>/    | GET    | Downloads patient PDF report          |
| /eye-scans/          | GET    | Lists scans by patient ID             |

---

## ✅ Testing

### Backend
```bash
pytest
```

### Frontend
```bash
npm test
```

---

## 📄 License
This project is licensed under the MIT License.

---

## 👥 Authors
- [Your Name / Team]
- [Institution / Organization]

---

## 🌐 Future Work
- Real biomechanical WASM simulation (FEA engine)
- 3D model reconstruction from corneal topography
- Integration with EHR systems
- User authentication & role-based access

---

## 🤝 Contributions
Feel free to fork and submit pull requests!

---

**CoreaSim** — Empowering precision corneal surgery with AI + 3D 👁️

