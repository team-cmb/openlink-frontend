import React, { useState, useEffect } from 'react'

import InfoCard from 'example/components/Cards/InfoCard'
import PageTitle from 'example/components/Typography/PageTitle'
import RoundIcon from 'example/components/RoundIcon'
import Layout from 'example/containers/Layout'
import response, { DashboardTable } from 'utils/demo/tableData'

import {
	TableBody,
	TableContainer,
	Table,
	TableHeader,
	TableCell,
	TableRow,
	TableFooter,
	Avatar,
	Badge,
	Pagination,
} from '@roketid/windmill-react-ui'

import {
	Chart,
	ArcElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import StatusBadge from 'example/components/Badges/StatusBadge'

function Dashboard() {
	Chart.register(
		ArcElement,
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	)

	const [page, setPage] = useState(1)
	const [data, setData] = useState<DashboardTable[]>([])

	// pagination setup
	const resultsPerPage = 10
	const totalResults = response.length

	// pagination change control
	function onPageChange(p: number) {
		setPage(p)
	}

	// on page change, load new sliced data
	// here you would make another server request for new data
	useEffect(() => {
		setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
	}, [page])

	return (
		<Layout>
			<PageTitle>Dashboard</PageTitle>
			{/* <!-- Cards --> */}
			<div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
				<InfoCard title='Open Pull Requests' value='2'>
					{/* @ts-ignore */}
					<RoundIcon
						iconColorClass='text-orange-500 dark:text-orange-100'
						bgColorClass='bg-orange-100 dark:bg-green-500'
						className='mr-4'
					/>
				</InfoCard>

				<InfoCard title='Code Review Requests' value='1'>
					{/* @ts-ignore */}
					<RoundIcon
						iconColorClass='text-green-500 dark:text-green-100'
						bgColorClass='bg-green-100 dark:bg-orange-500'
						className='mr-4'
					/>
				</InfoCard>

				<InfoCard title='New Issues' value='7'>
					{/* @ts-ignore */}
					<RoundIcon
						iconColorClass='text-blue-500 dark:text-blue-100'
						bgColorClass='bg-blue-100 dark:bg-blue-500'
						className='mr-4'
					/>
				</InfoCard>

				<InfoCard title='Merged Pull Requests' value='14'>
					{/* @ts-ignore */}
					<RoundIcon
						iconColorClass='text-teal-500 dark:text-teal-100'
						bgColorClass='bg-teal-100 dark:bg-purple-500'
						className='mr-4'
					/>
				</InfoCard>
			</div>
			<TableContainer>
				<Table>
					<TableHeader>
						<tr>
							<TableCell>Issue</TableCell>
							<TableCell>Repository</TableCell>
							<TableCell>Status</TableCell>
							<TableCell>Date Created</TableCell>
						</tr>
					</TableHeader>
					<TableBody>
						{data.map((issue, i) => (
							<TableRow key={i}>
								<TableCell>
									<div className='flex items-center text-sm gap-3'>
										<p>{i + 1}</p>
										<p className='font-bold'>{issue.issueName}</p>
										<p className='text-xs text-gray-600 dark:text-gray-400'>
											{`#${issue.issueId}`}
										</p>
									</div>
								</TableCell>
								<TableCell>
									<span className='text-sm'>{issue.repoName}</span>
								</TableCell>
								<TableCell>
									<StatusBadge status={issue.statusText} />
								</TableCell>
								<TableCell>
									<span className='text-sm'>
										{new Date(issue.date).toLocaleDateString()}
									</span>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<TableFooter>
					<Pagination
						totalResults={totalResults}
						resultsPerPage={resultsPerPage}
						label='Table navigation'
						onChange={onPageChange}
					/>
				</TableFooter>
			</TableContainer>
		</Layout>
	)
}

export default Dashboard
