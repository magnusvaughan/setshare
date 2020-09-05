import React, { useState } from "react";

export function CreateSet(props) {
  const [name, setName] = useState("");
  const [bpm, setBpm] = useState("");
  const [projectFile, setProjectFile] = useState(undefined);
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(name, bpm, projectFile)
      alert(`Submitting Name ${name}`)
  }
  return (

      <div class="container mx-auto">
          <div class="flex flex-wrap justify-center">


              <div class="w-full max-w-xs">
                  <form onSubmit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-6">
                      <div class="mb-4">
                          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                              Set name
      </label>
                          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="set-name" type="text" placeholder="Set name"
                              value={name}
                              onChange={e => setName(e.target.value)}
                          />
                      </div>
                      <div class="mb-6">
                          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                              BPM
      </label>
                          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="bpm" type="text" placeholder="125"
                              value={bpm}
                              onChange={e => setBpm(e.target.value)}
                          />
                          <p class="text-red-500 text-xs italic">Enter your track BPM</p>
                      </div>
                      <div class="mb-6">
                          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                              Set file
      </label>
                          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="set-file" type="file"
                              value={projectFile}
                              onChange={e => setProjectFile(e.target.files)}
                          />
                          <p class="text-red-500 text-xs italic">Ensure your file is zipped</p>
                      </div>
                      <div class="flex items-center justify-between">
                          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Submit">
                              Create new set
      </button>
                      </div>
                  </form>
                  <p class="text-center text-gray-500 text-xs">
                      &copy;2020 Setshare. All rights reserved.
  </p>
              </div>

          </div>
      </div>
  );
}

export default CreateSet;