$( document ).ready(function() {
	select();
    drawChart();
});

function select(){
	for(var n=0; n<1600; n++){
		var ops = document.getElementById("num").options;
		var op = new Option();
		op.value = n;
		op.text = n;
		ops.add(op);
	}
}
 
function drawChart(){
    $("#drawChart").click(function(){  
        var url="/visualization/data"; 
        var num = document.getElementById('num').value;
        $.ajax({      
            type:"POST",  
            url:url,            
            success:function(args){
                data = args;
                console.log(data[0])
                var x_data = ['fixed_acidity', 'volatile_acidity', 'citric_acid', 'residual_sugar', 'chlorides', 'free_sulfur_dioxide', 'total_sulfur_dioxide', 'density', 'pH', 'sulphates', 'alcohol', 'quality'];
//                var total = data[0].fixed_acidity + data[0].volatile + data[0].citric_acid + data[0].residual_sugar + data[0].chlorides + data[0].free_sulfur_dioxide + data[0].total_sulfur_dioxide + data[0].density + data[0].pH + data[0].sulphates + data[0].alcohol + data[0].quality
                Highcharts.chart('container', {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: 'Wine Pie Chart'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
                    },
                    accessibility: {
                        point: {
                            valueSuffix: '%'
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.2f} %'
                            }
                        }
                    },

                    series: [{
                        name: 'Wine',
                        colorByPoint: true,
                        data: [{
                            name: 'fixed_acidity',
                            y: data[0].fixed_acidity,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'volatile_acidity',
                            y: data[num].volatile_acidity
                        }, {
                            name: 'citric_acid',
                            y: data[num].citric_acid
                        }, {
                            name: 'residual_sugar',
                            y: data[num].residual_sugar
                        }, {
                            name: 'chlorides',
                            y: data[num].chlorides
                        }, {
                            name: 'free_sulfur_dioxide',
                            y: data[num].free_sulfur_dioxide
                        }, {
                            name: 'total_sulfur_dioxide',
                            y: data[num].total_sulfur_dioxide
                        }, {
                            name: 'density',
                            y: data[num].density
                        }, {
                            name: 'pH',
                            y: data[num].pH
                        },{
                            name: 'sulphates',
                            y: data[num].sulphates
                        }, {
                            name: 'alcohol',
                            y: data[num].alcohol
                        }, {
                            name: 'quality',
                            y: data[num].quality
                        }]
                    }]
                });
               
            }
             
        });  
      
    });
}