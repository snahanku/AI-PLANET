# AI-PLANET
An AI-powered chat application that reads PDF documents and allows users to ask questions about their content in natural language.

🚀 Features
Upload and process PDF files


Interact with AI to query PDF content


FastAPI backend with LangChain integration


React.js frontend with a chat-style interface


Supports local LLMs using Ollama



🛠️ Installation Guide
📦 Backend Setup (FastAPI + NLP)
1. Install Dependencies
You can install packages manually:
pip install fastapi uvicorn python-multipart sqlalchemy pydantic fitz PyMuPDF aiofiles
pip install langchain
pip install python-dotenv  # optional

Or use the requirements.txt file:
# Create a virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install all dependencies
pip install -r requirements.txt

2. Install Ollama (for local LLM)
Download and install from: https://ollama.com
After installation, verify with:
ollama --version

Then run:
ollama run llama3


▶️ Running the FastAPI Backend
# From the project root
uvicorn main:app --reload


💻 Frontend Setup (React.js)
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev


🧪 Development Workflow
Open two terminals:
Terminal 1: Backend
cd FastapiTut
source venv/bin/activate  # Windows: .\venv\Scripts\activate
uvicorn main:app --reload

Terminal 2: Frontend
cd FastapiTut/frontend
npm run dev


🌐 Access the App
Visit: http://localhost:5173
 You should now see a chat interface for uploading and querying PDFs.
Example UI Screenshot:
 📂 Google Drive Link


