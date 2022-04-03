import React, { useEffect, useState } from 'react';
import useUpload from '../../../hooks/useUpload';

const CreateNft = () => {
  const [formInput, updateFormInput] = useState({
    price: '',
    name: '',
    description: '',
  });

  const [fileUrl, setFileUrl] = useState<any | null>(null);
  const [upload] = useUpload(fileUrl, formInput);
  const [preview, setPreview] = useState<string>('');
  useEffect(() => {
    if (!fileUrl) {
      return;
    }
    const objectUrl = URL.createObjectURL(fileUrl);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [fileUrl]);
  return (
    <section className="relative py-24">
      <picture className="absolute inset-0 pointer-events-none -z-10 dark:hidden">
        <img
          src="img/gradient_light.jpg"
          alt="gradient"
          className="w-full h-full"
        />
      </picture>
      <div className="container">
        <h1 className="py-16 text-4xl font-medium text-center font-display text-jacarta-700 dark:text-white">
          Create
        </h1>
        <div className="mx-auto max-w-[48.125rem]">
          {preview.length > 0 ? (
            <img
              src={preview}
              alt=""
              style={{ height: '450px', width: '370px' }}
              className="p-2 mb-6 border-2 rounded-lg"
            />
          ) : (
            <div className="mb-6">
              <label className="block mb-2 font-display text-jacarta-700 dark:text-white">
                Image, Video, Audio, or 3D Model
                <span className="text-red">*</span>
              </label>
              <p className="mb-3 dark:text-jacarta-300 text-2xs">
                Drag or choose your file to upload
              </p>
              <div className="relative flex flex-col items-center justify-center max-w-md px-5 py-20 text-center bg-white border-2 border-dashed rounded-lg dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 group">
                <div className="relative z-10 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="inline-block mb-4 fill-jacarta-500 dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z" />
                  </svg>
                  <p className="max-w-xs mx-auto text-xs dark:text-jacarta-300">
                    JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB,
                    GLTF. Max size: 100 MB
                  </p>
                </div>
                <div className="absolute rounded opacity-0 cursor-pointer dark:bg-jacarta-600 bg-jacarta-50 inset-4 group-hover:opacity-100" />
                <input
                  type="file"
                  accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
                  id="file-upload"
                  className="absolute inset-0 z-20 opacity-0 cursor-pointer"
                  onChange={(e: any) => setFileUrl(e.target.files[0])}
                />
              </div>
            </div>
          )}
          <div className="mb-6">
            <label
              htmlFor="item-name"
              className="block mb-2 font-display text-jacarta-700 dark:text-white"
            >
              Asset Name<span className="text-red">*</span>
            </label>
            <input
              type="text"
              id="item-name"
              className="w-full py-3 rounded-lg dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 hover:ring-2 dark:text-white"
              placeholder="Asset Name"
              onChange={(e) =>
                updateFormInput({
                  ...formInput,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="item-name"
              className="block mb-2 font-display text-jacarta-700 dark:text-white"
            >
              Asset Description<span className="text-red">*</span>
            </label>
            <input
              type="text"
              id="item-name"
              className="w-full py-3 rounded-lg dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 hover:ring-2 dark:text-white"
              placeholder="Asset Description"
              onChange={(e) =>
                updateFormInput({
                  ...formInput,
                  description: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="item-name"
              className="block mb-2 font-display text-jacarta-700 dark:text-white"
            >
              Asset Price<span className="text-red">*</span>
            </label>
            <input
              type="text"
              id="item-name"
              className="w-full py-3 rounded-lg dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 hover:ring-2 dark:text-white"
              placeholder="Asset Price"
              onChange={(e) =>
                updateFormInput({
                  ...formInput,
                  price: e.target.value,
                })
              }
            />
          </div>
          <button
            onClick={upload}
            className="px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent-lighter"
          >
            Create
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateNft;
