from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import psycopg2

app = FastAPI()

# --- CORS (REQUIRED for React) ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- PostgreSQL connection ---
conn = psycopg2.connect(
    dbname="smart_city_db",
    user="postgres",
    password="postgres",
    host="localhost",
    port="5432"
)
cursor = conn.cursor()

def rows_to_dicts(cursor, rows):
    columns = [col[0] for col in cursor.description]
    return [dict(zip(columns, row)) for row in rows]

# --- APIs ---
@app.get("/traffic")
def get_traffic():
    cursor.execute("SELECT * FROM traffic_data ORDER BY id DESC LIMIT 20;")
    rows = cursor.fetchall()
    return rows_to_dicts(cursor, rows)

@app.get("/energy")
def get_energy():
    cursor.execute("SELECT * FROM energy_data ORDER BY id DESC LIMIT 20;")
    rows = cursor.fetchall()
    return rows_to_dicts(cursor, rows)

@app.get("/air")
def get_air():
    cursor.execute("SELECT * FROM air_pollution_data ORDER BY id DESC LIMIT 20;")
    rows = cursor.fetchall()
    return rows_to_dicts(cursor, rows)

@app.get("/noise")
def get_noise():
    cursor.execute("SELECT * FROM noise_data ORDER BY id DESC LIMIT 20;")
    rows = cursor.fetchall()
    return rows_to_dicts(cursor, rows)