function ajax_chart(chart, url, data) {
	var data = data || {};
	$.getJSON(url, data).done(function(res) {
		var labels = [];
		var changed_data = [];
		var unchanged_data = [];
		var failed_data = [];
		res.reverse().forEach(function(h, index){
			labels.push(h.Date);
			changed_data.push( h.Changed )
			unchanged_data.push( h.Unchanged )
			failed_data.push( h.Failed )
		})
		chart.data.labels = labels;

                var datasets = [{
                  label: 'Changed',
                  backgroundColor: '#d9edf7',
                  data: changed_data,
	        },{
                  label: 'Unchanged',
                  backgroundColor: '#e7e7e7',
                  data: unchanged_data,
	        },{
                  label: 'Failed',
                  backgroundColor: '#f2dede',
                  data: failed_data,
	       }]
               chart.data.datasets = datasets
	       chart.update();
	       });
}


