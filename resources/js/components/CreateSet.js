import React, { useState } from "react";
import FileUploader from './FileUploader'
import axios from 'axios';
import {
    BrowserRouter as Router,
    Redirect
} from "react-router-dom";

axios.defaults.baseURL = 'http://setshare.test'

export function CreateSet(props) {
  const [name, setName] = useState("");
  const [bpm, setBpm] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(name, bpm, selectedFile)
        axios.post('/api/set', {
            name: name,
            bpm: bpm,
            user_id: '1',
            download_url: name
        }).then(response => {
            console.log(response.status)
            console.log(response.status === 201)
            if (response.status === 201) {
                <Redirect
                to={{
                  pathname: "/sets",
                }}
              />
            }

      })
  }
  return (

      <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">


              <div className="w-full max-w-xs">
                  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-6">
                      <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                              Set name
      </label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="set-name" type="text" placeholder="Set name"
                              value={name}
                              onChange={e => setName(e.target.value)}
                          />
                      </div>
                      <div className="mb-6">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                              BPM
      </label>
                          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="bpm" type="text" placeholder="125"
                              value={bpm}
                              onChange={e => setBpm(e.target.value)}
                          />
                          <p className="text-red-500 text-xs italic">Enter your track BPM</p>
                      </div>
                      <FileUploader
                        onFileSelect={(file) => setSelectedFile(file)}
                      />
                      <div className="flex items-center justify-between">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Submit">
                              Create new set
      </button>
                      </div>
                  </form>
                  <p className="text-center text-gray-500 text-xs">
                      &copy;2020 Setshare. All rights reserved.
  </p>
              </div>

          </div>
      </div>
  );
}

export default CreateSet;