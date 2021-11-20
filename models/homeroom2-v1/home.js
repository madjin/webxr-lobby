var globalTime = 0.0;
var walkstate = 0;
var walkweight = 0.0;

room.onLoad = function() {

	room.fog_col = new Vector(0, 0, 0);
	room.addCookie("janus_lobby_testcookie", "test" + room.cookies["janus_lobby_testcookie"]);

}

room.onClick = function() {

}

room.update = function(delta_time) {
	
	var now = new Date();

        globalTime += delta_time;
        //room.objects["blendsphere"].pos.x = -12.0 + Math.sin(globalTime)*0.5+0.5;
	//room.objects["blendsphere"].blend0 = Math.sin(globalTime/1000.0)*0.5+0.5;
        //room.objects["blendsphere"].blend0 = Math.sin(globalTime/5000.0)*0.5+0.5;
        //room.objects["blendsphere"].blend1 = Math.sin(globalTime/1000.0)*0.5+0.5;

	//room.objects["blendsphere"].col.x = room.objects["blendsphere"].blend0;
        //room.objects["blendsphere"].col.y = room.objects["blendsphere"].blend1;
        //room.objects["blendsphere"].blend2 = Math.sin(globalTime/100000.0)*0.5+0.5;
	walkweight += delta_time/250.0;
	if (walkweight >= 1.0) {
		walkweight -= 1.0;
		walkstate = (walkstate+1)%4;
	}
	if (walkstate == 0) {
		room.objects["walking"].blend0 = walkweight;
		room.objects["walking"].blend1 = 0.0;
		room.objects["walking"].blend2 = 0.0;
	}
	else if (walkstate == 1) {
		room.objects["walking"].blend0 = 1.0 - walkweight;
		room.objects["walking"].blend1 = walkweight;
		room.objects["walking"].blend2 = 0.0;
        }
	else if (walkstate == 2) {
		room.objects["walking"].blend0 = 0.0;
		room.objects["walking"].blend1 = 1.0 - walkweight;
		room.objects["walking"].blend2 = walkweight;
        }
	else if (walkstate == 3) {
		room.objects["walking"].blend0 = 0.0;
		room.objects["walking"].blend1 = 0.0;
		room.objects["walking"].blend2 = 1.0 - walkweight;
	}

	//room.objects["clock_text"].text = now.getUTCFullYear() + "/" + (now.getUTCMonth()+1) + "/" + now.getUTCDate() + " " + now.getUTCHours() + ":" + now.getUTCMinutes() + ":" + now.getUTCSeconds() + ":" + now.getUTCMilliseconds();

	//minute angle maps the minute (between 0-60) to the radian range of 0-2pi
	var minute_angle = (now.getUTCMinutes() + now.getUTCSeconds() / 60.0 + now.getUTCMilliseconds()/60000.0 ) / 60.0 * 2.0 * Math.PI;

	//var night_col = (Math.cos(minute_angle * 12.0) + 1.0) * 0.5; //note: multiplying by X causes night/day cycle X times per hour
	//room.fog_col.x = (1.0 - night_col) * 0.5;
	//room.fog_col.y = (1.0 - night_col) * 0.5;
	//room.fog_col.z = (1.0 - night_col) * 0.5 + 0.1;
	//room.fog_density = night_col * 0.025; //Note: used to be 0.025

	//hour angle maps the hour (between 0-12) to the radian range of 0-2pi
	var hour_angle = (now.getUTCHours() + now.getUTCMinutes()/60.0 + now.getUTCSeconds() / 3600.0) / 12.0 * 2.0 * Math.PI;

	//second angle maps the second (between 0-60) to the radian range of 0-2pi
	//var second_angle = (now.getUTCSeconds() + now.getUTCMilliseconds()/1000.0 ) / 60.0 * 2.0 * Math.PI;
	var second_angle = (now.getUTCSeconds()) / 60.0 * 2.0 * Math.PI;

	if ( now.getUTCMinutes() == 0 && now.getUTCSeconds() == 0)
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
	}

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
