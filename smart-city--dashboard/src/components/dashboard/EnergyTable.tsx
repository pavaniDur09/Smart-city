import { type EnergyRecord } from "@/services/mockApi";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function EnergyTable({ data }: { data: EnergyRecord[] }) {
  return (
    <div className="rounded-xl border border-border overflow-hidden max-h-[500px] overflow-y-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Timestamp</TableHead>
            <TableHead className="font-semibold text-end">Electricity</TableHead>
            <TableHead className="font-semibold text-end">Load Type</TableHead>
            <TableHead className="font-semibold text-end">Current Level</TableHead>
            <TableHead className="font-semibold text-end">Region</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((r) => (
            <TableRow key={r.id} className="transition-colors hover:bg-muted/30">
             
              <TableCell className="text-muted-foreground text-xs">{r.timestamp}</TableCell>
              <TableCell className="text-end font-medium">{r.electricity_load.toFixed(2)}</TableCell>
              <TableCell className="text-end">{r.load_type}</TableCell>
              <TableCell className="text-end">{r.current_level.toFixed(2)}</TableCell>
              <TableCell className="text-end">{r.region_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
