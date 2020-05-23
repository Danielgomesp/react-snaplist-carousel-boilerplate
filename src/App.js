import React, { useRef } from 'react'
import { SnapList, SnapItem, useScroll, useDragToScroll, useVisibleElements } from 'react-snaplist-carousel'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`

const Card = styled.div`
  align-items: center;
  background: #6E7E85;
  color: #fff;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 20px;
  pointer-events: none;
  width: 100%;
`

const Bullets = styled.div`
  width: auto;
  display: flex;
  padding: 10px;
  justify-content: center;

  & > * {
    margin-right: 5px;
  }
`

const Bullet = styled.div`
  width: 7px;
  cursor: pointer;
  height: 7px;
  border-radius: 50px;
  background: ${({ isActive }) => (isActive ? '#1C0F13' : '#888')};
`



export default function App() {
  const snapList = useRef(null);
  const goToSnapItem = useScroll({ ref: snapList })
  useDragToScroll({ ref: snapList })
  const selectedElement = useVisibleElements(
    { ref: snapList, debounce: 10 },
    elements => elements[0],
  );

  return (
    <Container>
      <SnapList ref={snapList}>
        <SnapItem snapAlign="center" width="100%" height="100%">
          <Card>Card 1</Card>
        </SnapItem>
        <SnapItem snapAlign="center" width="100%" height="100%">
          <Card>Card 2</Card>
        </SnapItem>
        <SnapItem snapAlign="center" width="100%" height="100%">
          <Card>Card 3</Card>
        </SnapItem>
      </SnapList>
      <Bullets>
        <Bullet onClick={() => goToSnapItem(0)} isActive={selectedElement === 0} />
        <Bullet onClick={() => goToSnapItem(1)} isActive={selectedElement === 1} />
        <Bullet onClick={() => goToSnapItem(2)} isActive={selectedElement === 2} />
      </Bullets>
    </Container>
  )
}
