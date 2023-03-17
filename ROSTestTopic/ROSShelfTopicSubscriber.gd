# Subscriber for the '/test_topic' topic.
# The message type is 'test_msgs/Test'.
extends ROSSubscriber
class_name ROSShelfTopicSubscriber

var field_int: int = 0
var field_array: Array = []
var field_string: String = ""


func _ready():
	_topic = "/shelfLocations"
	_msg_type = "std_msgs/msg/String"
	initiate_connection()


var shelves: Dictionary
var shelvesAdded = false

func receive_msg(msg: Dictionary, is_called_from_child: bool = false):

	if( shelvesAdded ):
		return
		
	var data = msg["data"]
	data = parse_json(data)
	for shelf in data:
		shelves[shelf.id] = shelf.positions

	
	for shelf in data:
		print( shelf )
		for i in range(0,shelf.positions.size()):	
			var shelfInstance = load("res://shelfScene.tscn").instance()
			shelfInstance.set_name(str(shelf.id) + '_' + str(i));
			shelfInstance.transform.origin.x = shelf.positions[i].x
			shelfInstance.transform.origin.z = shelf.positions[i].y
			get_parent().get_node("Warehouse/shelves").add_child(shelfInstance)
	
	shelvesAdded = true;
		
	
	
	
	
	
	
	
