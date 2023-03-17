extends KinematicBody

signal position_update(position)


var _destination: Vector3 
var count = 1


func _ready():
	get_parent().get_node("BotDestinationSubscriber").connect("set_destination", self, "_on_set_destination")


const errorThreshold = 0.01
func checkEqual( pos1:Vector3, pos2:Vector3 ):
	return pos1.distance_to(pos2) < errorThreshold

var once = false
func _process(delta):

	var cur_pos = self.transform.origin

	emit_signal("position_update", cur_pos)
	
	if( _destination.x < 0 or _destination.z < 0 ):
		return
	if( checkEqual( cur_pos, _destination ) ):
		return
		

	if Input.is_action_pressed(("ui_right")):
		print("came")
			
	print(self.transform.origin, _destination)

	
	move_and_slide( (_destination - cur_pos).normalized() * (delta*50) )
		

func _on_set_destination( destination ):
	print(" received ", destination)
	_destination = destination
	count = count+1
	print(count)

