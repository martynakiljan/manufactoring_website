import App from '../App'
import {LocationDisplay} from '../App'
import { fireEvent, render, screen, userEvent } from "@testing-library/react";
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'
import { NavigationBar } from '../components/NavigationBar';


describe("testing: Website", () => {

      test('check if the title is found', async () => {
          const { container } = render(<App />)
          const title = container.querySelector('title')
          expect(title).toBeDefined()
      })

      test('check if the description is found', async () => {
          const { container } = render(<App />)
          const description = container.querySelector('description')
          expect(description).toBeDefined()
      })

      test('full app rendering/navigating', () => {
          const history = createMemoryHistory()
          render(
            <Router history={history}>
              <App />
            </Router>
        )
        expect(screen.getByText(/WHERE YOU CAN FIND US.../i)).toBeInTheDocument()

      })

      test('check if Dr. Frank appears after clicking on "about', () => {
        render (<App/>)
        const nav = screen.getByTestId('about')
        fireEvent.click(nav)
        expect(screen.getByText(/Dr Frank/i)).toBeInTheDocument()
      })
    
      
      
      test('landing on a bad page', () => {
        const history = createMemoryHistory()
        history.push('/some/bad/route')
        console.log(history)
        render(
          <Router history={history}>
            <NavigationBar />
          </Router>
        )
        expect(screen.getByText(/Page not found!/i)).toBeInTheDocument()
      })


   


})