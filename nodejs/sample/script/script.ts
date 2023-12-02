function addToValueTree(
  settingsTreeRoot: any,
  key: string,
  value: any,
  conflictReporter: (message: string) => void,
): void {
  const segments = key.split('.')
  const last = segments.pop()!

  let curr = settingsTreeRoot
  for (let i = 0; i < segments.length; i++) {
    const s = segments[i]
    let obj = curr[s]
    switch (typeof obj) {
      case 'undefined':
        obj = curr[s] = Object.create(null)
        break
      case 'object':
        break
      default:
        conflictReporter(
          `Ignoring ${key} as ${segments
            .slice(0, i + 1)
            .join('.')} is ${JSON.stringify(obj)}`,
        )
        return
    }
    curr = obj
  }

  if (typeof curr === 'object' && curr !== null) {
    try {
      curr[last] = value // workaround https://github.com/microsoft/vscode/issues/13606
    } catch (e) {
      conflictReporter(
        `Ignoring ${key} as ${segments.join('.')} is ${JSON.stringify(curr)}`,
      )
    }
  } else {
    conflictReporter(
      `Ignoring ${key} as ${segments.join('.')} is ${JSON.stringify(curr)}`,
    )
  }
}




