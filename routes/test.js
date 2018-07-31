const SNS_TOPIC = '...'

const createSnsTopic = () => {

}

const createSqsAndSubscribeToSns = () =>
  createSqs()
  .then(sqs => subscribeToSnsTopic(sqs))

const deleteSqs = () => {

}

const deleteSnsTopic = () => {

}