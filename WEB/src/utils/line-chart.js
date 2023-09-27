export const lineChart = {
  options: {
    chart: {
      height: "200px",
      width: "200px",
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      categories: ["2009", "2010", "2011", "2012", "2013", "2014"],
    },
  },
  series: [
    {
      data: [23.0, 24.0, 25.0, 22.0, 22.0, 22.0],
    },
  ],
};
/* options: [{
    chart: {
      height: "200px",
      width: "200px",
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      categories: ["2009", "2010", "2011", "2012"],
    },]
  },
  series: {
    data: [24.9656198989, 23.9656198989, 25.9656198989, 22.9656198989],
  }, */

/* const series = [
  {
    data: [24.9656198989, 23.9656198989, 25.9656198989, 22.9656198989],
  },
]; */
