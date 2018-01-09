import React from 'react'
import { shallow } from 'enzyme'
import RecipeItem from './RecipeItem'
import imageIconPescatarian from '../images/pescatarian.svg'
import imageIconVegan from '../images/vegan.svg'
import imageIconVegetarian from '../images/vegetarian.svg'

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
  const container = shallow(<RecipeItem { ...recipes[0] } />)

  it('is wrapped in a article tag with class name "recipe"', () => {
    expect(container).toHaveTagName('article')
    expect(container).toHaveClassName('recipe')
  })

  it('contains the title', () => {
    expect(container.find('h1')).toHaveText(recipes[0].title)
  })

  it('shows a vegatarion icon when it is vegetarian', () => {
    expect(container.find('ul > li > img')).toHaveProp('src', imageIconVegetarian)
  })

  describe('a vegan recipe', () => {
    const container = shallow(<RecipeItem { ...recipes[2] } />)

    it('shows a vegan icon when it is vegan', () => {
      expect(container.find('ul > li > img')).toHaveProp('src', imageIconVegan)
    })
  })

  describe('a pescatarian recipe', () => {
    const container = shallow(<RecipeItem { ...recipes[1] } />)

    it('shows a pescatarian icon when it is pescatarian', () => {
      expect(container.find('ul > li > img')).toHaveProp('src', imageIconPescatarian)
    })
  })
})
