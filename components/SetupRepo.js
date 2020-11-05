import React from 'react'
import { apiEndpoint } from 'prismic-configuration'

/**
 * Setup repo component
 */
const SetupRepo = () => {
  const repoUrl = `${apiEndpoint.replace('.cdn','').slice(0, -6)}documents/`

  return (
    <div>
      <div className='setup-repo'>
        <h1>Good job!</h1>
        <h5>You're halfway done with setting up your Prismic website</h5>
        <h5>Just visit your <a href={repoUrl}>Prismic dashboard</a> and add some content there</h5>
      </div>
    </div>
  )
}

export default SetupRepo