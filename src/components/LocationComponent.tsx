"use client";

function LocationComponent() {
  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-xl font-semibold lg:-mt-6 text-white">Find Me:</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.6031624523534!2d-6.90038732359077!3d32.88221757361995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda42752fa5a6c5d%3A0xd7241ac6b9d10449!2s1337%20School!5e0!3m2!1sen!2sma!4v1703489478692!5m2!1sen!2sma"
        allowFullScreen={false}
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[250px] rounded-md"
      ></iframe>
    </div>
  );
}

export default LocationComponent;
