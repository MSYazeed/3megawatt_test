$(document).ready(function(){
   sorting();
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
   
   $("#table tr").click(function() {										// if user clicks on row
		
		if ($("tr").index(this) != 0){										// if not table header
			var user_id = $(this).find('td:eq(0)').text();					// get the clicked row's user id
			window.location = 'http://127.0.0.1:5000/view/'+user_id;		// go to the user's page
		}
	});
	
   $("#sel1").change(function(){sorting();});								// if sorting option changed
   $("#sel2").change(function(){sorting();});								// ''
   
   function sorting()
   {
	    var sorting_tag    = $( "#sel1 option:selected" ).index(); 			//getting index of sorting tag
		var sorting_option = $( "#sel2 option:selected" ).index(); 			//getting index of sorting option (asc or desc)
		var table_body 	   = $( '#table tbody' );
		
		table_body.find('tr').sort(function(a,b){ 
			
			var selected_col1 = $(a).find('td:eq('+sorting_tag+')').text(); // column to sort with using the sorting tag
			var selected_col2 = $(b).find('td:eq('+sorting_tag+')').text(); // same column for comparison
            
			if (sorting_tag == 0){											// if the sorting tag is ID (numeric)
				if (sorting_option == 0){									// if asc 
					return (+selected_col1 > +selected_col2) ? 1 : 0;         
				}
				else{														// else desc
					return (+selected_col1 > +selected_col2) ? 0 : 1;          
				}
			}
			else{															// if sorting tag isn't numeric
				if (sorting_option == 0){									// if asc
					return (selected_col1 > selected_col2) ? 1 : 0;         
				}
				else{														// else desc
					return (selected_col1 > selected_col2) ? 0 : 1;        	  
				}
			}
		
		}).appendTo(table_body);
   }
 

}); 