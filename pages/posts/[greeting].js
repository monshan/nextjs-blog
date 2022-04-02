import { useRouter } from 'next/router'
import Layout from '../../components/layout'

const Greeting = () => {
    const query = useRouter().query
    return (
        <Layout>
            <h1>{query.greeting}</h1>
        </Layout>   
    ) 
}

export default Greeting