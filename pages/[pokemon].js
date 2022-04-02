import { useState, useEffect } from "react"
import Image from 'next/image'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
// import useSWR from 'swr'

const Pokemon = (props) => {
    // const [sprite, setSprite] = useState('')
    // const userQuery = useRouter().query.pokemon

    // const fetchInfo = async () => {
    //     const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + userQuery)
    //     const data = await res.json()
    //     setSprite(data.sprites.front_default)
    // }

    // useEffect(() => {
    //    fetchInfo()
    // })

    return (
        <Layout>
            <h1>Here's your {props.userQuery}</h1>
            <img src={props.sprite}/>
        </Layout>
    ) 
}

export const getServerSideProps = async () => {
    const userQuery = useRouter().query.pokemon
    console.log(userQuery)
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await res.json()
    return {
        props: {
            sprite: data.sprites.front_default,
            // userQuerey: userQuery
        }
    }
}

export default Pokemon