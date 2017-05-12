# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

OwnerGroup.destroy_all
User.destroy_all
House.destroy_all

u1 = User.create({
email: 'rob@gmail.com',
password: '12345678',
password_confirmation: '12345678'
  })

u2 = User.create({
email: 'sue@gmail.com',
password: '12345678',
password_confirmation: '12345678'
  })

u3 = User.create({
email: 'bill@gmail.com',
password: '12345678',
password_confirmation: '12345678'
  })

h1 = House.create({
  address: '23 Castle Terrace',
  post_code: 'EH3 7JX'
  })

h2 = House.create({
  address: '99 High Street',
  post_code: 'EH9 7JX'
  })

h3 = House.create({
  address: '23 The Shard',
  post_code: 'SW1 5EJ'
  })


OwnerGroup.create({
user: u1,
house: h1
  })

OwnerGroup.create({
user: u2,
house: h2
  })

OwnerGroup.create({
user: u3,
house: h3
  })


OwnerGroup.create({
user: u1,
house: h3
  })

OwnerGroup.create({
user: u3,
house: h1
  })

OwnerGroup.create({
user: u2,
house: h3
  })
