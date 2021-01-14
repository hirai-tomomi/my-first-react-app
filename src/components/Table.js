import React from 'react';
import { Button } from './Button';
const TableBodyCell = (props) => (
  <td style={{ padding: '5px 10px', border: 'solid 1px #ccc', ...props.style }}>
    {props.children}
  </td>
);
const TableHeaderCell = (props) => (
  <th
    style={{
      padding: '5px 10px',
      border: 'solid 1px #ccc',
      backgroundColor: '#ddd',
      ...props.style,
    }}
  >
    {props.children}
  </th>
);
export const Table = ({
  students,
  deleteStudent,
  updateStudent,
  pageNationStudent,
}) => {
  let chankArray = pageNationStudent();
  return (
    <div>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          border: 'solid 1px #ccc',
        }}
      >
        <thead>
          <tr>
            <TableHeaderCell>NUMBER</TableHeaderCell>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>NAME</TableHeaderCell>
            <TableHeaderCell>AGE</TableHeaderCell>
            <TableHeaderCell>ACTION</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {chankArray.length ? (
            chankArray.map((s, index) => (
              <tr key={s.id}  style={{backgroundColor:((index+1)%2) == 0 ? index : "red"}}>
                {/* NUMBERが偶数（奇数）のときに色を変える */}
                <TableBodyCell style={{color:((index+1)%2) == 0 ? index : "red"}}>
                  {(index%2) == 0 ? index+1 : index+1}
                </TableBodyCell>
                <TableBodyCell>{s.id}</TableBodyCell>
                <TableBodyCell>{s.name}</TableBodyCell>
                <TableBodyCell style={{ color: s.age > 18 ? '?' : s.id }}>
                  {s.age > 18 ? '?' : s.age}
                </TableBodyCell>
                <TableBodyCell>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      deleteStudent(s.id);
                    }}
                    title='DELETE'
                  />
                  <Button
                    style={{ marginRight: 10 }}
                    onClick={(e) => {
                      e.preventDefault();
                      updateStudent(s.id);
                      console.log('CLICKED');
                    }}
                    title='UPDATE'
                  />
                </TableBodyCell>
              </tr>
            ))
          ) : (
            <tr>
              <td>no student</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};