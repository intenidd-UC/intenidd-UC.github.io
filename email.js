var shown = false;
function showhideEmail(){
	if(shown){
		document.getElementById('Email').innerHTML = "show my email";
		shown = false;
	}
	else
	{
		var myemail = "<i class='bx bx-envelope'></i>" + "<a href =' mailto: intenidd" + "@" + "mail.uc.edu'> intenidd" + "@" + "mail.uc.edu </a>";
		document.getElementById('Email').innerHTML = myemail;
		shown = true;
	}
}