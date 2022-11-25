import React from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { getDroppedOrSelectedFiles } from 'html5-file-selector'

const FileUpload = () => {
    const fileParams = ({ meta }) => {
        return { url: 'https://httpbin.org/post' }
    }
    const onFileChange = ({ meta, file }, status) => { 
        console.log(status, meta, file) 
    }
    const onSubmit = (files, allFiles) => {
        allFiles.forEach(f => f.remove())
    }
    const getFilesFromEvent = e => {
        return new Promise(resolve => {
            getDroppedOrSelectedFiles(e).then(chosenFiles => {
                resolve(chosenFiles.map(f => f.fileObject))
            })
        })
    }
    const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
        const textMsg = files.length > 0 ? 'Upload Again' : 'Select Files'
        return (
            <label className="btn btn-danger mt-4">
                {textMsg}
                <input
                    style={{ display: 'none' }}
                    type="file"
                    accept={accept}
                    multiple
                    onChange={e => {
                        getFilesFromEvent(e).then(chosenFiles => {
                            onFiles(chosenFiles)
                        })
                    }}
                />
            </label>
        )
    }
    return (
        <Dropzone
            onSubmit={onSubmit}
            onChangeStatus={onFileChange}
            InputComponent={selectFileInput}
            getUploadParams={fileParams}
            getFilesFromEvent={getFilesFromEvent}
            accept="image/*,audio/*,video/*"
            maxFiles={5}
            inputContent="Drop A File"
            styles={{
                dropzone: { width: 400, height: 200 },
                dropzoneActive: { borderColor: 'green' },
            }}            
        />
    );
};
export default FileUpload;

// import React from "react";
// import { FiEdit } from "react-icons/fi";
// import { BsSaveFill } from "react-icons/bs";
// import { useState } from "react";
// import axios from "axios";

// const EditProfile = () => {
//   const [image, setImage] = useState("");

//   const handleImgUpload = event => {
//     setImage(event.target.files[0]);
//   };

//   // KEY 4f9a1e842c0ad62bee31271b88c19c9f
//   // ekhan theky start
//   const submit = () => {
//     const url = "http://localhost:8000/imgupload";
//     const formData = new FormData();
//     formData.append("image", image);
//     axios.post(url, formData).then(res => {
//       console.log(res.data);
//     });
//   };

//   return (
//     <div>
//       <div className="card">
//         <h4 className="text-center profile-title">
//           {" "}
//           <FiEdit className="me-2" />
//           Edit Profile
//         </h4>
//         <h5 className="py-3 text-center"> Upload your picture</h5>
//         <div className="p-5 card-item">
//           {/* <h5 className="mb-4">Personal Information :</h5> */}
//           <div
//             className="user-image-item mb-5 d-block 
//               d-lg-flex justify-content-between "
//           >
//             <div className="user-img ">
//               <img
//                 className="shadow"
//                 src={image === "" ? "" : URL.createObjectURL(image)}
//                 alt="img"
//               />
//             </div>

//             <div className="border mt-5  mt-lg-0 p-3">
//               <input onChange={handleImgUpload} type="file" name="upload-img" id="" />
//               <button onClick={() => submit()} type="submit" className="save-btn ">
//                 <BsSaveFill /> Save
//               </button>
//             </div>
//           </div>
//           {/* form */}
//           {/*Basic Info  */}
//           <div className="edit-form">
//             <h5 className="mb-5 fw-bold">Basic Info :</h5>
//             <div className="d-flex">
//               <div className="from-one w-50">
//                 <div className="mb-4 ">
//                   <label htmlFor="exampleFormControlInput1" className="form-label">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleFormControlInput1"
//                     placeholder="First Name"
//                   />
//                 </div>
//                 <div className="mb-4 ">
//                   <label htmlFor="exampleFormControlInput2" className="form-label">
//                     Your email
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="exampleFormControlInput2"
//                     placeholder="Your Email"
//                   />
//                 </div>
//                 <div className="mb-4 ">
//                   <label htmlFor="exampleFormControlInput2" className="form-label">
//                     Phone
//                   </label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="exampleFormControlInput2"
//                     placeholder="Phone"
//                   />
//                 </div>
//               </div>
//               <div className="from-two w-50 ms-4">
//                 <div className="mb-4 ">
//                   <label htmlFor="exampleFormControlInput4" className="form-label">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleFormControlInput4"
//                     placeholder="Last Name"
//                   />
//                 </div>
//                 <div className="mb-4 ">
//                   <label htmlFor="exampleFormControlInput5" className="form-label">
//                     Address
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleFormControlInput5"
//                     placeholder="Address"
//                   />
//                 </div>
//               </div>
//             </div>
//             {/* others info */}
//             <h5 className="my-5 fw-bold">Others Info :</h5>
//             <div className="d-flex">
//               <div className="from-three w-50">
//                 <div className="mb-4 ">
//                   <label htmlFor="exampleFormControlInput2" className="form-label">
//                     National ID
//                   </label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="exampleFormControlInput2"
//                     placeholder="National ID"
//                   />
//                 </div>
//                 <div className="mb-5">
//                   <label htmlFor="exampleFormControlInput3" className="form-label">
//                     Gender
//                   </label>
//                   <select className="form-select" aria-label="Default select example">
//                     <option value>Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="from-four w-50 ms-4">
//                 <div className="mb-4 ">
//                   <label htmlFor="exampleFormControlInput4" className="form-label">
//                     Passport Number
//                   </label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="exampleFormControlInput4"
//                     placeholder=" Passport Number"
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label htmlFor="exampleFormControlInput3" className="form-label">
//                     Marital Status
//                   </label>
//                   <select className="form-select" aria-label="Default select example">
//                     <option value>Select </option>
//                     <option value="Single">Single</option>
//                     <option value="Married">Married</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <button className="save-btn mt-5">
//               <BsSaveFill /> Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditProfile;
