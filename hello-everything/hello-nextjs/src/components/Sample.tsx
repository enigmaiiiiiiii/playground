'use client'

import React from 'react'
import { CustomErrorBoundary } from 'src/components/CustomErrorBoundary'

export default function Sample() {
  return (
    <div>
      <CustomErrorBoundary>
        <Foo hasError />
      </CustomErrorBoundary>
    </div>
  )
}

const Foo = ({ hasError }: { hasError?: boolean }) => {
  if (hasError) {
    throw new Error('Error happened in Sample.tsx')
  } else {
    console.log('No Error Here')
  }

  return (
    <>
      <div>No Error Here</div>
    </>
  )
}
