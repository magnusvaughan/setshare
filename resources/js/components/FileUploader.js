import React, { useRef } from 'react'

const FileUploader = ({ onFileSelect }) => {
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        // handle validations
        onFileSelect(e.target.files[0])
    }

    return (
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Set file
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="set-file" type="file"
                onChange={handleFileInput}

            />
            <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"></button>
            <p className="text-red-500 text-xs italic">Ensure your file is zipped</p>
        </div>
    )
}

export default FileUploader