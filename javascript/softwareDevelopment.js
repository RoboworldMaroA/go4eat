//Not Finished
var codeSnippets = document.getElementsByClassName('selectCode'),
    length = codeSnippets.length,
    i;

for (i = 0; i < length; i++) {
  
  var code = codeSnippets[i].innerHTML,
      node = document.createTextNode(code);
  
  codeSnippets[i].innerHTML = '';
  codeSnippets[i].appendChild(node);
}


//function used to copy code to the clipboard

const copyToClipboard = async () => {

    try {
      var element = document.querySelector(".selectCode");
      await navigator.clipboard.writeText(element.textContent);
      console.log("Text copied to clipboard!");
      console.log(navigator.clipboard.read.length);
      // Optional: Display a success message to the user
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      // Optional: Display an error message to the user
    }
  };



