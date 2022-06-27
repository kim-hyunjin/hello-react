import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://food-order-app-7c79d-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
      );
      const data = await response.json();
      const meals = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
      }));
      setMeals(meals);
    };

    fetchMeals();
  }, []);

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
