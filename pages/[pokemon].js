import { useState, useEffect } from "react"
import Image from 'next/image'
import Layout from '../components/layout'
import {useRouter} from 'next/router'

const Pokemon = () => {
    const [sprite, setSprite] = useState('')
    const userQuery = useRouter().query.pokemon

    const fetchInfo = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + userQuery)
        const data = await res.json()
        setSprite(data.sprites.front_default)
    }

    useEffect(() => {
       fetchInfo()
    })

    return (
        <Layout>
            <h1>Here's your {userQuery}</h1>
            {sprite && <img src={sprite}/>}
        </Layout>
    ) 
}

export default Pokemon