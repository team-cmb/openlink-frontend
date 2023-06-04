import { LuLayoutDashboard } from 'react-icons/lu'
import { FaProjectDiagram } from 'react-icons/fa'

interface IRoute {
	path?: string
	icon?: JSX.Element | null
	name: string
	routes?: IRoute[]
	checkActive?(pathname: String, route: IRoute): boolean
	exact?: boolean
}

export function routeIsActive(pathname: String, route: IRoute): boolean {
	if (route.checkActive) {
		return route.checkActive(pathname, route)
	}

	return route?.exact
		? pathname == route?.path
		: route?.path
		? pathname.indexOf(route.path) === 0
		: false
}

const routes: IRoute[] = [
	{
		path: '/',
		icon: <LuLayoutDashboard className='text-xl' />,
		name: 'Dashboard',
		exact: true,
	},
	{
		path: '/repos',
		icon: <FaProjectDiagram className='text-xl' />,
		name: 'My Repositories',
		exact: true,
	},
]

export type { IRoute }
export default routes
