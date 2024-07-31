import { tableHead } from "@/lib/constants";

const Table = () => {
  return (
    <section className="container">
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

      <table>

        <thead>
          <tr>
            {tableHead.map((headItem) => (
              <th key={headItem}> {headItem} </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John</td>
            <td>Deo</td>
            <td>johndeo@gmail.com</td>
            <td>12</td>
            <td>2</td>
            <td>
              A {/* TODO: icons for delete and edit */}
              B
            </td>
          </tr>
          <tr>
            <td>John</td>
            <td>Deo</td>
            <td>johndeo@gmail.com</td>
            <td>12</td>
            <td>2</td>
            <td>
              A {/* TODO: icons for delete and edit */}
              B
            </td>
          </tr>
          <tr>
            <td>John</td>
            <td>Deo</td>
            <td>johndeo@gmail.com</td>
            <td>12</td>
            <td>2</td>
            <td>
              A {/* TODO: icons for delete and edit */}
              B
            </td>
          </tr>
          <tr>
            <td>John</td>
            <td>Deo</td>
            <td>johndeo@gmail.com</td>
            <td>12</td>
            <td>2</td>
            <td>
              A {/* TODO: icons for delete and edit */}
              B
            </td>
          </tr>
        </tbody>

      </table>

      <div className="table_fotter">
        <p>Row count: 4</p>
      </div>
    </section>
  );
};

export default Table;
