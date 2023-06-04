import { Button } from '@roketid/windmill-react-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import routes, { routeIsActive } from 'routes/sidebar'

interface ISidebarContent {
	linkClicked: () => void
}

function SidebarContent({ linkClicked }: ISidebarContent) {
	const { pathname } = useRouter()
	const appName = process.env.NEXT_PUBLIC_APP_NAME

	return (
		<div className='text-gray-500 dark:text-gray-400'>
			<Link href='/#' passHref>
				<div className='ml-6 py-6'>
					<a className='text-lg font-bold text-gray-800 dark:text-gray-200'>
						{appName}
					</a>
				</div>
			</Link>
			<ul>
				{routes.map((route) =>
					route.routes ? null : (
						<li className='relative px-6 py-3' key={route.name}>
							<Link href={route.path || '#'} scroll={false}>
								<a
									className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
										routeIsActive(pathname, route)
											? 'dark:text-gray-100 text-gray-800'
											: ''
									}`}
									onClick={linkClicked}
								>
									{routeIsActive(pathname, route) && (
										<span
											className='absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg'
											aria-hidden='true'
										></span>
									)}
									{route.icon && route.icon}

									<span className='ml-4'>{route.name}</span>
								</a>
							</Link>
						</li>
					)
				)}
			</ul>
		</div>
	)
}

export default SidebarContent
