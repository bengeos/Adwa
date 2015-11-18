#pragma strict
//rotation condition flag : ON or OFF
var rotationState : boolean = true;

//rotation speed variable
var rotationSpeed : float = 20;

function Start () {

}

function Update () {
	if(rotationState == true)
	{
		transform.Rotate(0, rotationSpeed * Time.deltaTime, 0);
	}
}

function OnMouseDown()
{
	rotationState = !rotationState;
}
