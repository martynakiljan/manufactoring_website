import App from '../App'
import {LocationDisplay} from '../App'
import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router ,  BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { render } from 'react-dom'
window.React = React

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

      test('full app rendering', () => {
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
    

      test('rendering a component that uses useLocation', () => {
        const history = createMemoryHistory()
        const route = '/some-route'
        history.push(route)
        render(
          <Router history={history}>
            <LocationDisplay />
          </Router>
        )
      
        expect(screen.getByTestId('location-display')).toHaveTextContent(route)
      })




      const renderWithRouter = (ui, { route = '/' } = {}) => {
        window.history.pushState({}, 'Test page', route)
      
        return render(ui, { wrapper: BrowserRouter })
      }



      test('landing on a bad page', () => {
        renderWithRouter(<App />, { route: '/something-that-does-not-match' })
      
        expect(screen.getByText(/page not found!/i)).toBeInTheDocument()
      })
     


      test("navigates home when you click the logo", async() => {
    
        jest.setTimeout(5000)

          render(
            <BrowserRouter initialEntries={['/']}>
              <App />
            </BrowserRouter>,
         
          );
          const HomeLink = screen.getByTestId('logo')
          fireEvent.click(HomeLink)

          expect(await screen.findByText(/home/i)).toBeInTheDocument()
       
          
      });

      
     
      
      
     
      
})