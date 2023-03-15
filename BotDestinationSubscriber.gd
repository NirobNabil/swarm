extends ROSSubscriber

signal set_destination( destination )

# it is mandatory to set attributes _topic and _msg_type and call initiate_connection 
# because base class ROSWEBSOCKET uses these attributes in initiate_connection
# function to call the receive_msg function of this node when data of _msg_type is 
# received on topic of _topic 
func _ready():
	print(get_parent().name)
	_topic = "/destination/" + get_parent().name
	_msg_type = "std_msgs/msg/String"
	initiate_connection()


func receive_msg(msg: Dictionary, is_called_from_child: bool = false):
	var data = msg["data"]
	data = parse_json(data)
	var destination = Vector3( data.x, 0, data.y )
	emit_signal("set_destination", destination )
	#get_parent().move_bot( dir )
	#print( data )

