import pino from 'pino'

let logger: pino.Logger

const log = (): pino.Logger => {
  if (!logger) logger = pino()

  return logger
}

export { log }
