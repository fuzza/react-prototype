import 'react-native'
import ReactPrototype from './App'
import React from 'react'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <ReactPrototype />
  )
  expect(tree).toBeDefined()
})
