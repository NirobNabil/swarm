extends Spatial


# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	var robot1 = load("res://robot.tscn").instance()
	robot1.set_name("robot1");
	add_child(robot1)
	#var robot2 = load("res://robot.tscn").instance();
	#robot2.set_name("robot2");
	#add_child(robot2)


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass
