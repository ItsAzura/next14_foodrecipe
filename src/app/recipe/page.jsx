import React from 'react';
import styles from './recipe.module.css';
import RecipeList from '@/components/recipelist/recipelist';

const RecipePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Recipe App</h1>
      <RecipeList />
    </div>
  );
};

export default RecipePage;
