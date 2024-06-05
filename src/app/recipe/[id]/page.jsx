'use client';
import Loading from '@/components/loading/Loading';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './detailrecipe.module.css';
import Image from 'next/image';

const DetailRecipePage = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({});

  const handleShowRecipe = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/recipes/${params.id}`,
        {
          cache: 'no-cache',
        }
      );
      if (response.ok) {
        const data = await response.json();
        setRecipe(data);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleShowRecipe();
  }, []);

  if (loading) return <Loading />;

  return (
    console.log({ recipe }),
    (
      <div className={`${styles.container} ${styles.fadeIn}`}>
        <Image src={recipe.image} width={500} height={500}></Image>
        <div className={styles.details}>
          <h1 className={styles.title}>
            {recipe?.name} (
            {Array.isArray(recipe?.tags)
              ? recipe.tags.map((tag) => tag).join(', ')
              : ''}
            )
          </h1>
          <h2 className={styles.content}>I. Ingredients</h2>
          {recipe.ingredients &&
            recipe.ingredients.map((ingredient, index) => (
              <p key={index} className={styles.contentItems}>
                {index + 1}. {ingredient}
              </p>
            ))}
          <h2 className={styles.content}>II. Instructions</h2>
          {recipe.instructions &&
            recipe.instructions.map((instruction, index) => (
              <p key={index} className={styles.contentItems}>
                Step {index + 1}: {instruction}
              </p>
            ))}

          <h2 className={styles.content}>
            III. Prepare Time: {recipe.prepTimeMinutes} minutes
          </h2>
          <h2 className={styles.content}>
            IV. Cook Time: {recipe.cookTimeMinutes} minutes
          </h2>
          <h2 className={styles.content}>
            V. Difficulty: {recipe.difficulty}{' '}
          </h2>
          <h2 className={styles.content}>
            VI. Calories: {recipe.caloriesPerServing} calories
          </h2>
        </div>
      </div>
    )
  );
};

export default DetailRecipePage;
