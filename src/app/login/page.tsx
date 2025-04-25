// app/google-form/page.tsx or pages/google-form.tsx (depending on your Next.js version)
"use client";

import React from "react";

const GoogleFormPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl shadow-xl rounded-xl overflow-hidden">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeVBvXoWltwT-lCvPt6DXc1-lXN_xzrSyqS6XziH7uPN8myzw/viewform?embedded=true"
          width="100%"
          height="900"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="w-full"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default GoogleFormPage;
