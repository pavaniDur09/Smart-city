from kafka import KafkaConsumer
import json
import psycopg2

# DB connection
conn = psycopg2.connect(
    dbname="smart_city_db",
    user="postgres",
    password="postgres",
    host="localhost",
    port="5432"
)
cursor = conn.cursor()

consumer = KafkaConsumer(
    "noise-stream",
    bootstrap_servers="localhost:9092",
    value_deserializer=lambda m: json.loads(m.decode("utf-8")),
    auto_offset_reset="earliest",
    enable_auto_commit=True,
    group_id="noise-db-group"
)

for message in consumer:
    data = message.value
    
    year = data.get("Year")
    month = data.get("Month")

    if year and month:
        timestamp = f"{int(year)}-{int(month):02d}-01"
    else:
        timestamp = None

    cursor.execute(
          """
    INSERT INTO noise_data (
        station,
        timestamp,
        day_noise,
        night_noise,
        day_limit,
        night_limit
    )
    VALUES (%s, %s, %s, %s, %s, %s)
    """,
    (
        data.get("Station"),
        timestamp,
        data.get("Day in Leq dB(A)"),
        data.get("Night in Leq dB(A)"),
        data.get("DayLimit"),
        data.get("NightLimit")
    )
    )

    conn.commit()
    print("Inserted:", data)