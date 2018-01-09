import React from 'react'
import { shallow } from 'enzyme'
import RecipeItem from './RecipeItem'

const recipes = [
  {
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
  },
  {
    title: 'Paella',
    summary: 'This is the dramatic seafood paella that looks stunning, with crustaceans and shellfish. You can vary the quantities of seafood and also use crab, crayfish, etc.',
    vegan: false,
    vegetarian: false,
    pescatarian: true,
  },
  {
    title: 'Agedashi Tofu',
    summary: 'Agedashi Tofu is one of those magical dishes where a few simple ingredients come together in a harmonizing synergy that elevates the dish from humble to divine. It is made with blocks of soft tofu that are coated in a thin layer of potato starch before being lightly fried.',
    vegan: true,
    vegetarian: true,
    pescatarian: false,
  }
]

describe ('<RecipeItem />', () => {
  const container1 = shallow(<RecipeItem { ...recipes[0] } />)
  const container2 = shallow(<RecipeItem { ...recipes[1] } />)
  const container3 = shallow(<RecipeItem { ...recipes[2] } />)

  it('is wrapped in a article tag with class name "recipe"', () => {
    expect(container1).toHaveTagName('article')
    expect(container1).toHaveClassName('recipe')
  })

  it('contains the title', () => {
    expect(container1.find('h1')).toHaveText(recipes[0].title)
  })

  it('shows a 🥕 when it is vegetarian', () => {
    expect(container1.find('ul > li')).toHaveText('🥕')
  })

  it('shows a 🌾 when it is vegan', () => {
    expect(container3.find('ul > li')).toHaveText('🌾')
  })

  it('shows a 🐟 when it is pescatarian', () => {
    expect(container2.find('ul > li')).toHaveText('🐟')
  })
})
