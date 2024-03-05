function toprint()
{
    var result = document.getElementById("info").value
    document.getElementById("datt").innerHTML = result

    var userinput = document.getElementById("info").value

    if(userinput.trim() === "")
    {
       window.alert("Must write the Information")
    }
    
    
}

