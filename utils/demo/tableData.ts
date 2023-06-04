import { PRStatus } from 'example/components/Badges/StatusBadge'

interface DashboardTable {
  issueId: number
  issueName: string
  issueURL: string
  repoUrl: string
  repoName: string
  badgeType: "primary" | "success" | "warning" | "danger" | "neutral" | undefined
  statusText: PRStatus
  date: string
}


const tableData: DashboardTable[] = [
  {
    issueId: 163,
    issueName: 'Fix the bug',
    issueURL: 'https://github.com',
    repoName: 'Chakra-ui',
    repoUrl: 'https://github.com',
    statusText: 'OPEN',
    badgeType: 'success',
    date: '06/03/23',
  },
  {
    issueId: 42,
    issueName: 'Fix the other bug',
    issueURL: 'https://github.com',
    repoName: 'web-spotify-api-node',
    repoUrl: 'https://github.com',
    statusText: 'MERGED',
    badgeType: 'success',
    date: '06/03/23',
  },
]

export default tableData
export type {
  DashboardTable
}
