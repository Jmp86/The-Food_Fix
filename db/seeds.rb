# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all
User.destroy_all
Review.destroy_all
puts "destroyed"

User.create(username: 'Jmp86', firstname: 'Justin', lastname: 'Pitts', password: 'food', bio: 'I love finding new restaraunts')
User.create(username: 'RachelT91', firstname: 'Rachel', lastname: 'Tierney', password: 'dogos', bio: 'I love new baking recipes')


Post.create(title: 'Starbucks', 
    image: 'https://m.oxfordeagle.com/wp-content/uploads/sites/38/2020/06/Starbucks-Logo.png',
    category: 'Coffee',
    description: "Convenient coffee spot",
    average_rating: 3,
    user_id: User.all.sample.id)

Post.create(title: '808 Deli', 
    image: 'https://images.jdmagicbox.com/us/comp/hi/kihei/35/8co0045535/catalogue/808-deli-hi-kihei-jrwaqgumoa.jpg',
    category: 'Deli',
    description: "Great salads and sandwiches",
    average_rating: 4,
    user_id: User.all.sample.id)

Post.create(title: 'Panera', 
    image: 'http://i.imgur.com/4H1Fei6.jpg',
    category: 'Bakery, soups, salads, sandwiches',
    description: "Best soup and sandwich combinations",
    average_rating: 5,
    user_id: User.all.sample.id)

Post.create(title: 'Diamonds Ice Bar & Grill', 
    image: 'https://mauihappyhours.net/wp-content/uploads/2020/11/diamonds-ice-bar-kihei-maui-hawaii-maui-happy-hours-1024x683.jpg',
    category: 'Bar',
    description: "Reasonably priced drinks",
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

Post.create(title: 'Master Scones Recipe', 
        image: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/04/scone-varieties.jpg',
        category: 'Baking',
        description: "These better-than-the-bakery treats are flaky, flavorful, and moist with crisp crumbly edges",
        ingredients: "
        2 cups (250g) all-purpose flour (spoon & leveled), plus more for hands and work surface
        1/2 cup (100g) granulated sugar
        1/2 teaspoon salt
        2 and 1/2 teaspoons baking powder
        1/2 cup (1 stick; 115g) unsalted butter, frozen
        1/2 cup (120ml) heavy cream or buttermilk (plus 2 Tbsp for brushing)
        1 large egg
        1 and 1/2 teaspoons pure vanilla extract
        1–1.5 cups add-ins such as chocolate chips, berries, nuts, fruit, etc",
        instructions: "Whisk flour, sugar, salt, and baking powder together in a large bowl. Grate the frozen butter using a box grater. Add it to the flour mixture and combine with a pastry cutter, two forks, or your fingers until the mixture comes together in pea-sized crumbs. See video above for a closer look at the texture. Place in the refrigerator or freezer as you mix the wet ingredients together.
        Whisk 1/2 cup heavy cream, the egg, and vanilla extract together in a small bowl. Drizzle over the flour mixture, add the add-ins, then mix together until everything appears moistened.
        To make triangle scones: Pour onto the counter and, with floured hands, work dough into a ball as best you can. Dough will be sticky. If it’s too sticky, add a little more flour. If it seems too dry, add 1-2 more Tablespoons heavy cream. Press into an 8-inch disc and, with a sharp knife or bench scraper, cut into 8 wedges. For smaller scones, press dough into two 5-inch discs and cut each into 8 wedges. To make 10-12 drop scones: Keep mixing dough in the bowl until it comes together. Drop scones, about 1/4 cup of dough each, 3 inches apart on a lined baking sheet.
        Brush scones with remaining heavy cream and for extra crunch, sprinkle with coarse sugar. (You can do this before or after refrigerating in the next step.)
        Place scones on a plate or lined baking sheet (if your fridge has space!) and refrigerate for at least 15 minutes.
        Meanwhile, preheat oven to 400°F (204°C).
        Line a large baking sheet with parchment paper or silicone baking mat(s). If making mini or drop scones, use 2 baking sheets. After refrigerating, arrange scones 2-3 inches apart on the prepared baking sheet(s).
        Bake for 18-26 minutes or until golden brown around the edges and lightly browned on top. Larger scones take closer to 25 minutes. Remove from the oven and cool for a few minutes before topping with optional toppings listed in the ingredients.
        Leftover scones keep well at room temperature for 2 days or in the refrigerator for 5 days.",
        average_rating: 4,
        user_id: User.all.sample.id )

Review.create(review: "So Good", rating: 5, user_id: User.all.sample.id, post_id: Post.all.sample.id)
Review.create(review: "Terrible", rating: 1, user_id: User.all.sample.id, post_id: Post.all.sample.id)
Review.create(review: "It was ok", rating: 2, user_id: User.all.sample.id, post_id: Post.all.sample.id)
Review.create(review: "Pretty Good", rating: 4, user_id: User.all.sample.id, post_id: Post.all.sample.id)
Review.create(review: "Amazing", rating: 5, user_id: User.all.sample.id, post_id: Post.all.sample.id)
Review.create(review: "Not bad", rating: 3, user_id: User.all.sample.id, post_id: Post.all.sample.id)
Review.create(review: "Delicious", rating: 5, user_id: User.all.sample.id, post_id: Post.all.sample.id)
Review.create(review: "Dissapointing", rating: 1, user_id: User.all.sample.id, post_id: Post.all.sample.id)
Review.create(review: "The best", rating: 5, user_id: User.all.sample.id, post_id: Post.all.sample.id)
Review.create(review: "Not good", rating: 2, user_id: User.all.sample.id, post_id: Post.all.sample.id)

puts "seeded"