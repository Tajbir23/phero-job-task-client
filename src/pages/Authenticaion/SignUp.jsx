import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import baseUrl from "../../hooks/useBaseUrl";
import axios from "axios";
import { useState } from "react";
const SignUp = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault();

    setLoading(true);

    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const photo = e.target.photUrl.files[0]
    
    try {
      const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`, {image: photo}, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      const url = await res.data.data.url
      
      await createUserWithEmailAndPassword(auth, email, password)
      
      await updateProfile(auth.currentUser, {displayName: name, photoURL: url})
      const {data} = await baseUrl.post('/signup', {name, email, photoUrl: url})
      
      setLoading(false)

      console.log(data)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }

  }
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
          <p className="text-sm dark:text-gray-600">
            Sign up to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Tajbir islam"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                minLength={6}
                required
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload Photo
              </label>
              <input required className="block w-full text-lg cursor-pointer bg-gray-50 focus:outline-none" id="photUrl" name="photUrl"  type="file" />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              {loading ? <div className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                <div className="w-6 h-6 m-auto border-4 border-dashed rounded-full animate-spin dark:border-white"></div>
              </div>: <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Sign Up
              </button>}
              
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Do you have an account?
              <Link
                to={"/login"}
                className="hover:underline dark:text-violet-600"
              >
                Sign in
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
