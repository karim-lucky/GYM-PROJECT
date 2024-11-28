type ChangePasswordModelProps = {
    passModel: boolean;
    setPassModel: (value: boolean) => void;
  };
  
  export default function ChangePasswordModel({ passModel, setPassModel }: ChangePasswordModelProps) {
    return (
      <div>
        {passModel && (
          <div
            id="authentication-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"
          >
            <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal content */}
              <div className="relative">
                <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Change Password
                  </h3>
                  <button
                    onClick={() => setPassModel(false)}
                    className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    ×
                  </button>
                </div>
                {/* Modal body */}
                <div className="p-4">
                  <form>
                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        New Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                        placeholder="Enter new password"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="confirmPassword"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                        placeholder="Confirm new password"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setPassModel(false)}
                      className="w-full py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  