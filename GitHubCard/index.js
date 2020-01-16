/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/sdelpercio')
.then(res => {
  document.querySelector('.cards').append(createCard(res.data));
})
.catch(err => {
  console.log(err);
})
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'Keyeric', 
  'n0m0n3y',
  'cristinaedens',
  'dakotacahill',
  'Reikiryo'
];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
  .then(res => {
    document.querySelector('.cards').append(createCard(res.data));
  })
  .catch(err => {
    console.log(err);
  })
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
function createCard(github) {
  const card = document.createElement('div'),
        img = document.createElement('img'),
        cardInfo = document.createElement('div'),
        userName = document.createElement('h3'),
        userUsername = document.createElement('p'),
        userLocation = document.createElement('p'),
        userProfile = document.createElement('p'),
        userLink = document.createElement('a'),
        userFollowers = document.createElement('p'),
        userFollowing = document.createElement('p'),
        userBio = document.createElement('p')
  
  card.classList.add('card');
  img.src = github.avatar_url;
  cardInfo.classList.add('card-info');
  userName.classList.add('name');
  userUsername.classList.add('username');
  userLink.href = github.html_url;

  userName.textContent = github.name;
  userUsername.textContent = github.login;
  userLocation.textContent = `Location: ${github.location}`;
  userProfile.textContent = 'Profile: ';
  userLink.textContent = github.html_url;
  userFollowers.textContent = `Followers: ${github.followers}`;
  userFollowing.textContent = `Following: ${github.following}`;
  userBio.textContent = `Bio: ${github.bio}`;

  card.append(img);
  card.append(cardInfo);
  cardInfo.append(userName);
  cardInfo.append(userUsername);
  cardInfo.append(userLocation);
  cardInfo.append(userProfile);
  userProfile.append(userLink);
  cardInfo.append(userFollowers);
  cardInfo.append(userFollowing);
  cardInfo.append(userBio);

  img.addEventListener('click', () => {
    card.classList.toggle('card--opened');
    cardInfo.classList.toggle('card-info');
  });

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
