# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
require 'date'

## Creates Admin user
admin_user = User.create!(
    email: 'shaurya@gmail.com',
    name: 'Shaurya Agnihotri',
    password: 'password',
    password_confirmation: 'password',
    role: 'admin')

## Create a Movie
movie = Movie.create!(
    name: 'Interstellar',
    movie_time: Date.new(2021, 1,31),
    rating: 5)

## No. of screens, slots per screen and seats per slot
screens = 4
slots = 4
seats_per_screen = 105

## Creating screens, slots and seats
screens.times do |scr|
    screen = movie.screen.create!(name: "S#{scr+1}")

    slots.times do |slt|
    slot = screen.slot.create!(slot_time: "#{SLOT_TIME[slt]}")

        seats_per_screen.times do |seat|
            seat_position = ((seat)/15)/3
            seat_section = (seat)/15
            seat_number = (seat)%15

            seat = slot.seat.create!(
                name: "#{(65+seat_section).chr}#{seat_number+1}",
                price: SEATS_PRICES[seat_position], 
                position: seat_position)
        end
    end
end
