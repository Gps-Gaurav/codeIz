import React, {useContext} from 'react'
import styled from 'styled-components'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import Modal from '../../components/Modal'
import { ModalContext } from '../../context/ModalContext'
import NavbarComponent from './NavbarComponent'

const StyledHome = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Home = () => {
  const {isOpenModal} = useContext(ModalContext);

  return (
    <StyledHome>
      <NavbarComponent/>
      <div>
        <LeftComponent />
        <RightComponent />
      </div>
      { isOpenModal.show && <Modal />}
    </StyledHome>
  )
}

export default Home