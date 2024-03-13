function toprint()
{
    //---------for pop up-------------
    var userinput = document.getElementById("info").value

    if(userinput.trim() === "")
    {
       window.alert("Must write the Information")
    }

    // -----------printing data on div-----------
    var userInput = document.getElementById("info").value;
    var currentContent = document.getElementById("datt").innerHTML;
    document.getElementById("datt").innerHTML = currentContent + "<br>" + userInput;
    document.getElementById("info").value = "";

}
function toprint() {
    var userInput = document.getElementById("info").value;
    if (userInput.trim() !== "") {
      var listItem = document.createElement("LI");
      listItem.textContent = userInput;
  
      var closeButton = document.createElement("SPAN");
      closeButton.className = "close";
      closeButton.innerHTML = "\u00D7";
      closeButton.addEventListener("click", function () {
        this.parentElement.style.display = "none";
      });
  
      listItem.appendChild(closeButton);
      document.getElementById("datt").appendChild(listItem);
  
      document.getElementById("info").value = "";
    }
  }
  



  //     var myNodelist = document.getElementsByTagName("LI");
//     var i;
//     for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
//    }

// // Add event listeners for the close buttons (to remove the corresponding LI element)
//     var closeButtons = document.getElementsByClassName("close");
//     for (var j = 0; j < closeButtons.length; j++) {
//     closeButtons[j].addEventListener("click", function() {
//     var listItem = this.parentElement;
//     listItem.style.display = "none";
//   });
// }

    
    // -----------printing data on div-----------
    // var result = document.getElementById("info").value
    // document.getElementById("datt").innerHTML = result


    // var store = document.getElementById("info").value;
    // document.getElementById("datt").innerHTML = store;


    //  for(i = 0; i < store.length; i++)
    // {
    //      document.getElementById("datt").innerHTML = store
    // }


    // var store = document.getElementById("do4").value

   

    // var store = document.getElementById("do4").value
    // document.getElementById("datt").innerHTML = store

    // for(store = 0; store <= 100; store++)
    // {
    //     document.write(store)
    // }
    
  

    //  var store = document.getElementById("do4").value
    
    // if(store.filter() === " ")
    // {
    //    document.getElementById("datt").value = store
    // }


