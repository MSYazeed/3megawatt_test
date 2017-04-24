$(document).ready(function(){

   $("#search-btn").click(function(){
	   
		var query = $("#system-search").val(); 										  // search term input
		
		var table_rows = $("#table tr"); 											  // table rows
		
		var query_found = false;			   										  // boolean variable to check if search term is found
		
		for (i = 1; i < table_rows.length; i++) { 						  			  // loop over rows
			
			for (j = 0; j < table_rows[i].cells.length; j++) { 						  // loop over columns
				
				cell = table_rows[i].cells[j];                 						  // get the cell in row
				
				if (cell.innerHTML.toLowerCase().indexOf(query.toLowerCase()) > -1) { // check if the entered term exists in any of the cells
					query_found = true;												  // search term found !
				}
				
			}
			
			if (query_found) {
				table_rows[i].style.display = "";									  // display or keep row if the seach term found in any of its cells
			} 
			else {
				table_rows[i].style.display = "none";								  // hide row if search term wasn't found in any of its cells
			}
			query_found = false;								
			
		}	
   });

}); 