extends Spatial


# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.

func _process(delta):
	if Input.is_action_pressed(("ui_right")):
		transform.origin.x -= .1
	if Input.is_action_pressed(("ui_left")):
		transform.origin.x += .1
	if Input.is_action_pressed(("ui_down")):
		transform.origin.z += .1
	if Input.is_action_pressed(("ui_up")):
		transform.origin.z -= .1
	if Input.is_action_pressed(("ui_go_upward")):
		transform.origin.y += .5
	if Input.is_action_pressed(("ui_go_downward")):
		transform.origin.y -= .5
	
	if Input.is_action_pressed(("ui_rotate_x_forward")):
		transform.basis.z = transform.basis.z.rotated(Vector3(1,0,0), .01)
	if Input.is_action_pressed(("ui_rotate_x_backward")):
		transform.basis.z = transform.basis.z.rotated(Vector3(1,0,0), -.01)
	
	if Input.is_action_pressed(("ui_rotate_y_left")):
		transform.basis.y = transform.basis.y.rotated(Vector3(1,0,0), .01)
	if Input.is_action_pressed(("ui_rotate_y_right")):
		transform.basis.y = transform.basis.y.rotated(Vector3(1,0,0), -.01)
	
	
		

# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass
