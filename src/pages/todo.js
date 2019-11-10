import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


class IndexPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            myTodo: {
                title: 'My todo title',
                completed: false,
            }

        }
    }


    createTodo = (data) => {
        return fetch('/.netlify/functions/todos-create', {
            body: JSON.stringify(this.state.myTodo),
            method: 'POST'
        }).then(response => console.log('here')).then(response => {
            return response.json()
        })
            .catch(console.log('error'))
            .then(response => console.log(response))

    }


    render() {
        return (
            <Layout>
                <SEO title="Home" />
                <button onClick={this.createTodo} >create</button>
                <Link to="/page-2/">Go to page 2</Link>
            </Layout>

        )

    }

}

export default IndexPage
