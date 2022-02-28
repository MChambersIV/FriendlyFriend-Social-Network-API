# FriendlyFriend-Social-Network-API

This is an API for the backend of a Social Network. As it is just an API it requires a tool to test the routes that interact with the database.

In this case I'll be using Insomnia to do so.

## User Routes

### /api/users GET

This route returns all users.
![GET All Users](./RM-images/User/getallusers.png "GET route for all users")


### /api/user POST

This route allows the creation of a user by handing a JSON object.
![POST User](./RM-images/User/postUser.png "POST route for user")

### /api/users/:userId GET

This route returns a single user with the corresponding ID.
![GET Single User](./RM-images/User/getsingleuser.png "GET route for single user")

### /api/users/:userId PUT

This route updates an existing user's name or email by passing it as a JSON object.
![PUT User](./RM-images/User/putUser.png "PUT route for user")

### /api/users/:userId DELETE

This route deletes an existing user with the corresponding ID
![DELETE User](./RM-images/User/deleteUser.png "DELETE route for user.")

### /api/users/:userId/friends/:friendId POST

This route finds a user with the corresponding userID and addes another user with corresponding friendID to their "friends" array.
![POST User Friend](./RM-images/User/postUserFriend.png "POST route for user friend.")
![POST User Friend](./RM-images/User/postUserFriend2.png "GET route updated.")

### /api/users/:userId/friends/:friendId DELETE

This route finds a user with the corresponding userID and removes the id in their friends array matching the friendId.
![DELETE User Friend](./RM-images/User/deleteUserFriend.png "DELETE route for user friend.")



## Thought Routes

### /api/thoughts GET
This route returns all exisiting thoughts.
![GET All Thoughts](./RM-images/Thought/getAllThoughts.png "GET route for all thoughts.")

### /api/thoughts POST
This route creates a thought by sending the thoughtText, userID, and username as a JSON object.
![POST Thought](./RM-images/Thought/postThought.png "POST route for thought")

### /api/thoughts/:thoughtId GET
This route returns a single thought with the corresponding thoughtID.
![GET Single Thought](./RM-images/Thought/getSingleThought.png "GET route for Single Thought")

### /api/thoughts/:thoughtId PUT
This route updates a thought with the corresponding thoughtID by passing a JSON object with a new thoughtText value.
![PUT Thought](./RM-images/Thought/putThought.png "PUT route for thought.")

### /api/thoughts/:thoughtId DELETE
This route deletes a thought with the corresponding thoughtID.
![DELETE Thought](./RM-images/Thought/deleteThought.png "DELETE route for thought.")

### /api/thoughts/:thoughtId/reactions POST
This route creates a new reaction to a thought with the corresponding thoughtID by passing a JSON object.
![POST Thought Reaction](./RM-images/Thought/postThoughtReaction.png "POST route for thought reaction.")
![POST Thought Updated](./RM-images/Thought/postThoughtReaction2.png "All thoughts route updated with reaction.")

### /api/thoughts/:thoughtId/reactions/:reactionId
This route deletes a reaction to a post by targeting the corresponding thoughtId and then the corresponding reactionId
![DELETE Thought Reaction](./RM-images/Thought/deleteThoughtReaction.png "DELETE route for thought reaction.")

## Walkthrough Videos
Here's a link to the first walkthrough video: https://watch.screencastify.com/v/QxEEZpL3oL6DizWLhyrf

Link to Second Video: 
