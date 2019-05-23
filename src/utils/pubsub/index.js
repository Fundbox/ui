export class PubSub {
  topics = new Map()

  subscribe(topic, callback) {
    if (typeof topic !== 'string') {
      throw new Error(`topic must be a string. type of ${typeof topic} given`)
    }

    if (typeof callback !== 'function') {
      throw new Error(`callback must be a function. type of ${typeof callback} given`)
    }

    const subscriber = { callback }

    if (this.topics.get(topic)) {
      this.topics.get(topic).set(subscriber, subscriber)
    } else {
      const subscribersMap = new Map()
      subscribersMap.set(subscriber, subscriber)
      this.topics.set(topic, subscribersMap)
    }

    return () => {
      if (this.topics.get(topic)) {
        this.topics.get(topic).delete(subscriber)
      }
    }
  }

  removeTopic(topic) {
    this.topics.delete(topic)
  }

  publish(topic, data) {
    if (this.topics.get(topic)) {
      this.topics.get(topic).forEach(subscriber => subscriber.callback(data))
    }
  }
}
