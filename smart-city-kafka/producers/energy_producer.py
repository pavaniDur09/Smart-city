from kafka import KafkaProducer
import json
import pandas as pd
import time

producer = KafkaProducer(
    bootstrap_servers='localhost:9092',
    value_serializer=lambda v: json.dumps(v).encode('utf-8')
)

df = pd.read_csv(r"C:\Users\palla\OneDrive - University of East London\6000\smart-city-kafka\smart-city-kafka\data\energy_small.csv")

start_time = time.time()
count = 0

print("Streaming energy data...")
# Remove leading/trailing spaces from column names
df.columns = df.columns.str.strip()

for _, row in df.iterrows():
    message = row.to_dict()
    message["processed_at"] = time.time()

    try:
        producer.send("energy-stream", value=message)
        count += 1
        time.sleep(0.5)
    except Exception as e:
        print("Kafka send error:", e)

producer.flush()
end_time = time.time()

print(f"Sent {count} energy messages in {end_time - start_time:.2f} seconds")