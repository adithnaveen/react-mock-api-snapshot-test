import styled from 'styled-components'

const StyledTable = styled.table`
border: 2px solid black;
`

const StyledTh = styled.th`
border-bottom: 1px solid black;
`

interface TableRow {
  name: string
  username: string
  email: string
}

const TableList: React.FC<{
  data: TableRow[]
}> = ({ data }) => {
  return (
    <StyledTable>
      <tr>
        <StyledTh>Name</StyledTh>
        <StyledTh>Username</StyledTh>
        <StyledTh>Email</StyledTh>
      </tr>
      {data.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.name}</td>
            <td>{val.username}</td>
            <td>{val.email}</td>
          </tr>
        )
      })}
    </StyledTable>
  )
}

export default TableList