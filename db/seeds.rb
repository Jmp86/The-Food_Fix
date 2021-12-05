# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all
User.destroy_all
puts "destroyed"

User.create(username: 'Jmp86', firstname: 'Justin', lastname: 'Pitts', password: 'food', bio: 'I love finding new restaraunts')
User.create(username: 'RachelT91', firstname: 'Rachel', lastname: 'Tierney', password: 'dogos', bio: 'I love new baking recipes')


Post.create(title: 'Taco Bell', 
    image: 'https://www.tacobell.com/medias/blog-2019-new-menu-header.jpg?context=bWFzdGVyfGltYWdlc3wxNjYyNzd8aW1hZ2UvanBlZ3xpbWFnZXMvaDFhL2g5OC84OTI4NTEyMTE0NzE4LmpwZ3xjMjA5YzZjNTQyMmM0MWM1ZWE5N2Q1OGQ0NDJjYWVkMzdiNTE0MjMyMjRhMzhmMTZjNGEwYTc4YmMwOGYwOWYx',
    category: 'Mexican',
    description: "Fast Food",
    average_rating: 2,
    user_id: User.all.sample.id)

Post.create(title: 'Pizza Hut', 
    image: 'https://dynl.mktgcdn.com/p/QvyqaFRBImZYtfiRK0H4MWood5vuKFeCfBTXpmHRS5k/586x450.jpg',
    category: 'Pizza',
    description: "Pizza, breadsticks, wings, pasta",
    average_rating: 3,
    user_id: User.all.sample.id)

Post.create(title: 'Cacio e Pepe Macaroni and Cheese', 
    image: 'https://static.parade.com/wp-content/uploads/2020/01/Cacio-e-Pepe-Mac_photo-by-Audrey-Ma.jpg',
    category: 'Pasta',
    description: "Peppery, cheesy cacio e pepe is one of the trendiest pastas around these days.",
    ingredients: "INGREDIENTS
    2 Tbsp salt
    8oz cavatelli pasta
    2 Tbsp butter
    2 Tbsp flour
    1¼ cups whole milk
    ¼ cup shredded aged Vermont white cheddar cheese
    ¼ tsp pink peppercorns, toasted and ground
    ½ tsp black peppercorns, toasted and ground
    ¼ tsp green peppercorns, ground
    1 Tbsp shredded Parmesan cheese
    Minced chives, for garnish",
    instructions: "DIRECTIONS
    Bring 2-3 quarts of water to a boil in a pot. Add salt and then pasta. Cook 8 minutes or until al dente. Strain. Return pasta to pot.
    
    In a small heavy-bottomed saucepan over low heat, melt butter. Whisk in flour. Cook 2 minutes, whisking constantly. Whisk in milk. Cook, stirring constantly, 3-5 minutes or until thickened enough to coat the back of a spoon. Add cheddar, stirring to melt. Stir in peppercorns.
    
    Add sauce to pasta to pot; stir in Parmesan. Season to taste with additional salt and black pepper. Serve garnished with chives.",
    average_rating: 5,
    user_id: User.all.sample.id )



puts "seeded"