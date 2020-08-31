import React from 'react';

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
      return <h1>Loading...</h1>
    }

    return (

        < div className="max-w-6xl mx-auto" >
          <div class="flex mb-4">
          {sets.map(set => (
            <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562369083-e501b585fd2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)' }}>
                  <div className="flex justify-end">
                    <svg className="h-6 w-6 text-white fillCurrent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-3xl text-gray-900 mb-2">{set.name}</p>
                  <p className="text-gray-700">{set.bpm}bpm</p>
                </div>
                <div className="flex p-4 border-t border-gray-300 text-gray-700">
                  <div className="flex-1 inline-flex items-center">
                    <svg className="h-6 w-6 text-gray-600 fillCurrent mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                    </svg>
                    <p><span className="text-gray-900 font-bold">Techno</span></p>
                  </div>
                  <div className="flex-1 inline-flex items-center">
                    <svg className="h-6 w-6 text-gray-600 fillCurrent mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"></path>
                    </svg>
                    <p><span className="text-gray-900 font-bold">Ableton Suite</span></p>
                  </div>
                </div>
                <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                  <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">Created by</div>
                  <div className="flex items-center pt-2">
                    <div className="bg-cover bg-center w-10 h-10 rounded-full mr-3" style={{ backgroundImage: 'url(/img/mag-portrait.jpg)' }}>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Magnus Vaughan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            ))}
          </div>
        </div >



    );
  }
}

export default UserSets;