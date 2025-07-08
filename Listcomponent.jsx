function ListComponent({ items, renderItem, emptyMessage }) {
  if (!items || items.length === 0) {
    return <div className="empty-message">{emptyMessage || 'No items to display'}</div>;
  }

  return (
    <ul className="list-container">
      {items.map((item) => (
        <li key={item.id} className="list-item">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

export default ListComponent;
