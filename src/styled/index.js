import styled from 'styled-components/native'


export const BaseView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`

export const HomeView = styled(BaseView)`
  background-color: papayawhip;

`

export const BrewerView = styled(BaseView)`
  background-color: goldenrod;
`

export const DrawerButton = styled.Button`
  display: flex;
`

export const DrawerView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: lightgreen;
  width: 100%;
  height: 100%;
`
