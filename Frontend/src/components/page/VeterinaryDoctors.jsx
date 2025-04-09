import React from "react";
import { useNavigate } from "react-router-dom";
import "./VeterinaryDoctors.css";

const VeterinaryDoctors = () => {
  const navigate = useNavigate();

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Small Animal Medicine",
      experience: "12 years",
      availability: "Mon, Wed, Fri (9 AM - 5 PM)",
      contact: "+91 98765 43210",
      email: "dr.sarah@petcare.com",
      image: "https://img.freepik.com/free-photo/young-female-vet-with-stethoscope-holding-cat_23-2148497787.jpg"
    },
    {
      id: 2,
      name: "Dr. Michael Rodriguez",
      specialty: "Surgery & Orthopedics",
      experience: "15 years",
      availability: "Tue, Thu, Sat (10 AM - 6 PM)",
      contact: "+91 87654 32109",
      email: "dr.michael@petcare.com",
      image: "https://img.freepik.com/free-photo/veterinarian-taking-care-dog_23-2149198635.jpg"
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      specialty: "Dermatology",
      experience: "8 years",
      availability: "Mon, Tue, Thu (9 AM - 4 PM)",
      contact: "+91 76543 21098",
      email: "dr.emily@petcare.com",
      image: "https://img.freepik.com/free-photo/portrait-friendly-female-doctor-with-stethoscope-white-coat-smiling-standing-with-crossed-arms_1258-88406.jpg"
    },
    {
      id: 4,
      name: "Dr. David Wilson",
      specialty: "Emergency & Critical Care",
      experience: "10 years",
      availability: "Wed, Fri, Sun (24 hours)",
      contact: "+91 65432 10987",
      email: "dr.david@petcare.com",
      image: "https://img.freepik.com/free-photo/veterinarian-checking-puppy-s-health_23-2149198590.jpg"
    },
    {
      id: 5,
      name: "Dr. Priya Sharma",
      specialty: "Exotic Pet Medicine",
      experience: "7 years",
      availability: "Mon, Wed, Sat (11 AM - 7 PM)",
      contact: "+91 54321 09876",
      email: "dr.priya@petcare.com",
      image: "https://img.freepik.com/free-photo/female-veterinarian-examining-cute-puppy_23-2148652079.jpg"
    },
    {
      id: 6,
      name: "Dr. James Brown",
      specialty: "Dentistry",
      experience: "9 years",
      availability: "Tue, Thu, Fri (10 AM - 5 PM)",
      contact: "+91 43210 98765",
      email: "dr.james@petcare.com",
      image: "https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149198585.jpg"
    }
  ];

  return (
    <div className="vet-doctors-container">
     

      <main className="vet-main-content">
        <section className="vet-intro">
          <h1>Our Veterinary Specialists</h1>
          <p>
            Connect with our experienced veterinary doctors for online consultations
            about your pet's health and wellness. Our specialists are available to
            provide expert advice, diagnose common issues, and recommend treatments.
          </p>
        </section>

        <section className="doctors-grid">
          {doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
              </div>
              <div className="doctor-info">
                <h2>{doctor.name}</h2>
                <p className="specialty">{doctor.specialty}</p>
                <p><strong>Experience:</strong> {doctor.experience}</p>
                <p><strong>Availability:</strong> {doctor.availability}</p>
                <div className="doctor-contact">
                  <a href={`tel:${doctor.contact.replace(/\s+/g, '')}`} className="contact-button">
                    Call Now
                  </a>
                  <a href={`mailto:${doctor.email}`} className="email-button">
                    Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="consultation-info">
          <div className="consultation-card">
            <h2>How Online Consultation Works</h2>
            <ol>
              <li>Call the doctor directly using the contact number provided</li>
              <li>Describe your pet's symptoms and concerns</li>
              <li>Get expert advice and recommendations</li>
              <li>If needed, schedule an in-person appointment</li>
            </ol>
          </div>
          <div className="consultation-card">
            <h2>Consultation Fees</h2>
            <p><strong>Phone Consultation:</strong> ₹500 for 15 minutes</p>
            <p><strong>Video Consultation:</strong> ₹800 for 20 minutes</p>
            <p><strong>Follow-up Consultation:</strong> ₹300 for 10 minutes</p>
            <p className="note">* Payment can be made through our secure payment gateway after the consultation</p>
          </div>
        </section>
      </main>

      <footer className="vet-footer">
        <p>&copy; 2023 Utopia Pet Shop. All rights reserved.</p>
        <p>For emergency cases, please call our 24/7 helpline: <a href="tel:+919876543210">+91 98765 43210</a></p>
      </footer>
    </div>
  );
};

export default VeterinaryDoctors; 