$(document).ready(function()
{


	$("input").click(function()
	{
	   
	   var colours = { "colour1":"Red", "colour2":"Blue", "colour3":"Green"};
	   
	   
	   $.each(colours, function(key, value)
	   {
		   
		   console.log("Key: " + key);
		   console.log("Value: " + value);
		   
		   
		     var option = $("<option/>",
			 {
				 value : key,
				 penguin : "grey",
				 text : value
			 });
	   
		   console.log(option);
		   
		   $("#divSelect").append(option);
		   
	   });
	   
	   
      
	});
	
	
});