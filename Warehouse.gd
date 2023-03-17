extends Spatial


# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	for i in range(1,4):
		var robot = load("res://robot.tscn").instance()
		robot.set_name("robot" + str(i));
		add_child(robot)
	#var robot2 = load("res://robot.tscn").instance();
	#robot2.set_name("robot2");
	#add_child(robot2)


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass
