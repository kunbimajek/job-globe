import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Header from '../components/Header'
import JobView from '../components/JobView'

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Header/>
        <JobView/>
      </Layout>
    </div>
  )
}

export default Home
