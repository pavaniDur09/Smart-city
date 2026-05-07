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
    "energy-stream",
    bootstrap_servers="localhost:9092",
    value_deserializer=lambda m: json.loads(m.decode("utf-8")),
    auto_offset_reset="earliest",
    enable_auto_commit=True,
    group_id="energy-db-group"
)

print("Listening to energy-stream...")

for message in consumer:
    data = message.value
     
     # Debugging: Check keys and solar value
    solar_value = data.get("Solar PV Output")

    # Convert to float and handle missing values
    try:
        solar_value = float(solar_value) if solar_value is not None else 0.0
    except (ValueError, TypeError):
        solar_value = 0.0


    cursor.execute(
    """
    INSERT INTO energy_data (
        timestamp,
        electricity_load,
        transformer_level,
        load_type,
        current_level,
        region_id,
        solar_output
    )
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    """,
    (
        data.get("Timestamp"),
        data.get("Historical Electricity Load"),
        data.get("Transformer Load Level"),
        data.get("Load Sector Type"),
        data.get("Current Level"),
        data.get("Region ID"),
        solar_value,
    )
    )
    conn.commit()
    print("Inserted")