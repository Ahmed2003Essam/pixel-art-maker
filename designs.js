// to be honest  Iknow the function of symbol($) from https://www.thoughtco.com/and-in-javascript-2037515 
// I know the function of  (this) from  https://medium.com/quick-code/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8
var height,  width,color
var myTable = document.querySelector('#pixelCanvas');

$('#sizePicker').submit(function(event){
	event.preventDefault();
	height= $('#inputHeight').val();
	width= $ ('#inputWidth').val();
	makeGrid(height,width);
	
})
/**
  * @desc create a grid of squares 
  * @param int $width - number of squares representing the width of the grid
  * @param int $height - number of squares representing the height of the grid
*/
function makeGrid(height,width) {
	myTable.innerHTML="";
	for(let r = 0; r<height; r++){
		var row = document.createElement('tr');
// create a row as long as the value of r smaller than the value of height		
		for ( c = 0 ; c < width; c++){
			var cell= document.createElement('td');
// create a cell as long as the value of c smaller than the value of the width			
			row.appendChild(cell);
// each cell created is inserted in the row 			
		}
		myTable.appendChild(row);
// all rows created  are put in one table 		
}

	$('td').click(function addColor(){
//here we add a function to add color to the cell by event click		
	color = $ ('#colorPicker').val();
// we take the color from the color picker	
	if($(this).attr('style')){
		$(this).removeAttr('style')
// we remove the color  we put to the cell by another click on it		
	} else {
		$(this).attr('style' , 'background-color:' + color);
	}
})

};	
// Your code goes here