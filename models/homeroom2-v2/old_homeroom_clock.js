var globalTime = 0.0;
var sval = 0;
room.onLoad = function() {

//	room.fog_col = new Vector(0, 0, 0);
//	room.addCookie("janus_lobby_testcookie", "test" + room.cookies["janus_lobby_testcookie"]);
	room.createObject("Sound", { id: "tick", js_id: "jstick", loop: "false", pos: Vector( 0.0, 7.0, 0.0 ) } );
	room.createObject("Sound", { id: "tock", js_id: "jstock", loop: "false", pos: Vector( 0.0, 7.0, 0.0 ) } );
	room.objects["jstick"].gain = 2.0;
	room.objects["jstock"].gain = 2.0;
}

room.onClick = function() {

}

room.update = function(delta_time) {
	
	var now = new Date();

	globalTime += delta_time;

	//minute angle maps the minute (between 0-60) to the radian range of 0-2pi
	var minute_angle = (now.getMinutes() + now.getSeconds() / 60.0 + now.getMilliseconds()/60000.0 ) / 60.0 * 2.0 * Math.PI;

	//hour angle maps the hour (between 0-12) to the radian range of 0-2pi
	var hour_angle = (now.getHours() + now.getMinutes()/60.0 + now.getSeconds() / 3600.0) / 12.0 * 2.0 * Math.PI;

	//second angle maps the second (between 0-60) to the radian range of 0-2pi
	var second_angle = (now.getSeconds()) / 60.0 * 2.0 * Math.PI;
	
	if ( now.getSeconds() != sval ) {
		sval = now.getSeconds();
		play_tock_or_tock( sval );
	}
	/*if ( now.getUTCMinutes() == 0 && now.getUTCSeconds() == 0)
	{

		var cur_hour = (now.getUTCHours() % 12);

		if (cur_hour == 0) { //this means either midnight or 12 noon
			room.playSound('snd_12');
		}
		else if (cur_hour == 1) {
			room.playSound('snd_1');
		}
		else if (cur_hour == 2) {
			room.playSound('snd_2');
		}
		else if (cur_hour == 3) {
			room.playSound('snd_3');
		}
		else if (cur_hour == 4) {
			room.playSound('snd_4');
		}
		else if (cur_hour == 5) {
			room.playSound('snd_5');
		}
		else if (cur_hour == 6) {
			room.playSound('snd_6');
		}
		else if (cur_hour == 7) {
			room.playSound('snd_7');
		}
		else if (cur_hour == 8) {
			room.playSound('snd_8');
		}
		else if (cur_hour == 9) {
			room.playSound('snd_9');
		}
		else if (cur_hour == 10) {
			room.playSound('snd_10');
		}
		else if (cur_hour == 11) {
			room.playSound('snd_11');
		}			
	}*/

	//clock1
	room.objects["clock_second_hand1"].xdir.x = Math.cos(second_angle);
	room.objects["clock_second_hand1"].xdir.y = -Math.sin(second_angle);
	room.objects["clock_second_hand1"].xdir.z = 0.0;

	room.objects["clock_second_hand1"].ydir.x = Math.sin(second_angle);
	room.objects["clock_second_hand1"].ydir.y = Math.cos(second_angle);
	room.objects["clock_second_hand1"].ydir.z = 0.0;

	room.objects["clock_second_hand1"].zdir.x = 0.0;
	room.objects["clock_second_hand1"].zdir.y = 0.0;
	room.objects["clock_second_hand1"].zdir.z = 1.0;

	room.objects["clock_minute_hand1"].xdir.x = Math.cos(minute_angle);
	room.objects["clock_minute_hand1"].xdir.y = -Math.sin(minute_angle);
	room.objects["clock_minute_hand1"].xdir.z = 0.0;

	room.objects["clock_minute_hand1"].ydir.x = Math.sin(minute_angle);
	room.objects["clock_minute_hand1"].ydir.y = Math.cos(minute_angle);
	room.objects["clock_minute_hand1"].ydir.z = 0.0;

	room.objects["clock_minute_hand1"].zdir.x = 0.0;
	room.objects["clock_minute_hand1"].zdir.y = 0.0;
	room.objects["clock_minute_hand1"].zdir.z = 1.0;

	room.objects["clock_hour_hand1"].xdir.x = Math.cos(hour_angle);
	room.objects["clock_hour_hand1"].xdir.y = -Math.sin(hour_angle);
	room.objects["clock_hour_hand1"].xdir.z = 0.0;

	room.objects["clock_hour_hand1"].ydir.x = Math.sin(hour_angle);
	room.objects["clock_hour_hand1"].ydir.y = Math.cos(hour_angle);
	room.objects["clock_hour_hand1"].ydir.z = 0.0;

	room.objects["clock_hour_hand1"].zdir.x = 0.0;
	room.objects["clock_hour_hand1"].zdir.y = 0.0;
	room.objects["clock_hour_hand1"].zdir.z = 1.0;

	//clock2
	room.objects["clock_second_hand2"].xdir.x = Math.cos(-second_angle);
	room.objects["clock_second_hand2"].xdir.y = -Math.sin(-second_angle);
	room.objects["clock_second_hand2"].xdir.z = 0.0;

	room.objects["clock_second_hand2"].ydir.x = Math.sin(-second_angle);
	room.objects["clock_second_hand2"].ydir.y = Math.cos(-second_angle);
	room.objects["clock_second_hand2"].ydir.z = 0.0;

	room.objects["clock_second_hand2"].zdir.x = 0.0;
	room.objects["clock_second_hand2"].zdir.y = 0.0;
	room.objects["clock_second_hand2"].zdir.z = 1.0;

	room.objects["clock_minute_hand2"].xdir.x = Math.cos(-minute_angle);
	room.objects["clock_minute_hand2"].xdir.y = -Math.sin(-minute_angle);
	room.objects["clock_minute_hand2"].xdir.z = 0.0;

	room.objects["clock_minute_hand2"].ydir.x = Math.sin(-minute_angle);
	room.objects["clock_minute_hand2"].ydir.y = Math.cos(-minute_angle);
	room.objects["clock_minute_hand2"].ydir.z = 0.0;

	room.objects["clock_minute_hand2"].zdir.x = 0.0;
	room.objects["clock_minute_hand2"].zdir.y = 0.0;
	room.objects["clock_minute_hand2"].zdir.z = 1.0;

	room.objects["clock_hour_hand2"].xdir.x = Math.cos(-hour_angle);
	room.objects["clock_hour_hand2"].xdir.y = -Math.sin(-hour_angle);
	room.objects["clock_hour_hand2"].xdir.z = 0.0;

	room.objects["clock_hour_hand2"].ydir.x = Math.sin(-hour_angle);
	room.objects["clock_hour_hand2"].ydir.y = Math.cos(-hour_angle);
	room.objects["clock_hour_hand2"].ydir.z = 0.0;

	room.objects["clock_hour_hand2"].zdir.x = 0.0;
	room.objects["clock_hour_hand2"].zdir.y = 0.0;
	room.objects["clock_hour_hand2"].zdir.z = 1.0;

}

function isOdd(n) {
	return Boolean( Number( n % 2 ) );
}

function play_tock_or_tock( s ) {
	//room.objects["jstick"].pos = Vector( 0.0, 7.0, 0.0 );
	//room.objects["jstock"].pos = Vector( 0.0, 7.0, 0.0 );
		
	if ( isOdd(s) ) {
		//tock
		room.playSound( "jstock" );
	}
	else {
		//tick
		room.playSound( "jstick" );
	}
}