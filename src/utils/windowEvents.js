import { addToArray, removeFromArray } from './array'

export const windowEventKeys = {
  resize: 'resize',
  scroll: 'scroll',
  online: 'online',
  offline: 'offline',
  message: 'message',
  hashchange: 'hashchange',
  error: 'error',
  unhandledrejection: 'unhandledrejection',
  orientationchange: 'orientationchange'
}

// Map for Window Event Notifier instances
const windowEventNotifiers = new Map()

/**
 * Window event Notification
 *
 * Enable this to listen for window event changes by event type. Subscribers can then be notified
 * of the event.
 *
 * Note: direct control over incoming events might be loosed, meaning "preventDefault" won't work anymore.
 * More likely it happens due to the long execution of the event notifier.
 */
function getOrCreateWindowEventNotifier(type) {
  if (typeof window === 'undefined') return undefined

  let windowEventNotifier = windowEventNotifiers.get(type)
  if (!windowEventNotifier) {
    windowEventNotifier = new WindowEventNotifier(type)
    windowEventNotifiers.set(type, windowEventNotifier)
  }
  return windowEventNotifier
}

/**
 * Subscribe to window event changes by providing a callback function.
 *
 * @param type Event type
 * @param callback A unique callback per component instance
 */
export function subscribeToWindowEvent(type, callback) {
  const eventNotifier = getOrCreateWindowEventNotifier(type)
  eventNotifier && eventNotifier.subscribe(callback)
}

/**
 * Unsubscribe from window event changes by removing a callback function.
 *
 * @param type Event type
 * @param callback The callback function you wish to remove
 */
export function unsubscribeFromWindowEvent(type, callback) {
  const eventNotifier = windowEventNotifiers.get(type)
  eventNotifier && eventNotifier.unsubscribe(callback)
}

/**
 * Window Event Notifier
 *
 */
class WindowEventNotifier {
  // Regular subscribers will simply respond to the event. They shouldn't alter values related to other subscribers.
  _subscribers = []
  _enabled = false
  _fired = false
  _type = undefined

  constructor(type) {
    this._type = type
  }

  subscribe(callback) {
    addToArray(this._subscribers, callback)

    if (!this._enabled && this._subscribers.length) {
      this._enabled = true
      window.addEventListener(this._type, this._onWindowEventHandler, false)
    }
  }

  unsubscribe(callback) {
    removeFromArray(this._subscribers, callback)

    if (this._enabled && !this._subscribers.length) {
      this._enabled = false
      window.removeEventListener(this._type, this._onWindowEventHandler)
    }
  }

  _onWindowEventHandler = e => {
    // Rate limit the window event
    if (!this._fired) {
      this._fired = true
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(() => this._notifySubscribers(e))
      } else {
        setTimeout(() => this._notifySubscribers(e), 1000 / 60)
      }
    }
  }

  _notifySubscribers = e => {
    this._fired = false
    for (const callback of this._subscribers) {
      callback(e)
    }
  }
}
