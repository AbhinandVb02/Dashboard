import React from 'react'
import { Menu } from 'antd'
import { BiSolidDashboard, BiSupport } from "react-icons/bi";
import { FaPowerOff } from "react-icons/fa";
import { RiPlantFill, RiQuestionAnswerFill } from "react-icons/ri";
import { FaPuzzlePiece } from "react-icons/fa";
import { AiOutlineDown } from 'react-icons/ai';

function SideBar() {
  return (
    <div>
      <div>
        <span className='dividerhead'>
          <img style={{ transform: 'translate(-20px,-45px)' }} src="https://media.licdn.com/dms/image/D560BAQFPvoYeqPTghg/company-logo_200_200/0/1683376258927?e=1702512000&v=beta&t=-iF5t1P1PJYeawUZKdzsgTRAsf_Huzbomrpf3EOpxrI" alt="" />
        </span>
        <span className='dividerhead1'>
          <img className='divideimage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5fPhctwNLodS9VmAniEw_UiLWHgKs0fs1w&usqp=CAU" alt="" />
          <p className='divideheadtext'>XYZ Enterprises Pvt.Ltd</p>
        </span>
        <span className='dividerhead2'>
          <p style={{ textAlign: 'center', transform: 'translate(0,-5px)' }}><AiOutlineDown /></p>
        </span>
        <div className='divider'></div>
      </div>
      <div>
        <Menu
          defaultOpenKeys={['1']}
          defaultSelectedKeys={['1']}
          className='sidebarmain'
        >
          <div className='sidebar_maindiv'>
            <span>
              <img className='Sidebar_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSbbmP9tB1W22jcYt114RxRmLEScOvw4gGJpinN1T&s" alt="" />
              <h4 style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>Ram Mohan &nbsp;<span style={{ color: 'blue' }}>&#10095;</span></h4>
              <p style={{ textAlign: 'center' }}>rammohan2a2gmail.com</p>
            </span>
          </div>
          <Menu.Item className='sidemenu' key="0" style={{ marginTop: '30px' }}><BiSolidDashboard className='icon' /> &nbsp;Dashboard</Menu.Item>
          <Menu.Item className='sidemenu' key="1" style={{ marginTop: '10px' }}><RiPlantFill className='icon' /> &nbsp;Perks</Menu.Item>
          <Menu.Item className='sidemenu' key="2" style={{ marginTop: '10px' }}><FaPuzzlePiece className='icon' /> &nbsp;Addons</Menu.Item>
          <Menu.Item className='sidemenu' key="3" style={{ marginTop: '10px' }}><RiQuestionAnswerFill className='icon' />  &nbsp;FAQ</Menu.Item>
          <Menu.Item className='sidemenu' key="4" style={{ marginTop: '10px' }}><BiSupport className='icon' /> &nbsp;Support</Menu.Item>
          <span>
            <Menu.Item className='sidelog' key="5">Logout &nbsp;<FaPowerOff size="12" /></Menu.Item>
          </span>
        </Menu>
      </div>
    </div>
  )
}

export default SideBar