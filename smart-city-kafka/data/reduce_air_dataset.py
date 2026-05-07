import pandas as pd

input_file = "data/UrbanAirPollutionDataset.csv"
output_file = "data/air_small.csv"

df = pd.read_csv(input_file)

# Reduce to 200 rows for controlled streaming
df_small = df.head(200)

df_small.to_csv(output_file, index=False)

print(f"Air pollution dataset reduced to {len(df_small)} rows.")