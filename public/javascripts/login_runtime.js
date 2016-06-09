
$(document).ready(function(){
        //$('[data-toggle="tooltip"]').tooltip();
    $('.si_submit').click(function(){
          
             // var uname = $('#si_uname').value;
             // var pw = $('#si_pw').value;
             var uname = document.getElementById('#si_uname');
             var pw = document.getElementById('#si_pw');
            //console.log(uname);
            if (uname === null || pw === null ) {
                alert("Please enter a value");
            } else {
                console.log("Successfully signed in");
            }

        });
    });
