import React from "react"
import {Route, Switch} from "react-router-dom"
import {AsyncLoad, lazyLoad} from "./AsyncLoad"
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const Header = AsyncLoad(lazyLoad("./common/Header"))
const HomePage = AsyncLoad(lazyLoad("./home/HomePage"))
const CoursesPage = AsyncLoad(lazyLoad("./courses/CoursesPage"))
const ManageCoursesPage = AsyncLoad(lazyLoad("./courses/ManageCoursesPage"))
const AboutPage = AsyncLoad(lazyLoad("./about/AboutPage"))

const App = props => (
    <div className="container">
        <Header />
        <div className={'row'}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/course/:slug" component={ManageCoursesPage} />
                <Route path="/course" component={ManageCoursesPage} />
                <Route path="/about" component={AboutPage} />
            </Switch>
        </div>

        <ToastContainer autoClose={3000} hideProgressBar />
    </div>
)

export default App
