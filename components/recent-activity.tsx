import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: "1",
    user: "Alice Johnson",
    action: "Created new account",
    status: "completed",
    date: "2 hours ago",
  },
  {
    id: "2",
    user: "Bob Smith",
    action: "Updated profile",
    status: "completed",
    date: "4 hours ago",
  },
  {
    id: "3",
    user: "Carol White",
    action: "Made a purchase",
    status: "pending",
    date: "5 hours ago",
  },
  {
    id: "4",
    user: "David Brown",
    action: "Submitted feedback",
    status: "completed",
    date: "1 day ago",
  },
  {
    id: "5",
    user: "Emma Davis",
    action: "Requested refund",
    status: "pending",
    date: "2 days ago",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest user actions and events</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell className="font-medium">{activity.user}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>
                  <Badge variant={activity.status === "completed" ? "default" : "secondary"}>
                    {activity.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{activity.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}