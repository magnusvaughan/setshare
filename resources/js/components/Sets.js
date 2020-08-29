import React from 'react';

class Sets extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            sets: [],
            isLoaded: false
        };
      }

    componentDidMount(){
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

        if(!isLoaded) {
            return <h1>Loading...</h1>
        }

        return (
            <ul>
             {sets.map(item => (
                <li key={item.name}>
                {item.name} - {item.bpm}
                <a href={item.download_url}>Download Link</a>
                </li>
            ))}
            </ul>
        );
    }
  }

export default Sets;
