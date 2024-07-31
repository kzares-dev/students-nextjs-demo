const TableHeader = () => {
  return (
    <div className="table_header">
      <h2>Products</h2>
      <button>Create New</button>
      <select name="" id="">
        <option value="">Type1</option>
        <option value="">Type2</option>
        <option value="">Type3</option>
      </select>
      <div className="input_search">
        <input type="search" placeholder="Search..." />
        {/* TODO: search icon */}
      </div>
    </div>
  );
};

export default TableHeader;
