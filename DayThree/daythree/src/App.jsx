// src/App.jsx
import React, { useState } from 'react';
import RecipeList from './RecipeList';

const recipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    image: 'https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BhZ2hldHRpJTIwQ2FyYm9uYXJhfGVufDB8fDB8fHww',
    ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan', 'Black Pepper'],
    instructions: 'Boil the spaghetti. In a separate bowl, mix eggs and cheese. Fry the pancetta until crispy. Combine everything and season with pepper.'
  },
  {
    id: 2,
    title: 'Chicken Curry',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGN1cnJ5fGVufDB8fDB8fHww',
    ingredients: ['Chicken', 'Onion', 'Garlic', 'Curry Powder', 'Coconut Milk'],
    instructions: 'Fry the onion and garlic. Add chicken and cook until browned. Stir in curry powder and coconut milk. Simmer until chicken is fully cooked.'
  },
  {
    id: 3,
    title: 'Avocado Toast',
    image: 'https://images.unsplash.com/photo-1620921575116-fb8902865f81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEF2YWNvZGElMjB0b2FzdHxlbnwwfHwwfHx8MA%3D%3D',
    ingredients: ['Bread', 'Avocado', 'Lemon Juice', 'Salt', 'Pepper'],
    instructions: 'Toast the bread. Mash avocado and mix with lemon juice, salt, and pepper. Spread on toast and serve.'
  },
  {
    id: 4,
    title: 'Pancakes',
    image: 'https://images.unsplash.com/photo-1497445702960-c21c96af4c68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFuY2FrZXN8ZW58MHx8MHx8fDA%3D',
    ingredients: ['Flour', 'Milk', 'Eggs', 'Butter', 'Maple Syrup'],
    instructions: 'Mix flour, milk, and eggs. Fry in butter until golden. Serve with syrup.'
  },
  {
    id: 5,
    title: 'Tacos',
    image: 'https://plus.unsplash.com/premium_photo-1678051141689-1f7a7861b3b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VGFjb3MlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
    ingredients: ['Tortillas', 'Beef', 'Cheese', 'Lettuce', 'Salsa'],
    instructions: 'Cook beef and season. Add to tortillas with cheese, lettuce, and salsa.'
  },
  {
    id: 6,
    title: 'Pizza Margherita',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBtYWdoZXJpdGF8ZW58MHx8MHx8fDA%3D',
    ingredients: ['Pizza Dough', 'Tomato Sauce', 'Mozzarella', 'Basil'],
    instructions: 'Roll out dough, add sauce, cheese, and basil. Bake until golden.'
  },
  {
    id: 7,
    title: 'Caesar Salad',
    image: 'https://plus.unsplash.com/premium_photo-1700089483464-4f76cc3d360b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Flc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D',
    ingredients: ['Romaine Lettuce', 'Croutons', 'Caesar Dressing', 'Parmesan'],
    instructions: 'Mix lettuce, croutons, and dressing. Top with Parmesan.'
  },
  {
    id: 8,
    title: 'Burger',
    image: 'https://media.istockphoto.com/id/1041137232/photo/100-gluten-free-low-carb-hamburger-and-bun.webp?a=1&b=1&s=612x612&w=0&k=20&c=gCgJvIjWWEFrshmafhiw4pUGvI72TaJyJAuoDlm9_Kc=',
    ingredients: ['Beef Patty', 'Buns', 'Lettuce', 'Tomato', 'Cheese'],
    instructions: 'Grill beef patty. Serve on buns with lettuce, tomato, and cheese.'
  },
  {
    id: 9,
    title: 'French Toast',
    image: 'https://plus.unsplash.com/premium_photo-1663840190874-8e378158dca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlbmNoJTIwdG9hc3R8ZW58MHx8MHx8fDA%3D',
    ingredients: ['Bread', 'Eggs', 'Milk', 'Cinnamon', 'Maple Syrup'],
    instructions: 'Dip bread in egg mixture. Fry and serve with syrup.'
  },
  {
    id: 10,
    title: 'Lasagna',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFzYWduYXxlbnwwfHwwfHx8MA%3D%3D',
    ingredients: ['Lasagna Noodles', 'Ground Beef', 'Tomato Sauce', 'Cheese'],
    instructions: 'Layer noodles, meat, and cheese. Bake until golden and bubbly.'
  }
];

// Generate a placeholder string from the recipe titles
const generatePlaceholder = () => {
  const recipeTitles = recipes.map(recipe => recipe.title);
  return `Search for ${recipeTitles.slice(0, 5).join(', ')}...`;
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">Recipe List</h1>
      
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder={generatePlaceholder()}  // Updated placeholder
          className="p-2 w-full max-w-md border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Recipe List */}
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}

export default App;
