<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width-device-width, initial-scale-1.0">
	<meta http-equiv="X-UA-Compatible" content="ie-edge">
	<title>Chart Main</title>
	<style>
		.grid_item{
			float:left;
		}
		
	</style>
</head>
<body>
	<div>
		<div class="grid_item" id="barChart" >
			<a href="./barChart"><img src="/resources/images/barChart.PNG" width="200" height="200"></a>
			<div><a href="./barChart">BarChart</a></div>
		</div>
		<div class="grid_item" id="lineChart">
			<a href="./lineChart"><img src="/resources/images/lineChart.PNG" width="200" height="200"></a>
			<div><a href="./lineChart">lineChart</a></div>
		</div>
		<div class="grid_item" id="pieChart">
			<a href="./pieChart"><img src="/resources/images/pieChart.PNG" width="200" height="200"></a>
			<div><a href="./pieChart">pieChart</a></div>
		</div>
	</div>
</body>
</html>