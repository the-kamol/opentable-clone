export default function Home() {
	return (
		<main className='w-screen min-h-screen bg-gray-100'>
			<main className='m-auto bg-white max-w-screen-2xl'>
				{/* NAVBAR */}
				<nav className='flex justify-between p-2 bg-white'>
					<a href='' className='text-2xl font-bold text-gray-700'>
						{" "}
						OpenTable{" "}
					</a>
					<div>
						<div className='flex'>
							<button className='p-1 px-4 mr-3 text-white bg-blue-400 border rounded'>
								Sign in
							</button>
							<button className='p-1 px-4 border rounded'>Sign up</button>
						</div>
					</div>
				</nav>
				{/* NAVBAR */}
				<main>
					{/* HEADER */}
					<div className='h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2'>
						<div className='mt-10 text-center'>
							<h1 className='mb-2 text-5xl font-bold text-white'>
								Find your table for any occasion
							</h1>
							{/* SEARCH BAR */}
							<div className='flex justify-center py-3 m-auto text-lg text-left'>
								<input
									className='rounded  mr-3 p-2 w-[450px]'
									type='text'
									placeholder='State, city or town'
								/>
								<button className='py-2 text-white bg-red-600 rounded px-9'>
									Let's go
								</button>
							</div>
							{/* SEARCH BAR */}
						</div>
					</div>
					{/* HEADER */} {/* CARDS */}
					<div className='flex flex-wrap justify-center py-3 mt-10 px-36'>
						{/* CARD */}
						<div className='w-64 m-3 overflow-hidden border rounded cursor-pointer h-72'>
							<img
								src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
								alt=''
								className='w-full h-36'
							/>
							<div className='p-1'>
								<h3 className='mb-2 text-2xl font-bold'>Milestones Grill</h3>
								<div className='flex items-start'>
									<div className='flex mb-2'>*****</div>
									<p className='ml-2'>77 reviews</p>
								</div>
								<div className='flex font-light capitalize text-reg'>
									<p className='mr-3 '>Mexican</p>
									<p className='mr-3'>$$$$</p>
									<p>Toronto</p>
								</div>
								<p className='mt-1 text-sm font-bold'>Booked 3 times today</p>
							</div>
						</div>
						{/* CARD */}
					</div>
					{/* CARDS */}
				</main>
			</main>
		</main>
	);
}
