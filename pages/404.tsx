import Layout from 'example/containers/Layout'
import { RxCrossCircled } from 'react-icons/rx'
function Page404() {
	return (
		<Layout>
			<div className='flex flex-col items-center min-h-full'>
				<RxCrossCircled
					className='w-12 h-12 mt-8 text-blue-200'
					aria-hidden='true'
				/>
				<h1 className='text-6xl font-semibold text-gray-700 dark:text-gray-200'>
					404
				</h1>
				<p className='text-gray-700 dark:text-gray-300'>
					Page not found. Check the address or{' '}
					<a
						className='text-blue-600 hover:underline dark:text-blue-300'
						href='../index.html'
					>
						go back
					</a>
					.
				</p>
			</div>
		</Layout>
	)
}

export default Page404
