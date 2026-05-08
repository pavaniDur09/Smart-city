"# Smart-city" 
Smart City Monitoring System

A Kafka-based Smart City Monitoring System that collects, processes, and visualizes real-time data streams (e.g., traffic and air pollution).
This project includes a FastAPI backend, Kafka consumers/producers, and a React dashboard frontend.


⚙️ Backend Setup

(Windows)
bash
cd backend
python -m venv venv
venv\Scripts\activate.bat
pip install fastapi uvicorn kafka-python
pip show fastapi

(Linux / macOS)
bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn kafka-python


🐳 Docker Setup (Kafka + Zookeeper)
Start Kafka and Zookeeper using Docker Compose:

bash
docker compose up
docker ps
🔄 Kafka Topics

///Creating a Topics
bash
docker exec -it smart-city-kafka-kafka-1 \
kafka-topics --create --topic traffic-stream \
--bootstrap-server localhost:9092 --partitions 1 --replication-factor 1

///List Topics
bash
docker exec -it smart-city-kafka-kafka-1 \
kafka-topics --list --bootstrap-server localhost:9092

🧩 Running Consumers and Producers
:Consumers
bash
cd consumers
python air-consumer.py
pip install psycopg2-binary
python.exe -m pip install --upgrade pip

:Producers
Run your Kafka producers similarly from the backend directory.

🚀 Running FastAPI Server
bash
cd backend
uvicorn main:app --reload



💻 Frontend Setup
bash
cd smart-city-dashboard
npm install
npm start
Access the dashboard at:
👉 http://localhost:5173


🗄️ PostgreSQL Database

:Check Database Connection
bash
"C:\Program Files\PostgreSQL\18\bin\psql.exe" -U postgres -l
Common Commands
sql
\dt                     -- to list tables
\d table_name           -- to show table details

SELECT COUNT(*) FROM air_pollution_data;
DELETE FROM air_pollution_data;
DROP TABLE table_name;
