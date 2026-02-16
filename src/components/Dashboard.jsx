import { useEffect, useState } from "react";
import { getTasks } from "../services/api";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
  Box,
  Divider,
  Paper
} from "@mui/material";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTasks()
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );

  // Task counts
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "completed").length;
  const pending = tasks.filter((t) => t.status === "pending").length;

  const high = tasks.filter((t) => t.priority === "high").length;
  const medium = tasks.filter((t) => t.priority === "medium").length;
  const low = tasks.filter((t) => t.priority === "low").length;

  // Chart data
  const statusData = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending }
  ];

  const priorityData = [
    { name: "High", value: high },
    { name: "Medium", value: medium },
    { name: "Low", value: low }
  ];

  const COLORS = ["#4caf50", "#f44336"];

  // Cards data
  const summaryCards = [
    {
      title: "Total Tasks",
      value: total,
      gradient: "linear-gradient(135deg, #1976d2, #42a5f5)"
    },
    {
      title: "Completed",
      value: completed,
      gradient: "linear-gradient(135deg, #2e7d32, #66bb6a)"
    },
    {
      title: "Pending",
      value: pending,
      gradient: "linear-gradient(135deg, #d32f2f, #ef5350)"
    },
    {
      title: "High Priority",
      value: high,
      gradient: "linear-gradient(135deg, #f57c00, #ffb74d)"
    }
  ];

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {/* Main Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1250px",
          px: { xs: 1, md: 2 }
        }}
      >
        {/* Heading */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Dashboard Overview
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={2}>
          Monitor tasks, track completion, and stay productive 🚀
        </Typography>

        <Divider sx={{ mb: 4 }} />

        {/* Summary Cards */}
        <Grid container spacing={3} mb={5}>
          {summaryCards.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  borderRadius: 4,
                  height: "100%",
                  color: "white",
                  background: item.gradient,
                  boxShadow: 4,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 10
                  }
                }}
              >
                <CardContent>
                  <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                    {item.title}
                  </Typography>

                  <Typography variant="h3" fontWeight="bold" mt={1}>
                    {item.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Charts Section */}
        <Grid container spacing={4}>
          {/* Pie Chart */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: { xs: 2, md: 4 },
                height: 480,
                borderRadius: 4,
                boxShadow: 3
              }}
            >
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Task Status Overview
              </Typography>

              <ResponsiveContainer width="100%" height="92%">
                <PieChart>
                  <Pie
                    data={statusData}
                    dataKey="value"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    label
                  >
                    {statusData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Bar Chart */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: { xs: 2, md: 4 },
                height: 480,
                borderRadius: 4,
                boxShadow: 3
              }}
            >
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Priority Distribution
              </Typography>

              <ResponsiveContainer width="100%" height="92%">
                <BarChart data={priorityData}>
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip cursor={{ fill: "transparent" }} />
                  <Legend />
                  <Bar dataKey="value" fill="#1976d2" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
