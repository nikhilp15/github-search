function About() {
  return (
    <div className='ml-6'>
      <h1 className='text-6xl mb-4'>Github Profile Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Made By:
        <a
          className='text-white'
          href='https://www.linkedin.com/in/nikhil-pawar-98812b192?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqSxYzFC%2FRbiz3JH8LcSIGA%3D%3D'
        >
          Nikhil Pawar
        </a>
      </p>
    </div>
  )
}

export default About
