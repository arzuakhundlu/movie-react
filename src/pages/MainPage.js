import React, { Component } from 'react'
import Header from '../components/header_components/Header'
import VideoSection from '../components/VideoSection'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import { getActionMovie } from '../actions/MainAction'

export class MainPage extends Component {
  state={
    actionMovies: [],

  }
  componentDidMount(){
    getActionMovie()
    .then(action=>{
      this.setState({
        actionMovies: action
      })
      // console.log(action)
    })



  }
  render() {
    const {actionMovies} = this.state;
    console.log(actionMovies)
    return (
      <div>
        <Header />
        <main>
          <VideoSection />
          <MainSection sectionTitle="Action Movies" movies={actionMovies} />
          <MainSection sectionTitle="Hard Movies" />
          <MainSection sectionTitle="Best Movies" />
        </main>
        <Footer />
      </div>
    )
  }
}

export default MainPage