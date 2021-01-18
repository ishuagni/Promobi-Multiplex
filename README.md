# Promobi-Multiplex
Demo project of Multiplex, Book Movies, Show Reports etc.

## Frontend Deployment
Frontend of this application is built on React and present in promobi-multiplex-ui folder

## Backend Deployment
Frontend of this application is built on ROR and present in promobi-multiplex-api folder

## Project Information and Coverage

### Frontend / UI
Following screens were created:-
- Login
- Signup
- Show Movies / Dashboard
- Show Screens
- Book Seats
- Show Reports (Only for Admin)

Login setup JWT Authentication with the APIs and all the API call require this authentication token

Login/Signup Screens:-
- Frontend Validation is added where email, password, name field should not be null, Submit button will remain inactive
- On successfull signup, it will be redirected to login page

Types of Users:-
- Admin User - Created using seed data
- Customer User - Created using signup functionality
Note - Show Reports, Add Movie and Delete Movie functionality are hidden for Customer User.

Dashboard / Show Movies Screen:-
- Dashboard Screen will list all the movies created by the admin user
- Customer can book any movie.
- Admin User can add, book and delete movies.
- Show Reports will redirect to /showReports screen.
- Create Movie Goal, will open a popup, where all the values need to be specified.
- On Delete, confirmation modal/popup will appear.
- Logout button will delete the token from storage and redirect to Login Screen
- Avatar is also created using user's name initials. Available in Dashboard near logout screen.

Show Screens Screen:-
- Show Screen will list all the screens and slots for particular movie.
- User can hit book-movie and he will navigate to /showSeats screen.
- This screen also display the total screens available for particular movie.

Show Seats Screen:-
- 105 Seats are default selected for each slot.
- All these 105 seats are divided into 7 rows, 15 seats each.
- Booked seats are disabled/grayed out.
- On selecting seats, user can proceed to pay for the selected seats.
- On selecting proceed, confirmation modal/popup will open, which will show the number of selected seats and total price

Show Reports Screen
- This screen list all the transactions made by the user.
- Screen will be only visible to Admin user.

### Backend / APIs
Following APIs were created:-
- POST /auth/login - for Login
- POST /auth/signup - for creating Customer User
- GET /movies - Listing movies
- POST /movies - Creating new movies, their screens, seats and slots
- GET /screens?movie_id - Getting all the screens and slots for particular movie
- GET /seats?slot_id - Getting status of all the seats and prices for particular slot
- PUT /seats/book_seats - Updating owned_by property for all the seats provided, and generating report entry
- DELETE /movies/:id - Deleting movie, its screens, slots and seats of particular movie

/auth/login setup JWT Authentication using jwt gem

Other Features:-
- Bcrypt is used for encryption and decryption of password
- Seed data is created, including one admin user and 1 movie with 4 screens, 4 slots per screen and 105 seats per slot.
- JWT Authentication is required for all APIs
- Fixtures Data created for test

