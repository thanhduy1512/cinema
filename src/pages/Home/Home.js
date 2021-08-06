import React from 'react'
import AppComponent from '../../components/AppComponent/AppComponent'
import Carousel from '../../components/Carousel/Carousel'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MovieList from '../../components/MovieList/MovieList'
import MovieTable from '../../components/MovieTable/MovieTable'
import New from '../../components/News/New'
import Search from '../../components/Search/Search'

export default function Home() {
    return (
        <div>
            <Header />
            <Carousel />
            <Search />
            <MovieList />
            <MovieTable />
            <New />
            <AppComponent />
            <Footer />
        </div>
    )
}
