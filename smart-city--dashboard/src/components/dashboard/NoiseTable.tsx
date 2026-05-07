import { type NoiseRecord } from "@/services/mockApi";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function NoiseTable({ data }: { data: NoiseRecord[] }) {
  return (
    <div className="rounded-xl border border-border overflow-hidden max-h-[500px] overflow-y-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Station</TableHead>
            <TableHead className="font-semibold">Date</TableHead>
            <TableHead className="font-semibold">Day dB(A)</TableHead>
            <TableHead className="font-semibold">Night dB(A)</TableHead>
            <TableHead className="font-semibold">Day Limit</TableHead>
            <TableHead className="font-semibold">Night Limit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((r) => (
            <TableRow key={r.id} className="transition-colors hover:bg-muted/30">
              <TableCell>
                <Badge variant="secondary">{r.station}</Badge>
              </TableCell>
              <TableCell className="text-muted-foreground text-xs">{r.timestamp}</TableCell>
              <TableCell className={`font-bold ${r.day_noise > r.day_limit ? "text-destructive" : ""}`}>
                {r.day_noise}
              </TableCell>
              <TableCell className={`font-bold ${r.night_noise > r.night_limit ? "text-destructive" : ""}`}>
                {r.night_noise}
              </TableCell>
              <TableCell className="text-muted-foreground">{r.day_limit}</TableCell>
              <TableCell className="text-muted-foreground">{r.night_limit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
