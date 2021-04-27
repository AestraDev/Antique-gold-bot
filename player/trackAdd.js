/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */


module.exports = (client, message, queue, track) => {
	message.channel.send(
		` ${
			track.title
		} has been added to the queue !`
	);
	
};
