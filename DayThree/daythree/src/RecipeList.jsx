// src/RecipeList.jsx
import React from 'react';

function RecipeList({ recipes }) {
  return (
    <div className="flex overflow-x-auto space-x-6 p-6 bg-gray-50 py-8">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="min-w-[280px] bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
          {/* Recipe Image */}
          <div className="relative">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-t-lg"></div>
          </div>

          {/* Recipe Title */}
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{recipe.title}</h2>

          {/* Recipe Ingredients */}
          <h3 className="text-lg font-medium text-gray-700 mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside mb-4 text-gray-600">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-1">{ingredient}</li>
            ))}
          </ul>

          {/* Recipe Instructions */}
          <h3 className="text-lg font-medium text-gray-700 mb-2">Instructions:</h3>
          <p className="text-gray-600">{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
