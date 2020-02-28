<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
 
<title>Home</title>
    <%@include file="./common_resource.jsp"%>
   	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/pieChart.js"></script>
	<link href="${pageContext.request.contextPath}/resources/css/pieChart.css" rel="stylesheet" />
 
</head>
<body>
    <button id="drawChart">Create</button>
    <figure class="highcharts-figure">
	    <div id="container"></div>
	</figure>
</body>
</html>
     