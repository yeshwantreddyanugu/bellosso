import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  isSpicy?: boolean;
}

const Menu = () => {
  const menuItems: MenuItem[] = [
    // Hot Beverages
    { id: 1, name: "Classic Espresso", description: "Rich, bold shot of premium Italian coffee beans", price: "$3.50", category: "Hot Beverages", image: "photo-1509042239860-f550ce710b93", isVegan: true },
    { id: 2, name: "Cappuccino", description: "Perfect balance of espresso, steamed milk, and velvety foam", price: "$4.75", category: "Hot Beverages", image: "photo-1572442388796-11668a67e53d", isVegetarian: true },
    { id: 3, name: "Caffe Latte", description: "Smooth espresso with steamed milk and light foam", price: "$4.95", category: "Hot Beverages", image: "photo-1461023058943-07fcbe16d735", isVegetarian: true },
    { id: 4, name: "Mocha Deluxe", description: "Rich chocolate blended with espresso and steamed milk", price: "$5.25", category: "Hot Beverages", image: "photo-1461023058943-07fcbe16d735", isVegetarian: true },
    { id: 5, name: "Chai Tea Latte", description: "Aromatic spiced tea with steamed milk and honey", price: "$4.50", category: "Hot Beverages", image: "photo-1515823064-d6e0c04616a7", isVegetarian: true, isSpicy: true },
    { id: 6, name: "Hot Chocolate Supreme", description: "Belgian chocolate with whipped cream and marshmallows", price: "$4.25", category: "Hot Beverages", image: "photo-1572490122747-3968b75cc699", isVegetarian: true },
    { id: 7, name: "French Press Coffee", description: "Full-bodied coffee brewed to perfection", price: "$4.00", category: "Hot Beverages", image: "photo-1495474472287-4d71bcdd2085", isVegan: true },
    { id: 8, name: "Green Tea", description: "Organic Japanese sencha with delicate flavor", price: "$3.25", category: "Hot Beverages", image: "photo-1515823064-d6e0c04616a7", isVegan: true, isGlutenFree: true },

    // Cold Beverages  
    { id: 9, name: "Iced Coffee", description: "Cold brew coffee served over ice with cream", price: "$3.75", category: "Cold Beverages", image: "photo-1461023058943-07fcbe16d735", isVegetarian: true },
    { id: 10, name: "Frappuccino", description: "Blended coffee drink with ice and whipped cream", price: "$5.50", category: "Cold Beverages", image: "photo-1572490122747-3968b75cc699", isVegetarian: true },
    { id: 11, name: "Iced Matcha Latte", description: "Premium Japanese matcha with cold milk over ice", price: "$4.95", category: "Cold Beverages", image: "photo-1515823064-d6e0c04616a7", isVegetarian: true },
    { id: 12, name: "Cold Brew", description: "Smooth, less acidic coffee steeped for 12 hours", price: "$4.25", category: "Cold Beverages", image: "photo-1461023058943-07fcbe16d735", isVegan: true },
    { id: 13, name: "Fruit Smoothie", description: "Blend of fresh seasonal fruits and yogurt", price: "$5.75", category: "Cold Beverages", image: "photo-1553530666-ba11a7da3888", isVegetarian: true, isGlutenFree: true },
    { id: 14, name: "Iced Tea", description: "Refreshing black tea served with lemon", price: "$3.50", category: "Cold Beverages", image: "photo-1556679343-c7306c1976bc", isVegan: true, isGlutenFree: true },

    // Breakfast
    { id: 15, name: "Avocado Toast", description: "Multigrain bread topped with fresh avocado and seasonings", price: "$8.50", category: "Breakfast", image: "photo-1541519227354-08fa5d50c44d", isVegan: true },
    { id: 16, name: "French Toast", description: "Thick cut brioche with maple syrup and berries", price: "$9.75", category: "Breakfast", image: "photo-1484723091739-30a097e8f929", isVegetarian: true },
    { id: 17, name: "Eggs Benedict", description: "Poached eggs on English muffin with hollandaise", price: "$11.95", category: "Breakfast", image: "photo-1541519227354-08fa5d50c44d", isVegetarian: true },
    { id: 18, name: "Pancakes Stack", description: "Fluffy pancakes with butter and syrup", price: "$8.25", category: "Breakfast", image: "photo-1506084868230-bb9d95c24759", isVegetarian: true },
    { id: 19, name: "Breakfast Burrito", description: "Scrambled eggs, cheese, peppers in flour tortilla", price: "$9.50", category: "Breakfast", image: "photo-1626700051175-6818013e1d4f", isVegetarian: true },
    { id: 20, name: "Oatmeal Bowl", description: "Steel-cut oats with fresh fruits and nuts", price: "$7.25", category: "Breakfast", image: "photo-1512058564366-18510be2db19", isVegan: true, isGlutenFree: true },

    // Lunch
    { id: 21, name: "Caesar Salad", description: "Crisp romaine with parmesan and house dressing", price: "$10.50", category: "Lunch", image: "photo-1512621776951-a57141f2eefd", isVegetarian: true },
    { id: 22, name: "Grilled Chicken Sandwich", description: "Herb-marinated chicken with fresh vegetables", price: "$12.75", category: "Lunch", image: "photo-1572802419224-296b0aeee0d9", isGlutenFree: true },
    { id: 23, name: "Quinoa Buddha Bowl", description: "Superfood bowl with roasted vegetables and tahini", price: "$11.95", category: "Lunch", image: "photo-1512058564366-18510be2db19", isVegan: true, isGlutenFree: true },
    { id: 24, name: "BLT Sandwich", description: "Bacon, lettuce, tomato on toasted sourdough", price: "$9.50", category: "Lunch", image: "photo-1572802419224-296b0aeee0d9", },
    { id: 25, name: "Soup of the Day", description: "Chef's special soup made with seasonal ingredients", price: "$6.75", category: "Lunch", image: "photo-1547592166-23ac45744acd", isVegetarian: true },
    { id: 26, name: "Fish Tacos", description: "Grilled fish with cabbage slaw and lime crema", price: "$13.25", category: "Lunch", image: "photo-1547592166-23ac45744acd", },

    // Pastries & Desserts
    { id: 27, name: "Chocolate Croissant", description: "Buttery pastry filled with rich dark chocolate", price: "$3.75", category: "Pastries & Desserts", image: "photo-1509440159596-0249088772ff", isVegetarian: true },
    { id: 28, name: "Blueberry Muffin", description: "Fresh baked muffin bursting with blueberries", price: "$3.25", category: "Pastries & Desserts", image: "photo-1558961363-fa8fdf82db35", isVegetarian: true },
    { id: 29, name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: "$6.50", category: "Pastries & Desserts", image: "photo-1571877227200-a0d98ea607e9", isVegetarian: true },
    { id: 30, name: "Cheesecake Slice", description: "New York style cheesecake with berry compote", price: "$5.95", category: "Pastries & Desserts", image: "photo-1533134242443-d4fd215305ad", isVegetarian: true },
    { id: 31, name: "Macarons", description: "Delicate French cookies in assorted flavors", price: "$2.50", category: "Pastries & Desserts", image: "photo-1547592166-23ac45744acd", isVegetarian: true, isGlutenFree: true },
    { id: 32, name: "Apple Pie", description: "Homemade pie with cinnamon and vanilla ice cream", price: "$6.25", category: "Pastries & Desserts", image: "photo-1568571780765-9276ac8b75a2", isVegetarian: true },

    // Snacks & Light Bites
    { id: 33, name: "Hummus Plate", description: "House-made hummus with vegetables and pita", price: "$7.50", category: "Snacks & Light Bites", image: "photo-1547592166-23ac45744acd", isVegan: true },
    { id: 34, name: "Cheese Board", description: "Selection of artisanal cheeses with crackers", price: "$12.95", category: "Snacks & Light Bites", image: "photo-1452251889946-8ff5ea7b27ab", isVegetarian: true },
    { id: 35, name: "Bruschetta", description: "Toasted bread with tomatoes, basil, and balsamic", price: "$6.75", category: "Snacks & Light Bites", image: "photo-1509440159596-0249088772ff", isVegetarian: true },
    { id: 36, name: "Nachos", description: "Tortilla chips with cheese, jalapeños, and salsa", price: "$8.25", category: "Snacks & Light Bites", image: "photo-1513456852971-30c0b8199d4d", isVegetarian: true, isSpicy: true },
    { id: 37, name: "Mixed Nuts", description: "Premium roasted nuts with sea salt", price: "$4.50", category: "Snacks & Light Bites", image: "photo-1509440159596-0249088772ff", isVegan: true, isGlutenFree: true },

    // Specialty Items
    { id: 38, name: "Affogato", description: "Vanilla gelato drowned in hot espresso", price: "$5.75", category: "Specialty Items", image: "photo-1513456852971-30c0b8199d4d", isVegetarian: true },
    { id: 39, name: "Turkish Coffee", description: "Traditional coffee with cardamom and sugar", price: "$4.25", category: "Specialty Items", image: "photo-1495474472287-4d71bcdd2085", isVegan: true },
    { id: 40, name: "Matcha Cheesecake", description: "Japanese-inspired dessert with green tea flavor", price: "$6.95", category: "Specialty Items", image: "photo-1533134242443-d4fd215305ad", isVegetarian: true },
    { id: 41, name: "Cortado", description: "Spanish coffee with equal parts espresso and warm milk", price: "$4.50", category: "Specialty Items", image: "photo-1461023058943-07fcbe16d735", isVegetarian: true },
    { id: 42, name: "Golden Milk Latte", description: "Turmeric latte with coconut milk and spices", price: "$4.95", category: "Specialty Items", image: "photo-1495474472287-4d71bcdd2085", isVegan: true, isSpicy: true },
    { id: 43, name: "Lavender Honey Cake", description: "Delicate cake infused with lavender and honey", price: "$5.50", category: "Specialty Items", image: "photo-1568571780765-9276ac8b75a2", isVegetarian: true },
    { id: 44, name: "Cold Pressed Juice", description: "Daily selection of fresh vegetable and fruit juices", price: "$6.25", category: "Specialty Items", image: "photo-1553530666-ba11a7da3888", isVegan: true, isGlutenFree: true },
    { id: 45, name: "Charcuterie Board", description: "Curated selection of meats, cheeses, and accompaniments", price: "$16.95", category: "Specialty Items", image: "photo-1452251889946-8ff5ea7b27ab", }
  ];

  const categories = [...new Set(menuItems.map(item => item.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-24 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-script text-primary-foreground mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Discover our carefully curated selection of beverages, meals, and treats
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding">
        <div className="container-custom">
          {categories.map((category) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-script text-cafe-primary mb-8 text-center">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems
                  .filter(item => item.category === category)
                  .map((item) => (
                    <Card key={item.id} className="card-hover bg-card border border-border/50">
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=400&q=80`}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl font-semibold text-foreground">
                            {item.name}
                          </CardTitle>
                          <span className="text-lg font-bold text-cafe-primary">
                            {item.price}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardDescription className="text-muted-foreground mb-3">
                          {item.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2">
                          {item.isVegetarian && (
                            <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                              Vegetarian
                            </Badge>
                          )}
                          {item.isVegan && (
                            <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                              Vegan
                            </Badge>
                          )}
                          {item.isGlutenFree && (
                            <Badge variant="secondary" className="bg-cafe-gold/10 text-cafe-gold border-cafe-gold/20">
                              Gluten Free
                            </Badge>
                          )}
                          {item.isSpicy && (
                            <Badge variant="secondary" className="bg-destructive/10 text-destructive border-destructive/20">
                              Spicy
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;