import Link from "next/link"
import React from 'react'

function Sidebar() {
  return (
  
      <aside className='fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60'>
				<div className='flex flex-col justify-between h-full'>
					<div className='flex-grow px-4'>
						<div className='p-6 mx-auto text-center border-b'>
							<Link href='/' className='align-middle text-3xl leading-none font-bold text-black'>
								<span>Track</span>
								<span className='text-violet-600'>r</span>
							</Link>
						</div>
						<div className='p-4'>
							<ul className='space-y-1'>
								<li>
									<Link href='/' className='flex items-center bg-violet-200 rounded-xl font-bold text-sm text-violet-900 py-3 px-4'>
										<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='text-lg mr-4' viewBox='0 0 24 24'>
											<path fill='none' d='M0 0h24v24H0z' />
											<path d='M19 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9H0l10.327-9.388a1 1 0 0 1 1.346 0L22 11h-3v9zm-8-5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' />
										</svg>
										Home
									</Link>
								</li>
								<li>
									<Link href='/' className='flex bg-white hover:bg-violet-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4'>
										<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='text-lg mr-4' viewBox='0 0 24 24'>
											<path fill='none' d='M0 0h24v24H0z' />
											<path d='M8 5h3v9H8v3H6v-3H3V5h3V2h2v3zm10 5h3v9h-3v3h-2v-3h-3v-9h3V7h2v3z' />
										</svg>
										Market
									</Link>
								</li>
								<li>
									<Link href='/' className='flex bg-white hover:bg-violet-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4'>
										<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='text-lg mr-4' viewBox='0 0 24 24'>
											<path fill='none' d='M0 0H24V24H0z' />
											<path d='M5 3v16h16v2H3V3h2zm14.94 2.94l2.12 2.12L16 14.122l-3-3-3.94 3.94-2.12-2.122L13 6.88l3 3 3.94-3.94z' />
										</svg>
										Analysis
									</Link>
								</li>
								<li>
									<Link href='/' className='flex bg-white hover:bg-violet-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4'>
										<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='text-lg mr-4' viewBox='0 0 24 24'>
											<path d='M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
										</svg>
										Goals
									</Link>
								</li>
								<li>
									<Link href='/' className='flex bg-white hover:bg-violet-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4'>
										<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' className='text-lg mr-4' viewBox='0 0 24 24' fill='currentColor'>
											<path d='M 10.490234 2 C 10.011234 2 9.6017656 2.3385938 9.5097656 2.8085938 L 9.1757812 4.5234375 C 8.3550224 4.8338012 7.5961042 5.2674041 6.9296875 5.8144531 L 5.2851562 5.2480469 C 4.8321563 5.0920469 4.33375 5.2793594 4.09375 5.6933594 L 2.5859375 8.3066406 C 2.3469375 8.7216406 2.4339219 9.2485 2.7949219 9.5625 L 4.1132812 10.708984 C 4.0447181 11.130337 4 11.559284 4 12 C 4 12.440716 4.0447181 12.869663 4.1132812 13.291016 L 2.7949219 14.4375 C 2.4339219 14.7515 2.3469375 15.278359 2.5859375 15.693359 L 4.09375 18.306641 C 4.33275 18.721641 4.8321562 18.908906 5.2851562 18.753906 L 6.9296875 18.1875 C 7.5958842 18.734206 8.3553934 19.166339 9.1757812 19.476562 L 9.5097656 21.191406 C 9.6017656 21.661406 10.011234 22 10.490234 22 L 13.509766 22 C 13.988766 22 14.398234 21.661406 14.490234 21.191406 L 14.824219 19.476562 C 15.644978 19.166199 16.403896 18.732596 17.070312 18.185547 L 18.714844 18.751953 C 19.167844 18.907953 19.66625 18.721641 19.90625 18.306641 L 21.414062 15.691406 C 21.653063 15.276406 21.566078 14.7515 21.205078 14.4375 L 19.886719 13.291016 C 19.955282 12.869663 20 12.440716 20 12 C 20 11.559284 19.955282 11.130337 19.886719 10.708984 L 21.205078 9.5625 C 21.566078 9.2485 21.653063 8.7216406 21.414062 8.3066406 L 19.90625 5.6933594 C 19.66725 5.2783594 19.167844 5.0910937 18.714844 5.2460938 L 17.070312 5.8125 C 16.404116 5.2657937 15.644607 4.8336609 14.824219 4.5234375 L 14.490234 2.8085938 C 14.398234 2.3385937 13.988766 2 13.509766 2 L 10.490234 2 z M 12 8 C 14.209 8 16 9.791 16 12 C 16 14.209 14.209 16 12 16 C 9.791 16 8 14.209 8 12 C 8 9.791 9.791 8 12 8 z'></path>
										</svg>
										Settings
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className='mx-auto p-4'>
						<button type='button' className='inline-flex items-center justify-center h-9 px-9 rounded-xl outline-violet-600 outline-2 outline-offset-2  hover:bg-violet-600 text-black hover:text-white text-sm font-semibold transition'>
							<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='' viewBox='0 0 16 16'>
								<path d='M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
							</svg>
							Logout
						</button>
					</div>
				</div>
			</aside>
  )
}

export default Sidebar
