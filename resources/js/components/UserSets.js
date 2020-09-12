import React from 'react';
import LoadingSpinner from './LoadingSpinner'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

class UserSets extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sets: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://setshare.test/api/set")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            sets: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    const { sets, isLoaded } = this.state;

    if (!isLoaded) {
      <LoadingSpinner />
    }

    return (
      < div className="max-w-6xl mx-auto" >
        <div className="flex flex-wrap mb-4">
          {sets.map((set, index) => (
            <div key={index} className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562369083-e501b585fd2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)' }}>
                  <div className="flex justify-end">
                    <svg className="h-6 w-6 text-white fillCurrent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-2xl text-gray-900 mb-2">{set.name}</p>
                  <p className="text-gray-700">{set.bpm}bpm</p>
                </div>
                <div className="flex p-4 border-t border-gray-300 text-gray-700">
                  <div className="flex-1 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600 fillCurrent mr-3">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <p><span className="text-gray-900 font-bold">Techno</span></p>
                  </div>
                  <div className="flex-1 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600 fillCurrent mr-3">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <p><span className="text-gray-900 font-bold">Ableton Suite</span></p>
                  </div>
                </div>
                <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                  <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">Created by</div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center">
                      <div className="bg-cover bg-center w-10 h-10 rounded-full mr-3" style={{ backgroundImage: 'url(/img/mag-portrait.jpg)' }}>
                      </div>
                      <p className="font-bold text-gray-900">Magnus Vaughan</p>
                    </div>
                    <a href={set.download_url} download={set.name}>
                      <button className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Download</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mb-4">
          <NavLink exact={true} to="/CreateSet" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload new set</NavLink>
        </div>
      </div >



    );
  }
}

export default UserSets;
