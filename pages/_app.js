import React from 'react'
import '../css/styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/Layout'


const MyApp = ({Component, pagesProps}) => {
    return (
        <Layout >
            <Component {...pagesProps} />
        </Layout> 
        
    )
}
export default MyApp