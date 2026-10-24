---
title: Animal Licenses
prev:
  text: Licenses
  link: Liscenses/Main

next:
  text: Farming Licenses
  link: Liscenses/Farming-Liscenses
---
# Animal Licenses

Animal Licenses unlock animals, factories, and upgrade paths related to animal production. Licenses are upgraded using License XP earned from Animal License tasks.

## 📈 License Progression

| License | XP Required | Description |
|----------|----------:|----------|
| 🍳 Scrambled Eggs | 3.6k XP | Takes eggs and scrambles them. |
| 🧀 Cheese Factory | 7.2k XP | Produce more with your Milk! Unlock a factory for Cheese production! |
| 🐝 Bees | 7.2k XP | Be careful! This license will allow you to keep BEES! Harvest the hives and refine them into honey. |
| 🐑 Sheep | 7.2k XP | Need a fluffier animal? Getting sheep is the way to go. Use a spindle to refine their wool. |
| 🐄 Cow Efficiency | 7.2k XP | More milk. |
| 🐔 Chicken Efficiency | 7.2k XP | More eggs. |
| 📦 Animal Food Efficiency | 7.2k XP | Makes animal food. |
| 🍕 Pizza Factory | 14.4k XP | Makes Pizza. |
| 🥣 Honey Oatmeal | 14.4k XP | Want to do more with your Honey? This factory produces Honey Oatmeal! |
| 👕 Shirt Factory | 14.4k XP | Make use of your wool bundles! Build a Shirt Factory for greater profits! |
| 🎂 Cake Factory Efficiency | 14.4k XP | More cake batter. |

## 🏭 Factory Input and Output

| Factory | Input(s) | Output |
|----------|----------|----------|
| Cheese Factory | Milk | Cheese |
| Pizza Factory | Wheat, Tomatoes, Cheese | Pizza |
| Honey Oatmeal Factory | Honey, Oats | Honey Oatmeal |
| Shirt Factory | Wool Bundles | T-Shirt Pallets |
| Cake Factory | Wheat, Eggs, Milk | Cake Batter |
| Oven | Cake Batter | Cake |

## ⚙️ Production Overview

| Source | Intermediate Products | Final Products |
|----------|----------|----------|
| Cows | Milk, Cheese | Pizza, Cake |
| Chickens | Eggs | Scrambled Eggs, Cake |
| Bees | Honey | Honey Oatmeal |
| Sheep | Wool, Wool Bundles | T-Shirt Pallets |

## 📊 Production Chains

### Chicken Products

```text
Chicken
 └─ Eggs
      └─ Scrambled Eggs
```

### Cow Products

```text
Cow
 └─ Milk
      ├─ Cheese Factory
      │    └─ Cheese
      │
      ├─ Pizza Factory
      │    ├─ Wheat
      │    ├─ Tomatoes
      │    └─ Cheese
      │          ↓
      │        Pizza
      │
      └─ Cake Factory
           ├─ Wheat
           ├─ Eggs
           └─ Milk
                 ↓
            Cake Batter
                 ↓
               Oven
                 ↓
                Cake
```

### Bee Products

```text
Beehive
 └─ Honey
      └─ Honey Oatmeal Factory
           ├─ Honey
           └─ Oats
                ↓
           Honey Oatmeal
```

### Sheep Products

```text
Sheep
 └─ Wool
      └─ Spindler
           └─ Wool Bundles
                └─ Shirt Factory
                     └─ T-Shirt Pallets
```

## ⬆️ Upgrade Paths

### Cow Efficiency

- Cow Efficiency 1
- Cow Efficiency 2
- Cow Efficiency 3
- Cow Efficiency 4

#### Effect

Each upgrade increases chances of an extra milk by 25%. More about [Cows](Animals/cows). 

### Chicken Efficiency

- Chicken Efficiency 1
- Chicken Efficiency 2
- Chicken Efficiency 3
- Chicken Efficiency 4

#### Effect
Each upgrade increases chances of an extra egg box by 25%.  More about [Chickens](Animals/chickens). 

### Sheep

#### Sheep Efficiency

- Sheep Efficiency 1
- Sheep Efficiency 2
- Sheep Efficiency 3
- Sheep Efficiency 4
- Sheep Efficiency 5

#### Effect
Each upgrade increases chances of an extra wool per sheep to appear adding a 20% chance. More about [Sheep](Animals/sheep). 

### Animal Food Efficiency

#### Animal Food Factory Capacity

- Animal Food Factory Capacity 1
- Animal Food Factory Capacity 2
- Animal Food Factory Capacity 3
- Animal Food Factory Capacity 4

#### Effect
Each upgrade increases chances of an extra animal food box by 25%. More about [Animal Food](Factories/animalfood). 

### Cheese Factory

#### Cheese Factory Efficiency

- Cheese Factory Efficiency 1
- Cheese Factory Efficiency 2
- Cheese Factory Efficiency 3
- Cheese Factory Efficiency 4
- Cheese Factory Efficiency 5

#### Effect
Each upgrade increases chances of an extra cheese by 20%. More about [Cheese Factory](Factories/cheese).

### Pizza Factory

#### Pizza Factory Efficiency

- Pizza Factory Efficiency 1
- Pizza Factory Efficiency 2
- Pizza Factory Efficiency 3
- Pizza Factory Efficiency 4
- Pizza Factory Efficiency 5

#### Effect
Each upgrade increases chances of an extra pizza by 20%. More about [Pizza Factory](Factories/pizza). 

### Bees

#### Beehive Capacity

- Beehive Capacity 1
- Beehive Capacity 2
- Beehive Capacity 3
- Beehive Capacity 4
- Beehive Capacity 5

#### Effect
Each upgrade increases chances of an extra honey by 20%. More about [Bees](Animals/bees). 

#### Honey Factory Efficiency

- Honey Factory Efficiency 1
- Honey Factory Efficiency 2
- Honey Factory Efficiency 3
- Honey Factory Efficiency 4
- Honey Factory Efficiency 5

#### Effect
Each upgrade increases chances of an extra honey by 20%. More about [Honey](Factories/honey).  

### Honey Oatmeal

#### Honey Oatmeal Efficiency

- Honey Oatmeal Efficiency 1
- Honey Oatmeal Efficiency 2
- Honey Oatmeal Efficiency 3
- Honey Oatmeal Efficiency 4
- Honey Oatmeal Efficiency 5

#### Effect
Each upgrade increases chances of an extra honey oatmeal by 20%. More about [Honey Oatmeal](Factories/oatmeal). 

### Cake Factory Efficiency

- Cake Factory Efficiency 1
- Cake Factory Efficiency 2
- Cake Factory Efficiency 3
- Cake Factory Efficiency 4

#### Effect
Each upgrade increases chances of an extra cake by 25%. More about [Cake Factory](Factories/cakebatter). 

### Shirt Factory

The Shirt Factory does not have an upgrade path. Unlocking the license grants access to the factory. Be sure to use the spindle to make bundles of wool that can be used in this factory. 

#### Effect
More about [Shirt Factory](Factories/shirt). 

## 📝 Notes

- Most factory-related licenses unlock five levels of efficiency upgrades.
- Cow Efficiency and Chicken Efficiency contain four upgrade levels.
- Bees is the only currently documented Animal License that unlocks multiple upgrade categories.
- The Cake Factory produces Cake Batter, which must then be processed in the Oven that is included with the Cake Factory unlock.