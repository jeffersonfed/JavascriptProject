const accessToken = 'dd69b78e6eb24a1aa78d15536488c3a9'; // Replace with your actual access token

const topTracksList = document.getElementById("topTracksList");
const loadTopTracksButton = document.getElementById("loadTopTracksButton");

loadTopTracksButton.addEventListener("click", fetchTopTracks);

async function fetchTopTracks() {
  try {
    const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    const tracks = data.items;

    topTracksList.innerHTML = "";
    tracks.forEach((track) => {
      const trackName = track.name;
      const artists = track.artists.map((artist) => artist.name).join(", ");
      const listItem = document.createElement("li");
      listItem.textContent = `${trackName} - ${artists}`;
      topTracksList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching top tracks:", error);
  }
}
