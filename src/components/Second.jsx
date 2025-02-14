import React, {useState, useRef} from 'react'
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

  const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"), 

});

const Second = ({onClick, taskTwo}) => {

  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);
  
  const uploadImage = async (file) => {
    if (!file) {
      alert("No file selected!");
      return;
    }
  
    console.log("Uploading file:", file); 
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hng-stage-2");
  
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dmoacxcmk/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
  
      const data = await res.json();
      setImage(data.secure_url);
      localStorage.setItem("uploadedImage", data.secure_url);
      window.dispatchEvent(new Event("storageUpdate"));
      console.log("Upload successful:", data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const textRef = useRef(null);
  const submitButtonRef = useRef(null);

  const handleKeyDown = (e, nextRef, isTextarea = false) => {
    if (e.key === "Enter" && !isTextarea) {
      e.preventDefault();
      if (nextRef && nextRef.current) {
        nextRef.current.focus();
      }
      else if (e.key === "Enter" && isTextarea && !e.shiftKey) {

        e.preventDefault();
        nextRef?.current?.focus();
      }
    }
  };

  
  return (
    <>
      <main
    >
      <div className="lg:h-[1083px] h-fit  lg:p-12 p-6 bg-[#041E23] rounded-[24px] border border-[#0e464f] flex-col justify-center items-center gap-8 flex lg:w-[700px] mx-auto w-11/12">

        <div className="self-stretch lg:h-[907px] h-fit p-6 bg-[#08252b] rounded-[32px] border border-[#0e464e] flex-col justify-center items-start gap-8 flex lg:w-[604px] w-11/12 mx-auto">
          
          <div className='w-full'>
          <Formik
        initialValues={{
          name: "",
          email: "",
          text: "",
          image: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm, validateForm, }) => {
          validateForm().then((errors) => {
              if (!image) {
                setError(true);
                return; 
              } 

              if (Object.keys(errors).length === 0) {
              localStorage.setItem("name", values.name);
              localStorage.setItem("email", values.email);
              localStorage.setItem("text", values.text);
              localStorage.setItem("image", image)
              localStorage.setItem("formData", JSON.stringify(values));
              window.dispatchEvent(new Event("storageUpdate"));
              alert ("Ticket booked successfully");
              setSubmitting(false);
              localStorage.clear();
              resetForm();
              onClick();
              

            } else {
              console.log("Form has validation errors:", errors);
              setSubmitting(false);
            }
            
          });
        }}
      >
        {({ errors, touched, isSubmitting, setFieldValue, }) => (
          <Form>

<div className="lg:h-[328px] h-fit px-6 pt-6 pb-12 bg-[#042127] rounded-3xl border border-[#07363e] flex-col justify-start items-start gap-8 flex w-full">
            <div className="text-center text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
              Upload Profile Photo
            </div>
            <div className="h-[200px] self-stretch bg-black/20 justify-center items-center gap-2.5 inline-flex">
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  uploadImage(file, setFieldValue);
                  
                }}
                onClick={() => document.getElementById("fileInput").click()}
              className="w-60 h-60 p-2 bg-[#0E464F] rounded-[32px] flex-col justify-center items-center gap-4 inline-flex border-4 border-[#24a0b5] relative">
                
                {image?(
                  
                  <div className='rounded-xl h-full w-full'>
                    <img src={image} alt="Uploaded Preview" className="w-full h-full rounded-xl object-cover"/>
                  </div>
                ): (
                  <div className='flex flex-col justify-center items-center p-5'>
                    <div data-svg-wrapper>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.2639 14.8161C24.6812 10.2267 20.7505 6.66675 16.0052 6.66675C12.3305 6.66675 9.13854 8.81475 7.68121 12.2001C4.81721 13.0561 2.67188 15.7601 2.67188 18.6667C2.67188 22.3427 5.66254 25.3334 9.33854 25.3334H10.6719V22.6667H9.33854C7.13321 22.6667 5.33854 20.8721 5.33854 18.6667C5.33854 16.7947 6.93721 14.9907 8.90254 14.6454L9.67721 14.5094L9.93321 13.7654C10.8705 11.0307 13.1972 9.33341 16.0052 9.33341C19.6812 9.33341 22.6719 12.3241 22.6719 16.0001V17.3334H24.0052C25.4759 17.3334 26.6719 18.5294 26.6719 20.0001C26.6719 21.4707 25.4759 22.6667 24.0052 22.6667H21.3385V25.3334H24.0052C26.9465 25.3334 29.3385 22.9414 29.3385 20.0001C29.337 18.8048 28.9347 17.6445 28.196 16.7047C27.4574 15.765 26.425 15.1 25.2639 14.8161Z"
                    fill="#FAFAFA"
                  />
                  <path
                    d="M17.3385 18.6667V13.3334H14.6719V18.6667H10.6719L16.0052 25.3334L21.3385 18.6667H17.3385Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </div>
              <div className="self-stretch text-center text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
                <label htmlFor="image-upload">
                {error? <span className='text-red-700'>Image must be uploaded</span> : <span>Drag & drop or click to upload</span> }
                </label>
              </div>
                  </div>
                )}
                
                <input
                id='fileInput'
              type="file"
              accept="image/*"
              onChange={(e) => uploadImage(e.target.files[0],)}
              className="absolute h-full w-full rounded-xl cursor-pointer border hidden"
            />
              </div>
            </div>
          </div>
          <div className="w-full bg-[#0e464f] h-[3px] my-8">
            <div className="h-[3px]"></div>
          </div>
            <div className='flex flex-col justify-center items-center gap-6'>
            <div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex w-full">
            <div className="self-stretch text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
              <label htmlFor="name">Enter your name</label>
            </div>
            <div className='h-[48px] w-full border border-[#0e464f] rounded-xl'>
            <Field 
            name="name" 
            type = 'text'
            id = 'name'
            innerRef={nameRef}
            onKeyDown={(e) => handleKeyDown(e, emailRef)}
            aria-describedby={errors.name && touched.name ? "email-error" : undefined}
            className = "h-[48px] bg-transparent p-4 w-full text-neutral-50 "
            />
            
            </div>
            {errors.name && touched.name ? (
              <div className='text-red-700 -mt-2 pl-2'>{errors.name}</div>
            ) : null}
          </div>

          <div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex ">
            <div className="self-stretch text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
            <label htmlFor="email">Enter your email</label>
            </div>
              
            <div className='h-[48px] w-full border border-[#0e464f] rounded-xl'>
            <Field 
            type="email"
            id="email"
            name="email"
            innerRef={emailRef}
            aria-describedby={errors.email && touched.email ? "email-error" : undefined}
            onKeyDown={(e) => handleKeyDown(e, textRef)}
            className = "h-[48px] bg-transparent p-4 w-full text-neutral-50 "
            />
            </div>
            {errors.email && touched.email ? <div className='text-red-700 -mt-2 pl-2'>{errors.email}</div> : null}
              
            </div>
            
          <div className="self-stretch h-[159px] flex-col justify-start items-start gap-2 flex ">
            <div className="self-stretch text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
              <label htmlFor="text">About the project</label>
            </div>
            <div className="self-stretch h-[127px] p-3 rounded-xl border border-[#07363e] justify-start items-start gap-2 inline-flex">
              <Field
              as ='textarea' 
              name = 'text'
              id ='text'
              innerRef = {textRef}
              onKeyDown={(e) => handleKeyDown(e, submitButtonRef, true)}
              placeholder={'Textarea'}
              className="grow shrink basis-0 text-[#aaaaaa] text-base font-normal font-['Roboto'] leading-normal h-full bg-transparent">
              </Field>
            </div>
          </div>

          <div className="self-stretch  justify-center items-center lg:gap-8 gap-4 inline-flex lg:flex-row flex-col">
            <div className=" self-stretch grow shrink basis-0 h-12  rounded-lg border border-[#23a0b5] justify-center items-center gap-2 flex ">
              <button 
              type='button'
              onClick={taskTwo}
              className="text-[#23a0b5] text-base font-normal w-full h-12 font-['JejuMyeongjo'] leading-normal">
                Go Back
              </button>
            </div>
            <div className="self-stretch grow shrink basis-0 h-12  bg-[#23a0b5] rounded-lg justify-center items-center gap-2 flex">
            <button
              type="submit"
              disabled={isSubmitting}
              ref={submitButtonRef}
              className="text-white h-12 w-full text-base font-normal font-['JejuMyeongjo'] leading-normal"
            >
              Get My Free Ticket
            </button>
            </div>
          </div>
          </div>
          </Form>
        )}
      </Formik>
          </div>

        </div>
      </div>
  </main>

    </>

  )
}

export default Second;