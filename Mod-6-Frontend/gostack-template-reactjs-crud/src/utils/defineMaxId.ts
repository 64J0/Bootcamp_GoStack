interface IFood {
  id: number;
}

const defineMaxId = (foods: IFood[]) => {
  let maxId = 0;
  foods.map(food => {
    if (food.id > maxId) {
      maxId = food.id;
    }
    return maxId;
  });

  return maxId + 1;
};

export default defineMaxId;
