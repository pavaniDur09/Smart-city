import pandas as pd

input_file = "data/smart_city_energy_dataset.csv"
output_file = "data/energy_small.csv"

df = pd.read_csv(input_file)

# Keep only 200 rows for streaming demo
df_small = df.head(200)

df_small.to_csv(output_file, index=False)

print(f"Energy dataset reduced to {len(df_small)} rows.")