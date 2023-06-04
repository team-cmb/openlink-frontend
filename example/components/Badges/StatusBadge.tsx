import { ReactSVGElement } from 'react'

export type PRStatus =
	| 'OPEN'
	| 'IN PROGRESS'
	| 'IN REVIEW'
	| 'CLOSED'
	| 'MERGED'
interface IStatusBadge {
	status: PRStatus
}

const statusToData = {
	OPEN: {
		color: 'bg-green-500',
		text: 'Open',
	},
	'IN PROGRESS': {
		color: 'bg-blue-500',
		text: 'In Progress',
	},
	'IN REVIEW': {
		color: 'bg-yellow-500',
		text: 'In Review',
	},
	CLOSED: {
		color: 'bg-red-500',
		text: 'Closed',
	},
	MERGED: {
		color: 'bg-purple-500',
		text: 'Merged',
	},
}

function StatusBadge({ status }: IStatusBadge) {
	return (
		<div
			className={`flex items-center w-min px-4 py-0.5 rounded-full ${statusToData[status].color} text-gray-100`}
		>
			{statusToData[status].text}
		</div>
	)
}

export default StatusBadge
