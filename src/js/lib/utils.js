export const getTodosByCategory = (todos, selectedCategory) => {
  return selectedCategory === 'all' ? todos : todos.filter(({ category }) => category === selectedCategory);
}