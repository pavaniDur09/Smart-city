from kafka import KafkaConsumer
import json
import psycopg2

# PostgreSQL connection
conn = psycopg2.connect(
    dbname="smart_city_db",
    user="postgres",
    password="postgres",
    host="localhost",
    port="5432"
)
cursor = conn.cursor()

consumer = KafkaConsumer(
    "air-pollution-stream",
    bootstrap_servers="localhost:9092",
    value_deserializer=lambda m: json.loads(m.decode("utf-8")),
    auto_offset_reset="earliest",
    enable_auto_commit=True,
    group_id="air-db-group"
)

print("Listening to air-pollution-stream...")

for message in consumer:
    data = message.value
    cursor.execute(
        """
        INSERT INTO air_pollution_data (
            station_id,
            "datetime",
            pm25,
            pm10,
            aqi_target,
            temperature,
            humidity,
            co
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)     
        """,
        (
            data.get("Station_ID"),
            data.get("DateTime"),
            data.get("PM2.5"),
            data.get("PM10"),
            data.get("AQI_Target"),
            data.get("Temp_C"),
            data.get("Humidity_%"),
            data.get("CO")
        )
    )
    conn.commit()
    print("inserted success")