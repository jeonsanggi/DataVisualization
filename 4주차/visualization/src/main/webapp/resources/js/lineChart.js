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
             
                Highcharts.chart('container', {

                    title: {
                        text: 'Line chart'
                    },
                    
                    subtitle:{
                    	text:""
                    },
                    yAxis: {
                        title: {
                            text: 'Value'
                        }
                    },

                    xAxis: {
                        type: 'category',
                        labels: {
                            rotation: -45,
                            style: {
                                fontSize: '13px',
                                fontFamily: 'Verdana, sans-serif'
                            }
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle'
                    },

                    plotOptions: {
                        series: {
                            label: {
                                connectorAllowed: false
                            },
                            pointStart: 2010
                        }
                    },

                    series: [{
                    	name: 'Wine',
                        data: [
                            [x_data[0], data[num].fixed_acidity],
                            [x_data[1], data[num].volatile_acidity],
                            [x_data[2], data[num].citric_acid],
                            [x_data[3], data[num].residual_sugar],
                            [x_data[4], data[num].chlorides],
                            [x_data[5], data[num].free_sulfur_dioxide],
                            [x_data[6], data[num].total_sulfur_dioxide],
                            [x_data[7], data[num].density],
                            [x_data[8], data[num].pH],
                            [x_data[9], data[num].sulphates],
                            [x_data[10], data[num].alcohol],
                            [x_data[11], data[num].quality]
                        ],
                    }],

                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                legend: {
                                    layout: 'horizontal',
                                    align: 'center',
                                    verticalAlign: 'bottom'
                                }
                            }
                        }]
                    }

                });
            }
             
        });  
      
    });
}