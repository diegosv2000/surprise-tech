import { MongoClient } from 'mongodb'

import { log } from './logger'

const logger = log()
const client = new MongoClient(process.env.DB_URL || '')
let connected = false

const getConnection = async (): Promise<MongoClient> => {
  if (connected) return client
  try {
    // Connect the client to the server
    await client.connect()
    // Establish and verify connection
    await client.db('admin').command({ ping: 1 })
    logger.info('Connected successfully to server')
    connected = true
  } catch (e) {
    // Ensures that the client will close when you finish/error
    logger.error(e)
    await client.close()
  }

  return client
}

export { getConnection }
