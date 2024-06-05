'use client';
import React, { useEffect } from 'react';
import Loading from '@/components/loading/Loading';
import Link from 'next/link';
import styles from './recipelist.module.css';

const RecipeList = () => {
  const [loading, setLoading] = React.useState(true);
  const [recipes, setRecipes] = React.useState([]);

  const handleFetchRecipes = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://dummyjson.com/recipes', {
        cache: 'no-cache',
      });
      const data = await res.json();
      if (data?.recipes) {
        setRecipes(data.recipes);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchRecipes();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className={styles.container}>
      {recipes.map((recipe) => (
        <Link key={recipe.id} href={`./recipe/${recipe.id}`}>
          <h3>{recipe.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
