import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  type?: "area" | "bar" | "line";
  dataKeys: { key: string; color: string; name: string }[];
}

export default function DashboardChart({ data, type = "area", dataKeys }: Props) {
  const tooltipStyle = {
    background: "hsl(var(--card))",
    border: "1px solid hsl(var(--border))",
    borderRadius: "0.75rem",
    fontSize: 13,
  };

  if (type === "bar") {
    return (
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 80%)" strokeOpacity={0.3} />
            <XAxis dataKey="time" tick={{ fontSize: 11 }} stroke="hsl(0, 0%, 50%)" />
            <YAxis tick={{ fontSize: 11 }} stroke="hsl(0, 0%, 50%)" />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            {dataKeys.map((dk) => (
              <Bar key={dk.key} dataKey={dk.key} fill={dk.color} name={dk.name} radius={[10, 10, 0, 0]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (type === "line") {
    return (
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 80%)" strokeOpacity={0.3} />
            <XAxis dataKey="time" tick={{ fontSize: 11 }} stroke="hsl(0, 0%, 50%)" />
            <YAxis tick={{ fontSize: 11 }} stroke="hsl(0, 0%, 50%)" />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            {dataKeys.map((dk) => (
              <Line key={dk.key} type="monotone" dataKey={dk.key} stroke={dk.color} strokeWidth={3} name={dk.name} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <defs>
            {dataKeys.map((dk) => (
              <linearGradient key={dk.key} id={`grad-${dk.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={dk.color} stopOpacity={0.8} />
                <stop offset="95%" stopColor={dk.color} stopOpacity={0.1} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 80%)" strokeOpacity={0.3} />
          <XAxis dataKey="time" tick={{ fontSize: 11 }} stroke="hsl(0, 0%, 50%)" />
          <YAxis tick={{ fontSize: 11 }} stroke="hsl(0, 0%, 50%)" />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          {dataKeys.map((dk) => (
            <Area key={dk.key} type="monotone" dataKey={dk.key} stroke={dk.color} strokeWidth={3} fillOpacity={1} fill={`url(#grad-${dk.key})`} name={dk.name} />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
