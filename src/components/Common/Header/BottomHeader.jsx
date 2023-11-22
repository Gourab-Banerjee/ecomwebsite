import React from 'react'
import PanelHeader from './PanelHeader'
import HeaderMenu from './HeaderMenu'
import "./BottomHeader.css"
import HeaderMenuBar from './HeaderMenuBar'
import HeaderLayout from './HeaderLayout'

const BottomHeader = () => {
  return (
    <div className='bottom-header'>
        <PanelHeader />
        {/* <HeaderMenu /> */}
        <HeaderMenuBar />
        {/* <HeaderLayout /> */}
    </div>
  )
}

export default BottomHeader