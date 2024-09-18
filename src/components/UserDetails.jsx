import React from 'react'
import Button from './Button'

function UserDetails({name, email, contact, roles, login, status, logo}) {

    const logos = [
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.2vw]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.2vw]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.2vw]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.2vw]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.2vw]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
        </svg>
    ]

  return (
    <div className='font-inter border-b-2 border-gray-300 py-[0.5vw] flex items-center'>
        {/* Email and name */}
        <div className='flex items-center gap-[4vw]'>
            <div className='flex flex-col '>
                <span className='text-black text-[1vw]'>{name}</span>
                <span className='text-gray-400 text-[0.5vw]'>{email}</span>
            </div>
            <div>
                {
                    logo && <img src={logo} alt="GT" className='w-[2vw] mix-blend-multiply' />
                }
            </div>
        </div>

        {/* contact */}
        <div className='w-[10vw] text-center'>
            <span className='text-[0.5vw]'>{contact}</span>
        </div>

        {/* roles */}
        <div className='w-[20vw] ml-[2vw]'>
            <span className='text-[0.5vw] flex flex-wrap'>
                {
                    roles.map(({name, bgc, color}) => {
                        return (
                            <div key={name} className={`w-fit mr-1 mb-1 py-[0.1vw] px-[0.6vw] rounded-full ${bgc} ${color}`}>
                                {name}
                            </div>
                        )
                    })
                }
            </span>
        </div>

        {/* login time */}

        <div className='w-[10vw] text-center'>
            <span className='text-[0.2vw] opacity-75'>{login}</span>
        </div>

        {/* status */}

        <div className='ml-[3vw] cursor-pointer'>
            <Button status={status} />
        </div>

        {/* actions */}

        <div className='flex gap-[0.5vw] pl-[2vw] text-[#5e3a7a]'>
            {
                logos.map((logo, index) => (
                    <div key={index} className='py-[0.4vw] px-[0.4vw] bg-white flex items-center justify-center rounded-full border-2 border-gray-300'>
                        {logo}
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default UserDetails