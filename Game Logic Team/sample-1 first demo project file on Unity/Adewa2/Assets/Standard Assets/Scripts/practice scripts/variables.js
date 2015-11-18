#pragma strict


var health : int = 0;
var someString : String = "some string";
var someName : String = "Robel";
var someObject : GameObject;
var mySpeed : float = 24.0;
var truthValue : boolean = false;
function Start () {
Debug.Log("Message from the start function");
print("dotto");
JustAFunction();
}

function Update () {
//Debug.Log("Message from the update function");
}
function JustAFunction(){
print("Hey " + someName +", Glad to have you aboard");
}