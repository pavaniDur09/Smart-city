from kafka import KafkaProducer
import json
import pandas as pd
import time

# Kafka producer
producer = KafkaProducer(
    bootstrap_servers='localhost:9092',
    value_serializer=lambda v: json.dumps(v).encode('utf-8')
)

# Load dataset
df = pd.read_csv(r"C:\Users\palla\OneDrive - University of East London\6000\smart-city-kafka\smart-city-kafka\data\noise_small.csv")

start_time = time.time()
count = 0

print("Streaming noise data...")

for _, row in df.iterrows():
    message = row.to_dict()

    # Add processing timestamp for evaluation
    message["processed_at"] = time.time()

    try:
        producer.send("noise-stream", value=message)
        print("Sent:", message)

        count += 1
        time.sleep(0.5)  # simulate real-time

    except Exception as e:
        print("Error:", e)

producer.flush()
end_time = time.time()

print(f"Sent {count} messages in {end_time - start_time:.2f} seconds")