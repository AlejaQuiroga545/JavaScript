const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function makeSandwich() {
  console.clear();
  console.log("🥪 Ready to make the perfect sandwich?");
  await delay(1500);

  // Step 1: Define ingredients as an object (like a recipe card)
  const ingredients = {
    ing1: { id: 1, name: "Bread 🍞", price: 3500 },
    ing2: { id: 2, name: "Lettuce 🥬", price: 2700 },
    ing3: { id: 3, name: "Tomato 🍅", price: 3000 },
    ing4: { id: 4, name: "Cheese 🧀", price: 4500 },
    ing5: { id: 5, name: "Ham 🍖", price: 3500 }
  };

  console.log("\n📦 Gathering all fresh ingredients from the fridge...");
  await delay(1500);
  console.log("🧾 Ingredients (Object):");
  console.log(ingredients);

  // Step 2: Convert to Set to ensure no duplicates
  const ingredientsArray = Object.values(ingredients);
  const uniqueIngredientsSet = new Set(ingredientsArray);

  await delay(2000);
  console.log("\n🥣 Mixing ingredients carefully to remove any duplicates...");
  for (let item of uniqueIngredientsSet) {
    await delay(600);
    console.log(`✅ ${item.name} added – $${item.price}`);
  }

  // Step 3: Categorize ingredients using a Map
  const ingredientCategories = new Map([
    ["Base", "Bread 🍞"],
    ["Greens 🌿", "Lettuce 🥬"],
    ["Veggies 🥗", "Tomato 🍅"],
    ["Dairy", "Cheese 🧀"],
    ["Protein 💪", "Ham 🍖"]
  ]);

  await delay(2000);
  console.log("\n📚 Organizing pantry by category (Map)...");
  ingredientCategories.forEach((value, key) => {
    console.log(`➡️ ${key} ➤ ${value}`);
  });

  // Step 4.1: Loop through the Object
  await delay(2000);
  console.log("\n🔍 Reviewing ingredients one by one from the fridge (for...in)...");
  for (let key in ingredients) {
    const item = ingredients[key];
    await delay(500);
    console.log(`🔑 ${key} ➤ ${item.name} – $${item.price}`);
  }

  // Step 4.2: Loop through the Set
  await delay(2000);
  console.log("\n🔁 Tossing everything into the sandwich (for...of Set)...");
  for (let item of uniqueIngredientsSet) {
    await delay(500);
    console.log(`🥪 Added: ${item.name} – $${item.price}`);
  }

  // Step 4.3: Loop through the Map
  await delay(2000);
  console.log("\n📋 Checking ingredient placement in categories (Map forEach)...");
  ingredientCategories.forEach((ingredient, category) => {
    console.log(`📌 ${category}: ${ingredient}`);
  });

  // Step 5: Validation
  await delay(2000);
  console.log("\n👀 Final inspection: checking for duplicates...");
  if (ingredientsArray.length === uniqueIngredientsSet.size) {
    console.log("✅ Everything is fresh and unique! 🥳");
  } else {
    console.log("⚠️ Oops! Found some duplicates.");
  }

  await delay(1500);
  console.log("\n🎉 Sandwich is ready! Bon appétit! 🥪🚀");
}

// Launch the sandwich builder
makeSandwich();
