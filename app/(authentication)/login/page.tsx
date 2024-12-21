import { SignedOut, SignInButton } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Please sign in to continue.
        </p>

        <SignedOut>
          <div className="flex justify-center">
            <SignInButton>
              <button className="bg-blue-600 text-white text-lg py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
                Sign In
              </button>
            </SignInButton>
          </div>
        </SignedOut>
      </div>
    </div>
  );
}
