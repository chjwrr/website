import styled from "styled-components";

export const Column = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
`
export const ColumnFixed = styled(Column)`
  width:fit-content
`
export const ColumnRowCenter = styled(Column)`
  align-items:center
`
export const ColumnRowRight = styled(Column)`
  align-items:flex-end
`
export const ColumnEnd = styled(Column)`
  justify-content:flex-end
`
export const ColumnCenter = styled(Column)`
  justify-content:center
`