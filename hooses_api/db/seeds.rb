# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
CompletedJob.destroy_all
KitchenTablePost.destroy_all
Message.destroy_all
Topic.destroy_all
OwnerGroup.destroy_all
Profile.destroy_all
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


Profile.create({
  user: u1,
  first_name: 'rob',
  last_name:  'brice',
  address: '34 The Big Street',
  image: 'avatar.png'
  })

Profile.create({
  user: u2,
  first_name: 'sue',
  last_name:  'aitchison',
  address: '21 Roller Street',
  image: 'avatar.png'
  })

Profile.create({
  user: u3,
  first_name: 'bill',
  last_name:  'smith',
  address: '101 Shard Street',
  image: 'avatar.png'
  })

t1 = Topic.create({
  user: u1,
  house: h1,
  title: "leaky pipe",
  status: "open"
  })

t2 = Topic.create({
  user: u2,
  house: h2,
  title: "roof repairs",
  status: "open"
  })

t3 = Topic.create({
  user: u3,
  house: h3,
  title: "smelly drain",
  status: "open"
  })

t4 = Topic.create({
  user: u2,
  house: h3,
  title: "take your bins out",
  status: "open"
  })

t5 = Topic.create({
  user: u1,
  house: h1,
  title: "The roof is leaking",
  status: "open"
  })

t6 = Topic.create({
  user: u3,
  house: h2,
  title: "The seagulls are keeping me awake at night!",
  status: "open"
  })

m1 = Message.create({
  user: u1,
  topic: t1,
  content: "will somebody please help me sort this leaky pipe"
  })

m2 = Message.create({
  user: u3,
  topic: t1,
  content: "I already called someone - don't worry"
  })

m3 = Message.create({
  user: u2,
  topic: t2,
  content: "the roof has caved in - please send help"
  })

m4 = Message.create({
  user: u3,
  topic: t3,
  content: "the bin situation is getting bad"
  })

m5 = Message.create({
  user: u1,
  topic: t3,
  content: "sorry about that"
  })


ktpost1 = KitchenTablePost.create({
  user: u1,
  house: h1,
  content: "hi guys, can you see this post?"
  })

ktpost2 = KitchenTablePost.create({
  user: u1,
  house: h1,
  content: "is anyone out there?"
  })

ktpost3 = KitchenTablePost.create({
  user: u3,
  house: h1,
  content: "yup - hello!"
  })

CompletedJob.create({
  house: h1,
  description: "fix the ceiling leak",
  category: "general repairs",
  cost: 25000,
  date: "2017-05-01"
  })

CompletedJob.create({
  house: h1,
  description: "broken front door",
  category: "general repairs",
  cost: 10000,
  date: "2017-04-22"
  })

CompletedJob.create({
  house: h1,
  description: "fix gutter damage caused by pigeons",
  category: "vermin issues",
  cost: 43500,
  date: "2017-02-10"
  })


