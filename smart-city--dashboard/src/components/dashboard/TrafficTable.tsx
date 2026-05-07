import { type TrafficRecord } from "@/services/mockApi";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function TrafficTable({ data }: { data: TrafficRecord[] }) {
  return (
    <div className="rounded-xl border border-border overflow-hidden max-h-[500px] overflow-y-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Time</TableHead>
            <TableHead className="font-semibold">Junction</TableHead>
            <TableHead className="font-semibold">Vehicles</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((r) => (
            <TableRow key={r.id} className="transition-colors hover:bg-muted/30">
              <TableCell className="text-muted-foreground text-xs">{r.datetime}</TableCell>
              <TableCell>
                <Badge variant="secondary">J{r.junction}</Badge>
              </TableCell>
              <TableCell className="font-bold">{r.vehicles}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
