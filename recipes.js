// Fresh Recipe Collection - Updated Recipe Data
const recipes = [
    {
        id: 'grilled-ribeye-steak',
        title: 'Perfect Grilled Ribeye Steak',
        shortIntro: 'Succulent, perfectly seasoned ribeye steak with a beautiful char and juicy center.',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=1080',
        servingSize: '2 steaks',
        prepTime: 10,
        cookTime: 12,
        servings: 2,
        difficulty: 'Medium',
        category: 'Main Course',
        ingredients: [
            '2 ribeye steaks (1.5 inches thick)',
            '2 tbsp olive oil',
            '4 cloves garlic, minced',
            '2 tbsp fresh rosemary, chopped',
            '2 tbsp butter',
            'Sea salt',
            'Fresh cracked black pepper',
            'Lemon wedges for serving'
        ],
        instructions: [
            'Remove steaks from refrigerator 30 minutes before cooking to reach room temperature.',
            'Preheat grill to high heat (450-500°F).',
            'Brush steaks with olive oil and season generously with salt and pepper.',
            'Place steaks on the hot grill and cook for 4-5 minutes without moving.',
            'Flip steaks and add garlic, rosemary, and butter on top.',
            'Cook for another 4-5 minutes for medium-rare (internal temp 130-135°F).',
            'Remove from grill and let rest for 5-7 minutes.',
            'Serve with lemon wedges and enjoy!'
        ],
        tips: [
            'Use a meat thermometer for perfect doneness every time.',
            'Don\'t skip the resting period - it redistributes the juices.',
            'Pat steaks dry before seasoning for a better crust.',
            'Try adding a pat of herb butter on top before serving.'
        ],
        nutritionHighlights: [
            'Excellent source of protein (52g per serving)',
            'Rich in iron and zinc',
            'Contains vitamin B12',
            'Good source of omega-3 fatty acids'
        ],
        bestOccasions: [
            'Special dinner dates',
            'Weekend BBQs',
            'Celebration dinners',
            'Father\'s Day meals'
        ]
    },
    {
        id: 'spicy-shrimp-tacos',
        title: 'Spicy Shrimp Tacos',
        shortIntro: 'Zesty grilled shrimp with fresh cabbage slaw and creamy chipotle sauce in warm tortillas.',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1080',
        servingSize: '4 servings',
        prepTime: 20,
        cookTime: 8,
        servings: 4,
        difficulty: 'Easy',
        category: 'Quick Meal',
        ingredients: [
            '1.5 lbs large shrimp, peeled and deveined',
            '2 tsp chili powder',
            '1 tsp cumin',
            '1 tsp paprika',
            '3 tbsp lime juice',
            '8 small flour tortillas',
            '2 cups red cabbage, shredded',
            '1 cup Greek yogurt',
            '2 tbsp chipotle in adobo',
            '1 avocado, sliced',
            'Fresh cilantro',
            'Salt and pepper'
        ],
        instructions: [
            'In a bowl, toss shrimp with chili powder, cumin, paprika, 1 tbsp lime juice, salt, and pepper.',
            'Heat a large skillet over medium-high heat.',
            'Cook shrimp for 2-3 minutes per side until pink and cooked through.',
            'Make chipotle sauce by mixing Greek yogurt, chipotle, and remaining lime juice.',
            'Warm tortillas in a dry skillet for 30 seconds each side.',
            'Assemble tacos with shredded cabbage, shrimp, avocado slices, and chipotle sauce.',
            'Top with fresh cilantro and serve immediately.'
        ],
        tips: [
            'Don\'t overcook shrimp - they cook fast and get rubbery when overdone.',
            'Make the slaw ahead of time for easier assembly.',
            'Add pickled red onions for extra tang.',
            'Char tortillas slightly for added flavor.'
        ],
        nutritionHighlights: [
            'High in protein, low in calories',
            'Rich in omega-3 fatty acids',
            'Good source of selenium',
            'Contains vitamin D'
        ],
        bestOccasions: [
            'Taco Tuesday',
            'Summer parties',
            'Quick weeknight dinners',
            'Beach gatherings'
        ]
    },
    {
        id: 'mediterranean-greek-salad',
        title: 'Fresh Mediterranean Greek Salad',
        shortIntro: 'Crisp vegetables, tangy feta cheese, and Kalamata olives tossed in herb vinaigrette.',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1080',
        servingSize: '6 servings',
        prepTime: 15,
        cookTime: 0,
        servings: 6,
        difficulty: 'Easy',
        category: 'Breakfast',
        ingredients: [
            '4 large tomatoes, cut into wedges',
            '2 cucumbers, sliced',
            '1 red onion, thinly sliced',
            '1 cup Kalamata olives',
            '8 oz feta cheese, cubed',
            '1/4 cup extra virgin olive oil',
            '2 tbsp red wine vinegar',
            '1 tsp dried oregano',
            '1 tsp fresh lemon juice',
            'Fresh herbs (parsley, mint)',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Cut tomatoes into wedges and place in large bowl.',
            'Add sliced cucumbers and red onions.',
            'Toss in Kalamata olives and feta cheese cubes.',
            'In a small bowl, whisk together olive oil, red wine vinegar, oregano, and lemon juice.',
            'Pour dressing over salad and toss gently.',
            'Season with salt and pepper.',
            'Garnish with fresh herbs and serve immediately.'
        ],
        tips: [
            'Use ripe, in-season tomatoes for best flavor.',
            'Don\'t overdress - Greek salad should be light and fresh.',
            'Add grilled chicken for a protein boost.',
            'Let salad sit for 10 minutes before serving to marry flavors.'
        ],
        nutritionHighlights: [
            'Low calorie, nutrient-dense',
            'High in vitamins A and C',
            'Good source of calcium from feta',
            'Heart-healthy Mediterranean diet'
        ],
        bestOccasions: [
            'Summer lunches',
            'Healthy side dish',
            'Picnics',
            'Light dinners'
        ]
    },
    {
        id: 'classic-chocolate-chip-cookies',
        title: 'Classic Chocolate Chip Cookies',
        shortIntro: 'Soft, chewy cookies loaded with chocolate chips - the ultimate comfort treat.',
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1080',
        servingSize: '24 cookies',
        prepTime: 15,
        cookTime: 12,
        servings: 24,
        difficulty: 'Easy',
        category: 'Dessert',
        ingredients: [
            '2 1/4 cups all-purpose flour',
            '1 tsp baking soda',
            '1 tsp salt',
            '1 cup butter, softened',
            '3/4 cup granulated sugar',
            '3/4 cup brown sugar',
            '2 large eggs',
            '2 tsp vanilla extract',
            '2 cups semi-sweet chocolate chips',
            '1 cup chopped walnuts (optional)'
        ],
        instructions: [
            'Preheat oven to 375°F.',
            'Mix flour, baking soda, and salt in a bowl.',
            'In another bowl, beat butter and both sugars until creamy.',
            'Add eggs and vanilla to butter mixture and beat well.',
            'Gradually stir in flour mixture.',
            'Fold in chocolate chips and walnuts.',
            'Drop rounded tablespoons onto ungreased cookie sheets.',
            'Bake for 9-12 minutes until golden brown.',
            'Cool on baking sheet for 2 minutes, then transfer to wire rack.'
        ],
        tips: [
            'Chill dough for 30 minutes for thicker cookies.',
            'Use parchment paper to prevent sticking.',
            'Slightly underbake for softer, chewier cookies.',
            'Add sea salt on top before baking for gourmet touch.'
        ],
        nutritionHighlights: [
            'Contains antioxidants from chocolate',
            'Provides quick energy',
            'Good source of iron',
            'Comfort food that brings joy!'
        ],
        bestOccasions: [
            'After-school snacks',
            'Holiday baking',
            'Gift giving',
            'Midnight cravings'
        ]
    },
    {
        id: 'crispy-buffalo-wings',
        title: 'Crispy Buffalo Wings',
        shortIntro: 'Extra crispy chicken wings tossed in spicy buffalo sauce with blue cheese dip.',
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=1080',
        servingSize: '4-6 servings',
        prepTime: 15,
        cookTime: 45,
        servings: 5,
        difficulty: 'Medium',
        category: 'Main Course',
        ingredients: [
            '3 lbs chicken wings',
            '2 tbsp baking powder',
            '1 tsp salt',
            '1 tsp garlic powder',
            '1/2 cup hot sauce (Frank\'s RedHot)',
            '4 tbsp butter, melted',
            '1 tbsp honey',
            'Blue cheese dressing',
            'Celery sticks',
            'Ranch dressing'
        ],
        instructions: [
            'Preheat oven to 425°F and line baking sheet with parchment paper.',
            'Pat chicken wings completely dry with paper towels.',
            'Toss wings with baking powder, salt, and garlic powder.',
            'Arrange wings on baking sheet in single layer.',
            'Bake for 40-45 minutes, flipping halfway, until crispy and golden.',
            'Mix hot sauce, melted butter, and honey in a large bowl.',
            'Toss cooked wings in buffalo sauce until well coated.',
            'Serve with blue cheese dressing and celery sticks.'
        ],
        tips: [
            'Baking powder is the secret to extra crispy wings!',
            'Make sure wings are completely dry before coating.',
            'For extra crispy, broil for last 2-3 minutes.',
            'Adjust hot sauce amount for desired spice level.'
        ],
        nutritionHighlights: [
            'High in protein',
            'Good source of B vitamins',
            'Contains selenium',
            'Provides iron'
        ],
        bestOccasions: [
            'Game day parties',
            'Super Bowl gatherings',
            'Sports bar nights at home',
            'Casual get-togethers'
        ]
    },
    {
        id: 'vegetable-stir-fry',
        title: 'Colorful Veggie Stir-Fry',
        shortIntro: 'Vibrant mix of fresh vegetables in a savory Asian-inspired sauce over rice.',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=1080',
        servingSize: '4 servings',
        prepTime: 15,
        cookTime: 10,
        servings: 4,
        difficulty: 'Easy',
        category: 'Quick Meal',
        ingredients: [
            '2 cups broccoli florets',
            '1 red bell pepper, sliced',
            '1 yellow bell pepper, sliced',
            '1 cup snap peas',
            '2 carrots, julienned',
            '3 tbsp soy sauce',
            '2 tbsp sesame oil',
            '1 tbsp rice vinegar',
            '2 tsp fresh ginger, grated',
            '3 cloves garlic, minced',
            '2 tsp cornstarch',
            'Sesame seeds for garnish',
            'Cooked rice for serving'
        ],
        instructions: [
            'Mix soy sauce, sesame oil, rice vinegar, and cornstarch in a small bowl.',
            'Heat a large wok or skillet over high heat.',
            'Add a drizzle of oil and stir-fry broccoli for 2 minutes.',
            'Add bell peppers, snap peas, and carrots. Stir-fry for 3-4 minutes.',
            'Add ginger and garlic, cook for 30 seconds.',
            'Pour in sauce and toss everything together for 2 minutes.',
            'Garnish with sesame seeds.',
            'Serve immediately over hot rice.'
        ],
        tips: [
            'Keep vegetables crisp - don\'t overcook!',
            'Cut all vegetables before starting for quick cooking.',
            'Add tofu, chicken, or shrimp for protein.',
            'Use day-old rice for best fried rice texture.'
        ],
        nutritionHighlights: [
            'Packed with vitamins and minerals',
            'Low calorie, high fiber',
            'Antioxidant-rich',
            'Plant-based and vegan-friendly'
        ],
        bestOccasions: [
            'Meatless Monday',
            'Quick weeknight meals',
            'Healthy lunch prep',
            'Light dinners'
        ]
    },
    {
        id: 'homemade-blueberry-muffins',
        title: 'Homemade Blueberry Muffins',
        shortIntro: 'Moist, fluffy muffins bursting with fresh blueberries and a crumbly streusel top.',
        image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=1080',
        servingSize: '12 muffins',
        prepTime: 15,
        cookTime: 22,
        servings: 12,
        difficulty: 'Easy',
        category: 'Breakfast',
        ingredients: [
            '2 cups all-purpose flour',
            '2 tsp baking powder',
            '1/2 tsp salt',
            '1/2 cup butter, softened',
            '1 cup granulated sugar',
            '2 large eggs',
            '1 tsp vanilla extract',
            '1/2 cup milk',
            '2 cups fresh blueberries',
            '2 tbsp sugar for topping'
        ],
        instructions: [
            'Preheat oven to 375°F and line muffin tin with paper liners.',
            'Mix flour, baking powder, and salt in a bowl.',
            'In another bowl, cream butter and sugar until fluffy.',
            'Beat in eggs one at a time, then add vanilla.',
            'Alternate adding flour mixture and milk, starting and ending with flour.',
            'Gently fold in blueberries.',
            'Fill muffin cups 3/4 full.',
            'Sprinkle tops with sugar.',
            'Bake for 20-22 minutes until golden and toothpick comes out clean.',
            'Cool in pan for 5 minutes, then transfer to wire rack.'
        ],
        tips: [
            'Toss blueberries in flour to prevent sinking.',
            'Don\'t overmix batter - lumps are okay!',
            'Use room temperature ingredients for best results.',
            'Add lemon zest for bright citrus flavor.'
        ],
        nutritionHighlights: [
            'Rich in antioxidants from blueberries',
            'Good source of fiber',
            'Contains vitamin C',
            'Provides energy for breakfast'
        ],
        bestOccasions: [
            'Weekend breakfast',
            'Brunch gatherings',
            'School snacks',
            'Coffee shop mornings'
        ]
    },
    {
        id: 'classic-grilled-cheese',
        title: 'Ultimate Grilled Cheese Sandwich',
        shortIntro: 'Perfectly golden, buttery bread with melted cheddar and American cheese blend.',
        image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=1080',
        servingSize: '2 sandwiches',
        prepTime: 5,
        cookTime: 8,
        servings: 2,
        difficulty: 'Easy',
        category: 'Quick Meal',
        ingredients: [
            '4 slices sourdough bread',
            '4 slices cheddar cheese',
            '2 slices American cheese',
            '3 tbsp butter, softened',
            '1 tsp garlic powder',
            'Pinch of salt'
        ],
        instructions: [
            'Mix softened butter with garlic powder and salt.',
            'Spread butter mixture on one side of each bread slice.',
            'Place bread butter-side down in a skillet over medium heat.',
            'Layer cheddar and American cheese on bread.',
            'Top with remaining bread slices, butter-side up.',
            'Cook for 3-4 minutes until golden brown and crispy.',
            'Flip carefully and cook another 3-4 minutes.',
            'Remove when cheese is fully melted and bread is golden.',
            'Cut diagonally and serve hot.'
        ],
        tips: [
            'Low and slow heat ensures melted cheese and crispy bread.',
            'Use a mix of cheeses for best flavor and melt.',
            'Add tomato slices or bacon for variations.',
            'Press down gently with spatula while cooking.'
        ],
        nutritionHighlights: [
            'Good source of calcium',
            'Provides protein',
            'Comfort food classic',
            'Quick energy boost'
        ],
        bestOccasions: [
            'Quick lunch',
            'Rainy day comfort',
            'Late night snacks',
            'Kids\' favorite meal'
        ]
    },
    {
        id: 'creamy-tomato-soup',
        title: 'Creamy Tomato Basil Soup',
        shortIntro: 'Velvety smooth tomato soup with fresh basil and a touch of cream.',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1080',
        servingSize: '6 servings',
        prepTime: 10,
        cookTime: 30,
        servings: 6,
        difficulty: 'Easy',
        category: 'Main Course',
        ingredients: [
            '2 cans (28 oz each) crushed tomatoes',
            '1 onion, diced',
            '4 cloves garlic, minced',
            '2 cups vegetable broth',
            '1 cup heavy cream',
            '1/4 cup fresh basil, chopped',
            '2 tbsp olive oil',
            '1 tsp sugar',
            'Salt and pepper to taste',
            'Croutons for serving'
        ],
        instructions: [
            'Heat olive oil in a large pot over medium heat.',
            'Sauté onion until translucent, about 5 minutes.',
            'Add garlic and cook for 1 minute.',
            'Add crushed tomatoes, vegetable broth, and sugar.',
            'Bring to a boil, then reduce heat and simmer for 20 minutes.',
            'Use immersion blender to puree soup until smooth.',
            'Stir in heavy cream and fresh basil.',
            'Season with salt and pepper.',
            'Serve hot with croutons and extra basil.'
        ],
        tips: [
            'Use quality canned tomatoes for best flavor.',
            'Add a pinch of red pepper flakes for heat.',
            'Perfect paired with grilled cheese sandwiches.',
            'Can be made ahead and reheated.'
        ],
        nutritionHighlights: [
            'Rich in lycopene',
            'Good source of vitamin C',
            'Contains antioxidants',
            'Heart-healthy'
        ],
        bestOccasions: [
            'Cold weather comfort',
            'Sick day meals',
            'Lunch with sandwiches',
            'Easy weeknight dinners'
        ]
    },
    {
        id: 'crispy-fish-and-chips',
        title: 'British-Style Fish & Chips',
        shortIntro: 'Beer-battered cod with crispy fries, served with tartar sauce and lemon.',
        image: 'https://images.unsplash.com/photo-1579208570378-8c970854bc23?w=1080',
        servingSize: '4 servings',
        prepTime: 20,
        cookTime: 25,
        servings: 4,
        difficulty: 'Medium',
        category: 'Main Course',
        ingredients: [
            '1.5 lbs cod fillets',
            '4 large russet potatoes',
            '1 cup all-purpose flour',
            '1 cup beer (lager)',
            '1 tsp baking powder',
            '1 tsp paprika',
            'Salt and pepper',
            'Vegetable oil for frying',
            'Tartar sauce',
            'Lemon wedges',
            'Malt vinegar'
        ],
        instructions: [
            'Cut potatoes into thick fries and soak in cold water for 30 minutes.',
            'Heat oil to 350°F in a deep fryer or large pot.',
            'Make batter by mixing flour, baking powder, paprika, and beer until smooth.',
            'Dry fish fillets and season with salt and pepper.',
            'Fry potatoes in batches until golden, about 5-6 minutes. Set aside.',
            'Dip fish in batter and carefully place in hot oil.',
            'Fry fish for 5-7 minutes until golden and crispy.',
            'Drain on paper towels.',
            'Serve fish and chips with tartar sauce, lemon wedges, and malt vinegar.'
        ],
        tips: [
            'Keep oil temperature consistent for even cooking.',
            'Use fresh cod or haddock for best results.',
            'Double-fry chips for extra crispy texture.',
            'Serve immediately while hot and crispy.'
        ],
        nutritionHighlights: [
            'High in protein from fish',
            'Good source of omega-3s',
            'Contains vitamin B12',
            'Provides potassium from potatoes'
        ],
        bestOccasions: [
            'Friday night dinners',
            'Pub-style meals at home',
            'Family gatherings',
            'Casual entertaining'
        ]
    },
    {
        id: 'caesar-salad',
        title: 'Classic Caesar Salad',
        shortIntro: 'Crisp romaine lettuce with creamy Caesar dressing, parmesan, and crunchy croutons.',
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=1080',
        servingSize: '4 servings',
        prepTime: 15,
        cookTime: 0,
        servings: 4,
        difficulty: 'Easy',
        category: 'Breakfast',
        ingredients: [
            '2 large romaine lettuce heads',
            '1/2 cup mayonnaise',
            '2 tbsp lemon juice',
            '2 tsp Dijon mustard',
            '2 cloves garlic, minced',
            '3 anchovy fillets, minced',
            '1/2 cup grated Parmesan cheese',
            '1 cup croutons',
            '2 tbsp olive oil',
            'Salt and pepper',
            'Worcestershire sauce'
        ],
        instructions: [
            'Wash and chop romaine lettuce into bite-sized pieces.',
            'In a bowl, whisk together mayonnaise, lemon juice, Dijon mustard, and garlic.',
            'Add minced anchovies and a dash of Worcestershire sauce.',
            'Whisk in olive oil until smooth and creamy.',
            'Season dressing with salt and pepper to taste.',
            'Toss lettuce with dressing until well coated.',
            'Top with grated Parmesan cheese and croutons.',
            'Serve immediately for best texture.'
        ],
        tips: [
            'Make dressing ahead and refrigerate for deeper flavors.',
            'Add grilled chicken for a complete meal.',
            'Use quality Parmesan for authentic flavor.',
            'Don\'t dress salad until ready to serve to keep lettuce crisp.'
        ],
        nutritionHighlights: [
            'Low carb option',
            'Good source of vitamins A and K',
            'Provides calcium',
            'Contains beneficial fats'
        ],
        bestOccasions: [
            'Restaurant-quality lunch',
            'Dinner party side',
            'Date night starter',
            'Healthy office lunch'
        ]
    },
    {
        id: 'spaghetti-carbonara',
        title: 'Authentic Spaghetti Carbonara',
        shortIntro: 'Silky pasta with crispy pancetta, eggs, and Parmesan in a creamy sauce.',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=1080',
        servingSize: '4 servings',
        prepTime: 10,
        cookTime: 15,
        servings: 4,
        difficulty: 'Medium',
        category: 'Main Course',
        ingredients: [
            '1 lb spaghetti',
            '6 oz pancetta or bacon, diced',
            '4 large egg yolks',
            '1 whole egg',
            '1 cup Parmesan cheese, grated',
            '3 cloves garlic, minced',
            'Fresh black pepper',
            'Salt',
            'Fresh parsley for garnish'
        ],
        instructions: [
            'Cook spaghetti in salted boiling water until al dente. Reserve 1 cup pasta water.',
            'While pasta cooks, fry pancetta in a large skillet until crispy.',
            'Add garlic to pancetta and cook for 1 minute. Remove from heat.',
            'In a bowl, whisk together egg yolks, whole egg, and Parmesan cheese.',
            'Add generous amount of black pepper to egg mixture.',
            'Drain pasta and add to skillet with pancetta.',
            'Remove skillet from heat and quickly stir in egg mixture.',
            'Add pasta water gradually until sauce is creamy.',
            'Serve immediately with extra Parmesan and black pepper.'
        ],
        tips: [
            'Remove pan from heat before adding eggs to prevent scrambling.',
            'Use real Parmesan, not pre-grated.',
            'Work quickly to create a silky sauce.',
            'No cream in authentic carbonara!'
        ],
        nutritionHighlights: [
            'High in protein',
            'Good source of calcium',
            'Provides energy from pasta',
            'Contains vitamin B12'
        ],
        bestOccasions: [
            'Italian night at home',
            'Impressive dinner parties',
            'Date night meals',
            'Comfort food cravings'
        ]
    }
];
