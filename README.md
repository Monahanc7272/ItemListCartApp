## Summary 
This is a simple e-commerce cart application built with Next.js. The app allows users to browse a list of items, add them to their cart, view the cart summary, and proceed to checkout.


### Key Dependencies:

- **Next.js**: A React framework for building fast, SEO-friendly web apps.
- **React**: A JavaScript library for building user interfaces.
- **React DOM**: Provides DOM-specific methods for React.
- **@mui/icons-material**: Material UI's icons library for adding SVG icons.
- **react-hot-toast**: A package for displaying toast notifications in a modern way.
- **Tailwind CSS**: A utility-first CSS framework for styling.

### Dev Dependencies:

- **@emotion/react** and **@emotion/styled**: Libraries used for writing CSS styles with JavaScript in React components.
- **ESLint**: A tool for identifying and fixing linting issues in your code.
- **eslint-config-next**: An ESLint configuration specifically for Next.js projects.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins.

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Features

- Local storage is used to persist the cart data, so the user doesn't lose their items when refreshing the page.  
- Ensured that the app has a responsive layout and looks good on mobile and desktop.  
- A toast notifications were added to notify users when an item is added to the cart, ensuring a smooth experience without interruptions.  
- The Add to Cart operation is simulated as an asynchronous API request using async/await and Promises. This approach mimics real-world applications where cart actions often involve communication with a server or database.  

## Design Decisions

- The Proceed to Checkout button was placed at the bottom right to guide the user and align with common UX practices.  
- The number of products in the item list is displayed at the top, simulating an online shopping experience.  
- Originally the cart would automatically open when an item was added to the cart but this was a bad UX design forcing the user to open and close the cart on a mobile device. Displaying a toast message was implemented instead.   
- The Order Summary / Checkout page was implemented for the user to view a summary of the items they added to the cart and simulate an online shopping experience.  
- To improve user experience and prevent unnecessary navigation, the "Proceed to Checkout" button is only displayed when the cart contains items. This ensures that users cannot attempt to check out with an empty cart, avoiding confusion and unnecessary steps in the checkout flow.  

## Ideas / Future Work

- **Cart Item Counter:** Adding a counter to the Cart icon to display number of items in the cart.  
- **Clear Cart Button:** A button to completely clear all items in the cart.  
- **Item Sorting:** Ability to sort items alphabetically or by price in ascending/decending order. **(✅ 07/03/25)**
- **Quantity Adjustment:** Editable quantity input in the cart (instead of relying on plus/minus buttons).  
- **AppBar:** A sticky AppBar at the top as a nice UI addition and for easy navigation.  
- **Checkout Page:** Adding quantity adjustments and item removal to the Order Summary.  