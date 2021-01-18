# Promobi Multiplex Assignment - APIs

## Stack
- Ruby '2.7.2'
- Rails '6.1.1'
- Postgre SQL

## Dev Enviroment [Deployment]
Navigate to the Root folder and install all the required gems
- Execute `bundle install`

### Database Setup
- Create database on Postgres with name 'Promobi' (or any other name)
- Specify all the Database configuration inside config\database.yml file

- Migrate the database schema, Execute `rails db:migrate`

### Load the Seed Data
- Load the seed data, Execute `rails db:seed`

### Run the application on port - 3001, or any other port
- Execute `rails server --port 3001`

## Test Setup

### Database Setup
- Create database on Postgres with name 'Promobi_test' (or any other name)
- Specify all the Database configuration inside config\database.yml file

- Migrate the database schema, Execute `rails db:migrate RAILS_ENV=test`