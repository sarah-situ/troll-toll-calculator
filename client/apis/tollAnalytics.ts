import request from 'superagent'
import { tollAnalytics } from '../../models/tollAnalytics.ts'

const bridgeURL = '/api/v1/bridges'

export async function sendRevenue(newRevenue: tollAnalytics) {
  await request.post(bridgeURL).send(newRevenue)
}
