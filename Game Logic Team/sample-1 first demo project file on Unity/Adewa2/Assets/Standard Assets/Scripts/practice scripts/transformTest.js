#pragma strict
var rotationSpeed : float = 20.0;
var speed : float = 10;
function Start () {
//transform.position.z = 30;
//transform.position.x = 20;
}

function Update () {
//	transform.Rotate(0, rotationSpeed*Time.deltaTime, 0);
//	transform.Translate(speed*Time.deltaTime, 0, 0);

//print(transform.position);

}   
function OnMouseDown()
{
	transform.position.z = 5;
	transform.position.x = 1;
	if(transform.position.z == 5 && transform.position.x == 1)
	{
		print("dude, the Box is already at " + transform.position + ".");
		
	}
}