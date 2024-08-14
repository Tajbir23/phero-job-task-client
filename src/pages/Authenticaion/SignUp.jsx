import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
          <p className="text-sm dark:text-gray-600">
            Sign up to access your account
          </p>
        </div>
        <form noValidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
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
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload file
              </label>
              <input className="block w-full text-lg cursor-pointer bg-gray-50 focus:outline-none" id="large_size" type="file" />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Sign in
              </button>
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
