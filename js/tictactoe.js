function paintBoard(boardID,color){
	var board = document.getElementById(boardID);
		
	width = board.width;
	height = board.height;
	context = board.getContext("2d");
	
	context.beginPath();
	context.strokeStyle = color;
	context.lineWidth = 4;
	
	//vertical line one
	context.moveTo((width / 3),0); //(x,y) of first point
	context.lineTo((width / 3), height); //(x,y) of second point
	
	//vertical line two				
	context.moveTo((width / 3) * 2, 0);
	context.lineTo((width / 3) * 2, height);
	
	//horizontal line 1
	context.moveTo(0,(height/3));
	context.lineTo(width,(height/3));
	
	//horizontal line 2
	context.moveTo(0,(height/3)*2);
	context.lineTo(width,(height/3)*2);
	
	context.stroke();
	context.closePath();
	
}