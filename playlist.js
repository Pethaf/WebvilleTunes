function handleButtonClick() 
{
	var songInput = document.getElementById("songTextInput");
	var newSong = songInput.value
	if(newSong.length === 0) 
	{
		alert("Please enter a song");
		songInput.placeholder="Error";
		songInput.classList.toggle("error");
	}
	else 
	{
		songInput.classList.remove("Error");
		var songItem = document.createElement("li");
		var songValueNode = document.createTextNode(newSong);
		songItem.appendChild(songValueNode);
		document.getElementById("playlist").appendChild(songItem);
	}

}
function init(){
var button = document.getElementById("addButton");
button.addEventListener("click",handleButtonClick);
}

window.onload = init; 

