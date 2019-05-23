const scripts = new Map()

export function loadScript(src) {
  if (!scripts.has(src)) {
    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script')

      script.onload = event => resolve(event)
      script.onerror = event => {
        scripts.delete(src)
        reject(event)
      }
      script.async = true
      script.src = src

      document.body.appendChild(script)
    })

    scripts.set(src, promise)
  }

  return scripts.get(src)
}
