/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */

module.exports = client => {
  console.log(`Hey, ${client.user.username} is online now`);

  client.user.setActivity("Status", {
    type: "LISTENING"
  });
};
