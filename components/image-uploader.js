"use client";

import { useState } from 'react';

export default function ImageUploader() {
  const [imageSelected, setImageSelected] = useState('');
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const imageCollector = document.getElementById('img-collector');

  const handleUpload = async () => {
    if (!imageSelected) return;
    
    setLoading(true);
    
    try {
      const reader = new FileReader();
      reader.readAsDataURL(imageSelected);
      reader.onloadend = async () => {
        const base64data = reader.result;
        
        const response = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: base64data }),
        });
        
        const data = await response.json();
        setUploadedUrl(data.url);
        setLoading(false);
      };
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <input
        type="file"
        id='img-collector'
        onChange={(e) => setImageSelected(e.target.files[0])}
        accept="image/*"
        require
        className="hidden bg-blue-50 border-dashed px-3 py-1.5 border-2 border-stone-200 rounded-[8px] cursor-pointer"
      />
      <span
        onClick={ () => { imageCollector.click()}}
        className="flex items-center justify-center bg-blue-50 border-dashed px-3 py-1.5 border border-stone-200 rounded-[8px] cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-icon lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
        <h2 className="text-sm text-blue-500 font-medium ml-2">Upload Image</h2>
      </span>
    </>
  );
}