// // Amadeus API credentials
// const client_id = 'd4UBUSp2aGh6WrIFzsvXKBXaGKkbOtwA';
// const client_secret = 'xrQCuRvikx4uiYvp';
// let ACCESS_TOKEN = { token: "", tokenType: "" };

// // Function to get the access token
// async function fetchAccessToken() {
//     const tokenUrl = "https://test.api.amadeus.com/v1/security/oauth2/token";
//     try {
//         const response = await fetch(tokenUrl, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`
//         });
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const tokenData = await response.json();
//         if (tokenData.access_token && tokenData.token_type) {
//             ACCESS_TOKEN = {
//                 token: tokenData.access_token,
//                 tokenType: tokenData.token_type
//             };
//         } else {
//             throw new Error("Failed to retrieve access token");
//         }
//     } catch (error) {
//         console.error("Error fetching access token:", error);
//     }
// }

// // Function to fetch points of interest
// async function fetchPointsOfInterest(latitude, longitude) {
//   const poiUrl = `https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=${latitude}&longitude=${longitude}&radius=1&page[limit]=5`;

//   if (!ACCESS_TOKEN.token || !ACCESS_TOKEN.tokenType) {
//       await fetchAccessToken();
//       if (!ACCESS_TOKEN.token || !ACCESS_TOKEN.tokenType) {
//           console.error("Unable to retrieve access token");
//           return;
//       }
//   }

//   const authString = `${ACCESS_TOKEN.tokenType} ${ACCESS_TOKEN.token}`;
//   try {
//       const response = await fetch(poiUrl, {
//           headers: {
//               'Authorization': authString
//           }
//       });
//       if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const poiData = await response.json();
//       displayPointsOfInterest(poiData);
//   } catch (error) {
//       console.error("Error fetching points of interest:", error);
//   }
// }

// // Function to display points of interest
// function displayPointsOfInterest(poiData) {
//     const poiContainer = document.getElementById('points-of-interest');
//     if (poiContainer && poiData.data) {
//         let content = '<h5 class="card-title">Points of Interest</h5>';
//         poiData.data.forEach(poi => {
//             content += `<p>${poi.name} - ${poi.category}</p>`;
//         });
//         poiContainer.innerHTML = content;
//     }
// }

// // Expose fetchPointsOfInterest to be accessible globally
// window.fetchPointsOfInterest = fetchPointsOfInterest;
