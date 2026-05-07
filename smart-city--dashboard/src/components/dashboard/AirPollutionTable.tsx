import { type AirPollutionRecord } from "@/services/mockApi";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function AirPollutionTable({ data }: { data: AirPollutionRecord[] }) {
  return (
    <div className="rounded-xl border border-border overflow-hidden max-h-[500px] overflow-y-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Station</TableHead>
            <TableHead className="font-semibold">DateTime</TableHead>
            <TableHead className="font-semibold text-end">PM2.5</TableHead>
            <TableHead className="font-semibold text-end">PM10</TableHead>
            <TableHead className="font-semibold text-end">Temp</TableHead>
            <TableHead className="font-semibold text-end">Humidity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((r) => (
            <TableRow key={r.id} className="transition-colors hover:bg-muted/30">
              <TableCell>
                <Badge variant="outline">{r.station_id}</Badge>
              </TableCell>
              <TableCell className="text-muted-foreground text-xs">{r.datetime}</TableCell>
              <TableCell className="text-end font-medium">{r.pm25}</TableCell>
              <TableCell className="text-end font-medium">{r.pm10}</TableCell>
              <TableCell className="text-end">{r.temperature}°</TableCell>
              <TableCell className="text-end">{r.humidity}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
