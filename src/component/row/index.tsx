import styled from "styled-components";

export const Row = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  align-items:center
`
export const RowFixed = styled(Row)`
  width:fit-content
`
export const RowCenter = styled(Row)`
  justify-content:center
`
export const RowEnd = styled(Row)`
  justify-content:flex-end
`
export const RowBetween = styled(Row)`
  justify-content:space-between
`
