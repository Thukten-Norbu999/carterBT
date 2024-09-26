function chart() {
    const ctx = document.getElementById("canvas").getContext("2d");
    const myLineChart = new Chart(ctx, {
      type: "line", // Specify the type as 'line'
      data: {
        labels: ["January", "February", "March", "April", "May", "June"], // X-axis labels
        datasets: [
          {
            label: "Sales", // Label for the dataset
            data: [12, 19, 3, 5, 2, 3], // Data points
            borderColor: "rgba(75, 192, 192, 1)", // Line color
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Area under the line
            fill: true, // Fill area under the line
            tension: 0.4, // Curve the line slightly
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true, // Start Y-axis from zero
          },
        },
      },
    });
  }
  chart();