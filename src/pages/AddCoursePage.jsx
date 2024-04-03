import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddCoursePage = ({ addCourseSubmit }) => {
  const [topic, setTopic] = useState('');
  const [type, setType] = useState('Full-Time');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('Under £100');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();

    const newCourse = {
      topic,
      type,
      location,
      description,
      price,
      provider: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },     
    };
    addCourseSubmit(newCourse);
    toast.success('Course added successfully');
    navigate('/courses');

    console.log(newCourse);
  }

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Course</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Course Type</label
              >
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(event) => setType(event.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Course Listing Name</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. React Developer, Data Analyst, etc"
                required
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any expectations, requirements, etc"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Salary</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              >
                <option value="Under £100">Under £100</option>
                <option value="£100 - £125">£100 - £125</option>
                <option value="£125 - £150">£125 - £150</option>
                <option value="£150 - £175">£150 - £175</option>
                <option value="£175 - £200">£175 - £200</option>
                <option value="£200 - £250">£200 - £250</option>
                <option value="£250 - £300">£250 - £300</option>
                <option value="£300 - £350">£300 - £350</option>
                <option value="£350 - £400">£350 - £400</option>
                <option value="£400 - £450">£400 - £450</option>
                <option value="£450 - £500">£450 - £500</option>
                <option value="£500 - £550">£500 - £550</option>
                <option value="£550 - £600">£550 - £600</option>
                <option value="£600 - £650">£600 - £650</option>
                <option value="£650 - £700">£650 - £700</option>
                <option value="£700 - £750">£700 - £750</option>
                <option value="£750 - £800">£750 - £800</option>
                <option value="£800 - £850">£800 - £850</option>
                <option value="£850 - £900">£850 - £900</option>
                <option value="£900 - £950">£900 - £950</option>
                <option value="£950 - £1000">£950 - £1000</option>
                <option value="Over £1000">Over £1000</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Company Location'
                required
                value={location}
                onChange={(event) => setLocation(event.target.value)}        
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                >Company Name</label
              >
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
                >Company Description</label
              >
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(event) => setCompanyDescription(event.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
                >Contact Email</label
              >
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(event) => setContactEmail(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
              >
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(event) => setContactPhone(event.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddCoursePage