import React from "react";

function Modal({ handleShowModal }) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center min-h-screen"
      onClick={handleShowModal}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Konten Modal */}
      <div
        className="relative bg-white p-4 md:p-6 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Container untuk aspect ratio (16:9) */}
        <div className="w-screen pb-[56.25%] md:w-[700px] md:pb-[56.25%] relative">
          <div className="absolute inset-0">
            <iframe
              title="Video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3h0_v1cdUIA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
