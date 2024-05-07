/*You are a music enthusiast who loves creating playlists for different occasions. 
Your task is to create a program that generates personalized playlists based on a predefined list of songs, ensuring that each playlist captures the essence of the desired mood or genre. 
With your coding skills and an ear for great music, you'll create playlists that will have your friends begging for your curated collections.
Create a library of at least 20 songs using arrays.
Use loops to iterate through your array and add the songs to specific playlists based on a condition.
Log the contents of each playlist to the console. 
*/

let songs = [
  "Mask Off - Future",
  "Sacrifice - The Weeknd",
  "Middle Child - J. Cole",
  "Mamacita - Travis Scott",
  "Runnin - 21 Savage",
  "Jukebox Joints - ASAP Rocky",
  "Robbery - Juice WRLD",
  "Sauce it up - Lil Uzi Vert",
  "Paranoid - Kanye West",
  "Sunflower - Post Malone",
  "Enemies - Drake",
  "Raindrops - Metro Boomin",
  "Ric Flair Drip - Offset",
  "Greatness - Quavo",
  "Casper - Takeoff",
  "Narcos - Migos",
  "Eurphoria - Kendrick Lamar",
  "Urge - Doja Cat",
  "Rain - Mac Miller",
  "Familiarity - Teezo Touchdown",
  "Burn - Ty Dolla Sign",
  "Cold Sunday - Lil Yachty",
  "Breathe - Yeat",
  "Juggernaut - Tyler The Creator",
  "Took her to the O - King Von",
  "I Know - Jay Z",
  "Stats - Baby Keem",
  "With Them - Young Thug",
  "Diamonds - Bas",
  "A Milli - Lil Wayne",
  "Drip too hard - Lil Baby",
  "Plain Jane - ASAP Ferg",
  "RIP - Playboi Carti",
  "Hey Ya! - Outkast", 
  "The Box - Roddy Ricch",
];

let partyPlaylist = [];
let chillPlaylist = [];
let workoutPlaylist = [];

for (let i = 0; i < songs.length; i++) {
  if (songs[i].includes("Baby Keem") || songs[i].includes("Drake") || songs[i].includes("Playboi Carti") || songs[i].includes("ASAP Rocky") || songs[i].includes("ASAP Ferg") || songs[i].includes("Lil Baby") || songs[i].includes("Outkast") || songs[i].includes("Young Thug") || songs[i].includes("21 Savage")) {
    partyPlaylist.push(songs[i]);
  } else if (songs[i].includes("Bas") || songs[i].includes("Jay Z") || songs[i].includes("Lil Yachty") || songs[i].includes("Ty Dolla Sign") || songs[i].includes("Offset") || songs[i].includes("Kanye West")) {
    chillPlaylist.push(songs[i]);
  } else {
    workoutPlaylist.push(songs[i]);
  }
}

console.log("Party Playlist:");
console.log(partyPlaylist);

console.log("Chill Playlist:");
console.log(chillPlaylist);

console.log("Workout Playlist:");
console.log(workoutPlaylist);


songs.forEach(song => {
  if (song.includes("Baby Keem") || song.includes("Drake") || song.includes("Playboi Carti") || song.includes("ASAP Rocky") || song.includes("ASAP Ferg") || song.includes("Lil Baby") || song.includes("Outkast") || song.includes("Young Thug") || song.includes("21 Savage")) {
    partyPlaylist.push(song);
  } else if (song.includes("Bas") || song.includes("Jay Z") || song.includes("Lil Yachty") || song.includes("Ty Dolla Sign") || song.includes("Offset") || song.includes("Kanye West")) {
    chillPlaylist.push(song);
  } else {
    workoutPlaylist.push(song);
  }
});

console.log(workoutPlaylist.concat(chillPlaylist + partyPlaylist));
