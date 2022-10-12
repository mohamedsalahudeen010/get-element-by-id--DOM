 
//Assignemt 01: Create a HTML Form
//1.firstname,2.Middlename,3.lastname,4.email,5.password
//Deploy it in Netlify
//Already The elements are there in HTML ,How to use them for accessing
//1.document.getElementById();
//This method is used to extract the unique element using id attribute
//it returns the Single HTML element
function foo(){
    var res=document.getElementById("email").value;
    var res1=document.getElementById("pass").value;
     console.log(res,res1);
    // if(res==="abc@guvi.in" && res1==="123"){
    //     console.log("valid user");
    // }
    // else{
    //     console.log("invalid user");
    }  
    function getvalue(){
        var res1=document.getElementById("firstName").value;
        var res2=document.getElementById("middleName").value;
        var res3=document.getElementById("lastName").value;
        var res4=document.getElementById("email").value;
        var res5=document.getElementById("pass").value;

        console.log(res1,res2,res3,res4,res5)
        
    }