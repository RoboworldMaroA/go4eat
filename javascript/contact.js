//Validation form contact
function validateName(){  
	var name=document.myform.name.value;  
	var surname=document.myform.surname.value;
    var message=document.myform.message.value; 	
  
	if (name == null || name == "")
	{  
		swal( "Input your name, please!" );  
		return false ;  
	  }
	else if(surname == null||surname == ""){  
		swal("Input Surname, please!");  
		return false;  
	} 
    else if(message==null || message==""){  
		swal("Input your query, Please.");  
	return false;  
	}  	
	else{
		swal("Your message was sent, we back to you ASAP, Thank You.");  	
	return true
	}	
}
 










