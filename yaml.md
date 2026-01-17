
## **YAML - A complete course for developers**

[![YAML - A complete course for developers](https://img.youtube.com/vi/NaoMEy_urlI/0.jpg)](https://youtu.be/NaoMEy_urlI?si=zoqkoiNJksy0H_3B)

> YAML(Ain't Markup Language) - is a data serialisation format. e.g., XML(eXtensible Markup Language), JSON(JavaScript Object Notation). Extension starts ends with .yaml or .yml

```yaml

# chai_type: masala_chai
temperature: hot # Inline comments
servings: 2
brewing_time: 5

chai_recipe:
  base: black_tea
  milk: whole_milk

chai_recipe_two:
  base: green_tea
  milk: almond_milk

chai_name: Masala Chai
description: "Chai with cardamom, cinnamon, ginger"
tagline: 'The best chai in town!'

brewing_instruction: | # multiline string
  boil water
  add tea leaves
  add milk

brewing_instruction: > # multiline string but this will be treated as a single line.
  boil water
  add tea leaves
  add milk

cups_per_day: 3
cups_per_serving: 3+5e+2
cups_per_week: 0xFF22FF

is_hot: true
add_sugar: yes
add_salt: no # yaml automatically ditects of what type of datatype it is.
instant: off # n, N, false, False, FALSE

sweetner: null
alternative_milk: ~ # null

morning_brew: 2025-01-15
local_time: 2025-01-15 08:30:01

spice: #list
  - ginger
  - cloves
  - cardamom

# spices: [ginger, cloves, cardamom] # list - old format

---

steeping_times: [3, 2, 1]

---

{ingredients: "sugar", "tea_leaves", "cardamom"}

---
chai_categories:
  - name: Traditional
    varities:
        - Masala Chai
        - Ginger Chai
        - Cardmon Chai
  - name: Modern
    varities:
        - Vanilla Chai
        - Mint Chai
        - Chocolate Chai

--- # Now, yaml(is a collection of 0 or more documents and gets seperated by "---") will know this is a different type of document

masala_chai:
  ingredients:
    tea: black_tea
    liquid: 
      water: 200ml
      milk: 100ml
    spices:
      ginger: 1_inch
      cinnamon: 1_stick
  preparation:
   method: simmer
   duration: 5_minutes
  
chai_menu: # list of dictionaries 
  - name: Masala Chai
    price: 3$
    size: medium

  - name: Vanilla Chai
    price: 4$
    size: regular

# Reusing properties with anchors
default_chai_base: &default_base
  tea: black_tea
  water: 200ml
  brewing_time: 5

morning_chai: # pointing the anchor
  <<: *default_base
  milk: 100ml

evening_chai: 
 <<: *default_base
 brewing_time: 10 # overwrite
 milk: 50ml

zip_code: !!str 12345 # enforced string
count: !!int "123" # force integer

chai_ingredients: !!seq
  - tea_leaves
  - milk
  - spices
# some of the seq will be empty known as sparse seq
  - 
  - sugar
---

# nested sequence

- 
  - tea_leaves
  - milk
  - spices
- 
  - sugar
  - water
  - spices

# key: value pairs are called maps
!!map
# nested mappings: map within an map
chai: Black_tea
preparation: {method: simmer, duration: 5_minutes} # another way of writting it

# one key to have multiple/duplicates values - pairs
chai: !!pairs
  - name: Masala chai
  - taste: Sweet # this will be a hash table containing arrays or array of hash tables in json

chai: !!pairs [name: Masala chai, taste: Sweet]

---

# !!set - will allow the user to have unique values for ex like email
unique_spices: !!set
  ? cardamon
  ? ginger
  ? cloves

# dictionary !!omap
chai: !!omap
  - Masala chai:
    price: 3$
    size: medium
    taste: sour
  - Vanilla chai:
    price: 4$
    size: regular
    taste: sweet
  
---

"chai": "Its a drink that tastes sweeter when you add sugar to it."

... # document finished here
```

# **_Complete YAML Course - Beginner to Advanced for DevOps and more!_**

[![Complete YAML Course - Beginner to Advanced for DevOps and more!](https://img.youtube.com/vi/IA90BTozdow/0.jpg)](https://youtu.be/IA90BTozdow?si=eybtMuagsnxHHfzu)

> Its a data format used to exchange data. In YAML, we can store only data and not commands. Where Serialisation is the process of converting the data objects in complex data structure into a stream or series of bytes that saves the state of this object in a form that is easily transmittable. In YAML, we can store documents and data objects.


YAML(is a markup language that is used to store data and known as data serialisation language used in configuration files) files are serialized representations of:
- Application configurations (Docker)
- Infrastructure states (Kubernetes)

Benifits
  - Simple & easy to read
  - It has a strict syntax - Indentation is important
  - Easily convertable to JSON, XML.
  - More powerfull when representing complex data
  - Parsing is easy.

```json
// this is json representation
{
  "name": "Masala Chai",
  "price": 3,
  "size": "medium",
  "ingredients": {
    "tea": "black_tea",
    "liquid": {
      "water": "200ml",
      "milk": "100ml"
    },
    "spices": [
      "ginger",
      "cinnamon",
      "cardamom"
    ]
  }
}
```

```xml
<?xml version="1.0" encoding="UTF-8">
<School name="Kendriya Vidhyalay" address="CCI Bokajan">
 <Students>
    <Student>
       <name>"Sumanta Bhattacharya"</name>
       <roll_no>1</roll_no>
       <marks>69.8%</marks>
    </Student>
 </Students>
</School>
```
