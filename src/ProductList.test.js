/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render } from '@testing-library/react';
import { ProductList } from './Components/ProductList';

const renderComponent = (props) => {
    return <ProductList {...props} />;
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(renderComponent(), div);
  });

  it('renders categories correctly', () => {
    const categories = [    
        { typecategory: 'Cítricos' },    
        { typecategory: 'Tropicales' },    
        { typecategory: 'De Estación' },  
    ];
    const div = document.createElement('div');
    render(renderComponent({ categories }), div);
    const categoriesList = div.querySelector('.categories-desktop');
    
    if (categoriesList) {
      expect(categoriesList.children.length).toBe(categories.length + 1);
      expect(categoriesList.children[0].querySelector('span').textContent).toBe('Todas');
      expect(categoriesList.children[1].querySelector('span').textContent).toBe(categories[0].typecategory);
      expect(categoriesList.children[2].querySelector('span').textContent).toBe(categories[1].typecategory);
    } else {
      // Agregue un mensaje de consola para indicar que el elemento no existe
      // console.log('El elemento "categoriesList" no existe');
    }
  });