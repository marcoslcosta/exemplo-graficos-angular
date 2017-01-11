'use strict';

var testechart = angular.module('testechart', ["highcharts-ng"]);

testechart.controller('testecontroller', ['$scope', '$http', function ($scope, $http) {
  $scope.chartTypes = [
    { "id": "line", "title": "Line" },
    { "id": "spline", "title": "Smooth line" },
    { "id": "area", "title": "Area" },
    { "id": "areaspline", "title": "Smooth area" },
    { "id": "column", "title": "Column" },
    { "id": "bar", "title": "Bar" },
    { "id": "pie", "title": "Pie" },
    { "id": "scatter", "title": "Scatter" },
    { "id": "funnel", "title": "funnel" },

  ];

  //estilos suportados
  $scope.dashStyles = [
    { "id": "Solid", "title": "Solid" },
    { "id": "ShortDash", "title": "ShortDash" },
    { "id": "ShortDot", "title": "ShortDot" },
    { "id": "ShortDashDot", "title": "ShortDashDot" },
    { "id": "ShortDashDotDot", "title": "ShortDashDotDot" },
    { "id": "Dot", "title": "Dot" },
    { "id": "Dash", "title": "Dash" },
    { "id": "LongDash", "title": "LongDash" },
    { "id": "DashDot", "title": "DashDot" },
    { "id": "LongDashDot", "title": "LongDashDot" },
    { "id": "LongDashDotDot", "title": "LongDashDotDot" }
  ];

  $scope.chartSeries = [
    { "name": "Janeiro", "data": [1, 2, 4, 7, 3, 6, 8, 1], id: 's1' },
    { "name": "Fevereiro", "data": [3, 1, 5, 2, 1, 1, 1, 2], id: 's2' },
    { "name": "Marco", "data": [5, 2, 2, 3, 5, 10, 1, 3], id: 's3' },
    { "name": "Abril", "data": [5, 2, 2, 3, 5, 10, 1, 3], id: 's5' },
    { "name": "Maio", "data": [5, 2, 2, 3, 5, 10, 1, 3], id: 's6' },
    { "name": "Junho", "data": [5, 2, 2, 3, 5, 10, 1, 3], id: 's6' }

  ];


  $scope.contador = 0;
  $scope.AtualGrafico = $scope.chartTypes[$scope.contador].title;



  $scope.change = function () {

    $scope.contador = $scope.chartTypes.length != $scope.contador + 1 ? $scope.contador + 1 : 0;
    $scope.chartConfig.chart.type = $scope.chartTypes[$scope.contador].id;

    $scope.AtualGrafico = $scope.chartTypes[$scope.contador].title;

    if ($scope.chartConfig.chart.type == "pie" || $scope.chartConfig.chart.type == "funnel" ) {
      $scope.chartConfig = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: $scope.chartConfig.chart.type
        },
        title: {
          text: 'Browser market shares January, 2015 to May, 2015'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
            }
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: 'Microsoft Internet Explorer',
            y: 56.33
          }, {
            name: 'Chrome',
            y: 24.03,
            sliced: true,
            selected: true
          }, {
            name: 'Firefox',
            y: 10.38
          }, {
            name: 'Safari',
            y: 4.77
          }, {
            name: 'Opera',
            y: 0.91
          }, {
            name: 'Proprietary or Undetectable',
            y: 0.2
          }]
        }]
      }
    }
    else {
      $scope.chartConfig = {

        chart: {
          type: $scope.chartTypes[$scope.contador].id
        },
        plotOptions: {
          series: {
            stacking: ''
          }
        },
        xAxis: {
          categories: [
            'Apples',
            'Pears',
            'Oranges',
            'Bananas',
            'Grapes',
            'Plums',
            'Strawberries',
            'Raspberries']
        },

        series: $scope.chartSeries,
        title: {
          text: 'Um simples grafico de exemplo'
        }
      }
    }

  };


  $scope.chartConfig = {

    chart: {
      type: $scope.chartTypes[$scope.contador].id
    },
    plotOptions: {
      series: {
        stacking: ''
      }
    },
    xAxis: {
      categories: [
        'Apples',
        'Pears',
        'Oranges',
        'Bananas',
        'Grapes',
        'Plums',
        'Strawberries',
        'Raspberries']
    },

    series: $scope.chartSeries,
    title: {
      text: 'Um simples grafico de exemplo'
    }
  }

  $scope.reflow = function () {
    $scope.$broadcast('highchartsng.reflow');
  };


}]);