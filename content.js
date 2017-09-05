import React from 'react'

import Header from './header'
import Footer from './footer'

const Content = props => (
    <div>
        <Header />
        {props.content}
        <Footer />
    </div>
)

export default Content
