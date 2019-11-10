import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function createTodo(data) {
    return fetch('/.netlify/functions/todos-create', {
        body: JSON.stringify(data),
        method: 'POST'
    }).then(response => {
        return response.json()
    })
}

// Todo data
const myTodo = {
    title: 'My todo title',
    completed: false,
}

// create it!
createTodo(myTodo).then((response) => {
    console.log('API response', response)
    // set app state
}).catch((error) => {
    console.log('API error', error)
})

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <button onClick={createTodo} >create</button>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

export default IndexPage
