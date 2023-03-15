extends ROSPublisher

# it is mandatory to set attributes _topic and _msg_type and call initiate_connection 
# because base class ROSWEBSOCKET uses these attributes in initiate_connection
# function to call the receive_msg function of this node when data of _msg_type is 
# received on topic of _topic 
func _ready():
	_topic = "/position/" +  get_parent().name
	_msg_type = "std_msgs/msg/String"
	get_parent().get_node("KinematicBody").connect("position_update", self, "_on_position_update")
	initiate_connection()

func vec_to_pos(val: Vector3):
	return {
		'x': val.x,
		'y': val.z  ## notice that y is equal to z
	}

func _init_msg():
	var init_pos = Vector3(0,0,0)
	_msg["data"] = JSON.stingify(vec_to_pos(init_pos))

func _on_position_update(position: Vector3):
	set_postion(position)	

# Set the data.
func set_postion(position: Vector3):
	var data = JSON.print(vec_to_pos(position))
	_msg["data"] = data
	send_msg()


func receive_msg(msg: Dictionary, is_called_from_child: bool = false):
	var data = msg["data"]
	#.receive_msg(msg,true)
	data = parse_json(data)
	var destination = Vector3( data.x, 0, data.y )
	emit_signal("set_destination", destination )

