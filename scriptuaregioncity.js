$(document).ready(function() {
 $.getJSON('uafull.json', function(data) {
            for(var i=0;i<data.areas.length;i++){
                $('#region').append('<option value="'+ i +'" >' + data.areas[i].name + '</option>');

			}
			
		 	$('#region').change(function(event) {
				var htmlOption = '<option value="0">Виберите город</option>';
				var region=$(this).val();
				if (region !==0) {
					for (var i=0;i<data.areas[region].areas.length;i++) {
						htmlOption += '<option>' + data.areas[region].areas[i].name + '</option>';
					}
				}
				$('#city').html(htmlOption);
			});
			
    });
});