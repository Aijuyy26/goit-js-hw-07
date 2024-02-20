
const categoriesList = document.querySelector('#categories');

const categories = categoriesList.querySelectorAll('.item');

console.log(`Всего категорий: ${categories.length}`);

categories.forEach(category => {

  const categoryName = category.querySelector('h2').textContent;

  const categoryItems = category.querySelectorAll('li');

  console.log(`Категория: ${categoryName}`);
  
  console.log(`Количество элементов: ${categoryItems.length}`);
});

