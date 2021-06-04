import React from 'react'
import { render } from 'react-test-renderer'
import Home from '../components/pages/Home'
import '@testing-library/jest-dom'

test('Renders the Big Screen component in the home view',
() =>{
    render(<Home></Home>)
    const bigscreen = document.getElementsByClassName("BigScreen-container")
    expect(bigscreen).toBeInTheDocument();
})

test('Renders the Footer component in the home view',
() =>{
    render(<Home></Home>)
    const footer = document.getElementsByClassName("footer-container")
    expect(footer).toBeInTheDocument();
})
test("The background image is full height", () =>{
    render(<Home />)
    const imgHeight = document.getElementsByClassName("BigScreen-image").style.height
    expect(imgHeight).toBe("100vh")
})