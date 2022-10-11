# Proj2-GenshinCharacterPlanner
A simple application where users can find not only guides on what material they require for specific characters on the game Genshin Impact, but to also allow users freedom to edit and add in their own info.

![GCP Screenshot 1](https://i.imgur.com/6XlpchB.png)
![GCP Screenshot 2](https://i.imgur.com/hTOFO91.png)
![GCP Screenshot 3](https://i.imgur.com/n21a3vA.png)

## Features
- Curated data taken from the game wiki.
- Log-In system.
- Self-curated user edits, where registered users can freely contribute to the app.

## Methodologies & Technologies used
- Node Express.
- MongoDB and Mongoose, for the database 
- Node Package dotenv, method-override, session
- Bcrypt, for security
- Bootstrap

## Yet-To-Be-Implemented Future Features
- Add more Collection for other game data (Domains, Weapons, Artifact)
- Connect documents from different data to another (Character A requires material, clicking on material opens up material page)
- Add search and filter function
- Break down maxLevelRequirement to smaller chunks(fromLevel1to20, fromLevel20to40 and so on.) each with their own data