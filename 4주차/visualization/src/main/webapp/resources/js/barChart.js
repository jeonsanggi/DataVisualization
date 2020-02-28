$( document ).ready(function() {
    drawChart();
});
 
 
function drawChart(){
    $("#drawChart").click(function(){  
        var url="/visualization/data"; 
        
        $.ajax({      
            type:"POST",  
            url:url,            
            success:function(args){
                data = args;
                console.log(data[0])
                var x_data = ['fixed_acidity', 'volatile_acidity', 'citric_acid', 'residual_sugar', 'chlorides', 'free_sulfur_dioxide', 'total_sulfur_dioxide', 'density', 'pH', 'sulphates', 'alcohol', 'quality'];
                
                Highcharts.chart('container', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Wine Bar Chart'
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
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Value'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    tooltip: {
                        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
                    },
                    series: [{
                        name: 'Wine',
                        data: [
                            [x_data[0], data[0].fixed_acidity],
                            [x_data[1], data[0].volatile_acidity],
                            [x_data[2], data[0].citric_acid],
                            [x_data[3], data[0].residual_sugar],
                            [x_data[4], data[0].chlorides],
                            [x_data[5], data[0].free_sulfur_dioxide],
                            [x_data[6], data[0].total_sulfur_dioxide],
                            [x_data[7], data[0].density],
                            [x_data[8], data[0].pH],
                            [x_data[9], data[0].sulphates],
                            [x_data[10], data[0].alcohol],
                            [x_data[11], data[0].quality]
                        ],
                        dataLabels: {
                            enabled: true,
                            rotation: -90,
                            color: '#FFFFFF',
                            align: 'right',
                            format: '{point.y:.1f}', // one decimal
                            y: 10, // 10 pixels down from the top
                            style: {
                                fontSize: '13px',
                                fontFamily: 'Verdana, sans-serif'
                            }
                        }
                    }]
                });
            }
             
        });  
      
    });
}