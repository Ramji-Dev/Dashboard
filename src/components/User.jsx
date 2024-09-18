import React, {useContext} from 'react'
import Filters from './Filters'
import UserCategories from './UserCategories'
import UserDetails from './UserDetails'
import { NavbarContext } from "../context/NavState"

function User() {

  const filterData = [
    {
      name: "filter",
      logo: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.1vw]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
    </svg>
    },
    {
      name: "export",
      logo: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.1vw]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>    
    },
    {
      name: "add user",
      logo: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.1vw]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>    
    }
  ]

  const categories = [
    {
        name: "All",
        number: 24
    },
    {
        name: "GT Users",
        number: 10
    },
    {
        name: "Client Users",
        number: "14"
    }
  ]

  const roles = {
      admin: {
        name: "Admin",
        bgc: "bg-[#e0d3f3]",
        color: "text-[#5e3a7a]"
      },
      meetingCreator: {
        name: "Meeting Creator",
        bgc: "bg-[#cae0e7]",
        color: "text-[#46a69a]"
      },
      submitter: {
        name: "Submitter",
        bgc: "bg-[#eed0d0]",
        color: "text-[#d94343]"
      },
      approver: {
        name: "Approver 2",
        bgc: "bg-[#ffebc7]",
        color: "text-[#d9a543]"
      },
      management: {
        name: "Management",
        bgc: "bg-[#e0d3f3]",
        color: "text-[#5e3a7a]"
      },
      hod: {
        name: "HOD",
        bgc: "bg-[#ffebc7]",
        color: "text-[#d9a543]"
      },
  }

  const userDetails = [
    {
      id: 1,
      name: "Jordan Stevenson",
      email: "Layne_Kuvalis@gmail.com",
      logo: "./GT.jpg",
      contact: 5457886488,
      roles: [roles.admin, roles.meetingCreator],
      login: "12:24 PM  26-JUL-2024",
      status: true,
    },
    {
      id: 2,
      name: "Jordan Stevenson",
      email: "Layne_Kuvalis@gmail.com",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35cKPCuN973HWQOmnOrtnOAcYh5I8N2FoEA&s",
      contact: 5457886488,
      roles: [roles.admin, roles.meetingCreator, roles.submitter],
      login: "12:24 PM  26-JUL-2024",
      status: false,
    },
    {
      id: 3,
      name: "Jordan Stevenson",
      email: "Layne_Kuvalis@gmail.com",
      logo: "./GT.jpg",
      contact: 5457886488,
      roles: [roles.admin, roles.approver, roles.submitter],
      login: "12:24 PM  26-JUL-2024",
      status: true,
    },
    {
      id: 4,
      name: "Jordan Stevenson",
      email: "Layne_Kuvalis@gmail.com",
      logo: "./GT.jpg",
      contact: 5457886488,
      roles: [roles.admin, roles.meetingCreator],
      login: "12:24 PM  26-JUL-2024",
      status: false,
    },
    {
      id: 5,
      name: "Jordan Stevenson",
      email: "Layne_Kuvalis@gmail.com",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35cKPCuN973HWQOmnOrtnOAcYh5I8N2FoEA&s",
      contact: 5457886488,
      roles: [roles.admin, roles.submitter],
      login: "12:24 PM  26-JUL-2024",
      status: true,
    },
    {
      id: 6,
      name: "Jordan Stevenson",
      email: "Layne_Kuvalis@gmail.com",
      logo: "./GT.jpg",
      contact: 5457886488,
      roles: [roles.approver, roles.admin, roles.submitter, roles.management, roles.meetingCreator, roles.hod],
      login: "12:24 PM  26-JUL-2024",
      status: true,
    },
    {
      id: 7,
      name: "Jordan Stevenson",
      email: "Layne_Kuvalis@gmail.com",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35cKPCuN973HWQOmnOrtnOAcYh5I8N2FoEA&s",
      contact: 5457886488,
      roles: [roles.admin, roles.meetingCreator],
      login: "12:24 PM  26-JUL-2024",
      status: true,
    },
    {
      id: 8, 
      name: "Jordan Stevenson",
      email: "Layne_Kuvalis@gmail.com",
      logo: "./GT.jpg",
      contact: 5457886488,
      roles: [roles.admin, roles.submitter],
      login: "12:24 PM  26-JUL-2024",
      status: true,
    },
  ]

  const { showMenu } = useContext(NavbarContext)

  return (
    <div className={`h-fit text-black bg-[#ededed] w-full ${showMenu ? "pl-[20vw]" : "pl-[5vw]"} duration-300 pt-[3vw] pr-[1vw]`}>
      <div className='flex items-center justify-between pr-[4vw]'>
        <h4 className='text-[2vw] font-inter font-medium'>Users</h4>
        <div className='flex gap-[1vw]'>
          {
            filterData.map(({name, logo}) => {
              return (
                <div key={name} className=''>
                  <Filters name={name} logo={logo} />
                </div>
              )
            })
          }
        </div>
      </div>

      <div className='flex items-center justify-between gap-[2vw] mt-[3vw] border-b-2 mr-[2vw] pb-[1vw]'>
        <div className='flex gap-[2vw]'>
          {
            categories.map(({name, number}) => {
              return (
                <div key={name}>
                  <UserCategories name={name} number={number} />
                </div>
              )
            })
          }
        </div>

        <div>
          <input type='text' placeholder='Search' className='placeholder:font-inter placeholder:text-[1vw] border-2 border-gray-300 py-[0.2vw] px-[0.8vw] rounded-md bg-transparent' />
        </div>
      </div>

      <div>
        <div className='flex bg-[#e0d3f3] uppercase font-inter font-medium text-[0.6vw] text-[#5e3a7a] p-3'>
            <h6 className='pr-[15vw]'>USER</h6>
            <h6 className='pr-[4vw]'>CONTACT NO.</h6>
            <h6 className='pr-[15vw]'>ASSIGNED ROLES</h6>
            <h6 className='pr-[5vw]'>LAST LOGIN</h6>
            <h6 className='pr-[5vw]'>STATUS</h6>
            <h6 className='pr-[0vw]'>ACTIONS</h6>
          </div>

          <div>
            {
              userDetails.map(({name, email, id, status, logo, contact, roles, login}) => {
                return (
                  <div key={id}>
                    <UserDetails name={name} email={email} status={status} login={login} contact={contact} roles={roles} logo={logo} />
                  </div>
                )
              })
            }
          </div>

      </div>
    </div>
  )
}

export default User