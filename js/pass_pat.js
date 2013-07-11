function check_pass(ps_form)
	{
		var pass1=ps_form.n1_field.value;
		var pass2=ps_form.n2_field.value;
		if(pass1 != pass2)
		{
			document.getElementById("in_pass").innerHTML="Passwords do not match";
			return false;
		}
		else
		{
			document.getElementById("in_pass").innerHTML="Passwords Match";
			return true;
		}
	}
	
	function pass_len(form_pass)
 	{
    	//alert("fn is OK");
    	var oDiv = document.getElementById("in_pass1");
   	 	//alert(oDiv);
    	//oDiv.innerHTML = "<div style='color:red;'>Medium</div>";
    	oDiv.innerHTML = "Security_Status: ";
   	 	oDiv.innerHTML += (form_pass.n1_field.value.length < 5)? "<div style='color:red;'>**Low..!</div>":((form_pass.n1_field.value.length < 9)?"<div style='color:green;'>*Medium.</div>" : "<div 				style='color:blue;'>Strong.</div>");
 	}
	
	function check_pass2(ps_form)
	{
		var is_tr=(check_pass(ps_form));
		if(!is_tr)
			alert("Passwords Do Not Match");
		if(!(ps_form.i_agree.checked))
		{
			alert("Please Check The Agree Box");
			return false;
		}
		else if(!is_tr)
		{
			return false;
		}
		else
		{
			ps_form.sub_flag=1;
			ps_form.submit();
		}
	}
	
	function clr_len()
	{
		var oDiv = document.getElementById("in_pass1");
		oDiv.innerHTML = "";
	}
	// JavaScript Document