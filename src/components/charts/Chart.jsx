import Chart from "react-apexcharts";

function TransactionChart({ income, expenses }) {
  const options = {
    labels: ["Income", "Expense"],
    color: ["#213ebf", "#fd5e53"],
    chart: {
      width: "100px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: {
      mode: null,
    },
    plotOptions: {
      donut: {
        labels: {
          show: false,
        },
      },
    },
    fill: {
      colors: ["#213ebf", "#fd5e53"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
    },
  };

  return (
    <Chart
      options={options}
      series={[income, expenses]}
      type="pie"
      width={"100%"}
      height={"100%"}
    />
  );
}

export default TransactionChart;
