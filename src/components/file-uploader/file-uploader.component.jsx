import React from 'react';

import { uploadImage } from '../../firebase/firebase.utils';

import './file-uploader.styles.scss';

const updateImageDisplay = () => {
    const preview = document.querySelector('.preview');
    
    while(preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }
    
    const curFiles = document.querySelector('.file-input').files;
    if(curFiles.length === 0) {
        const para = document.createElement('p');
        para.textContent = '- No files currently selected for upload -';
        preview.appendChild(para);
    } else {
        const list = document.createElement('ol');
        preview.appendChild(list);
    
        for(const file of curFiles) {
            const listItem = document.createElement('li');
            const para = document.createElement('p');
            if(validFileType(file)) {
                para.textContent = `${file.name} (${returnFileSize(file.size)})`;
                const image = document.createElement('img');
                image.src = URL.createObjectURL(file);
                image.alt = file.name;
                uploadImage(file);
        
                listItem.appendChild(image);
                listItem.appendChild(para);
            } else {
                para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
                listItem.appendChild(para);
            }
        
            list.appendChild(listItem);
        }
    }
}

const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
  ];
  
function validFileType(file) {
    return fileTypes.includes(file.type);
}

function returnFileSize(number) {
    if(number < 1024) {
        return number + 'bytes';
    } else if(number >= 1024 && number < 1048576) {
        return (number/1024).toFixed(1) + 'KB';
    } else if(number >= 1048576) {
        return (number/1048576).toFixed(1) + 'MB';
    }
}

const FileUploader = ({ name, label, ...otherProps }) => (
    <div className='file-container'>
        <div className='file-loader'>
            {label ? (
                <label className={'file-label'} htmlFor={name}>
                    {label}
                </label>
            ) : null}
            <input className='file-input' onChange={updateImageDisplay} {...otherProps} />
        </div>
        <div className="preview">
            <p>- No files currently selected for upload -</p>
        </div>
    </div>
);

export default FileUploader;