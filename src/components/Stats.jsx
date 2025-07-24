export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const packed = items.filter((item) => item.packed);
  const percentage = Math.round((packed.length / numItems) * 100);

  return (
    <em>
      <footer className="stats">
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} item(s) on your list, and you already packed ${packed.length} (${percentage}%)`}
      </footer>
    </em>
  );
}
