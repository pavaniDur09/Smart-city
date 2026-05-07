import { type EnergyRecord } from "@/services/mockApi";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

export default function SolarTable({ data }: { data: EnergyRecord[] }) {
  return (
    <div className="rounded-xl border border-border overflow-hidden max-h-[500px] overflow-y-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Time</TableHead>
            <TableHead className="font-semibold text-end">Solar Output(kW)</TableHead>
            <TableHead className="font-semibold text-end">Region</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((r) => (
            <TableRow key={r.id} className="transition-colors hover:bg-muted/30">
              <TableCell className="text-muted-foreground text-xs">{r.timestamp}</TableCell>
              <TableCell className="text-end font-medium">{r.solar_output.toFixed(2)}</TableCell>
              <TableCell className="text-end">{r.region_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}