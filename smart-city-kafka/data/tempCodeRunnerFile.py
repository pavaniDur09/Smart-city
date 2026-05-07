import pandas as pd

# Load original dataset
input_file = "data/station_month.csv"   # change if needed
output_file = "data/noise_small.csv"

# Read CSV
df = pd.read_csv(input_file)

# Take first 200 rows (safe & reproducible)
df_small = df.head(200)

# Save reduced dataset
df_small.to_csv(output_file, index=False)

print(f"Reduced dataset saved with {len(df_small)} rows.")