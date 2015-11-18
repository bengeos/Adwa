#pragma strict

internal var targetObject : Transform;

function Start()
{
	targetObject = gameObject.Find("First Person Controller").transform;

}

function Update () {
	if(targetObject)
	{
		var dist : float = Vector3.Distance(targetObject.position, this.transform.position);
		print("Distance to object is " + dist);
	}
}