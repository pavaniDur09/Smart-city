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
    "traffic-stream",
    bootstrap_servers="localhost:9092",
    value_deserializer=lambda m: json.loads(m.decode("utf-8")),
    auto_offset_reset="earliest",
    enable_auto_commit=True,
    group_id="traffic-db-group"
)

print("Listening to traffic-stream...")

for message in consumer:
    data = message.value

    cursor.execute(
        """
        INSERT INTO traffic_data (datetime, junction, vehicles, ID)
        VALUES (%s, %s, %s, %s)
        """,
        (
            data.get("DateTime"),
            data.get("Junction"),
            data.get("Vehicles"),
            data.get("ID")
        )
    )
    conn.commit()
    print('inserted')