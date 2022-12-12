const Board = () => {
  return (
    <div>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="recipe">Recipe</label>
      <textarea name="recipe" id="recipe" cols="50" rows="10"></textarea>
      <button>Add Recipe</button>
    </div>
  );
};

export default Board;
