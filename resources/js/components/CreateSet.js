import React, { useState } from "react";
import FileUploader from './FileUploader'
import axios from 'axios';
import {useHistory} from "react-router-dom";

axios.defaults.baseURL = 'http://setshare.test'
const config = { headers: {
    'Content-Type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)
  }};

const CreateSet = () => {
  const [name, setName] = useState("");
  const [bpm, setBpm] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const history = useHistory();
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(name, bpm, selectedFile)

      const formData = new FormData();
      formData.append("name", name);
      formData.append("bpm", bpm);
      formData.append("user_id", '1');
      formData.append("file", selectedFile);

        axios.post('/api/set', formData, config).then(response => {
            console.log(response.status)
            console.log(response.status === 201)
            if (response.status === 201 || response.status === 200) {
                history.push("/sets");
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