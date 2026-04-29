import { useNavigate } from 'react-router-dom'

const ComingSoon = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen items-center justify-center bg-[linear-gradient(135deg,_#F5F9FF_0%,_#fff_100%)] relative overflow-hidden">

      {/* Decorative blobs matching hero aesthetic */}
      <div className="absolute top-[-100px] right-[-80px] w-96 h-96 rounded-full bg-[#BFDBFE] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-60px] w-64 h-64 rounded-full bg-[#BFDBFE] opacity-20 pointer-events-none" />

      <div className="container mx-auto pl-[5%] pr-[5%] flex flex-col items-center justify-center text-center">

        {/* Badge */}
        <span className="inline-block text-[#4A90E2] border border-[#4A90E2] rounded-full px-4 py-1 text-xs tracking-widest uppercase mb-8">
          Coming Soon
        </span>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-[#222222] mb-6">
          Still working on <span className="text-[#4A90E2]">this one.</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-500 mb-10 max-w-md">
          This page isn't ready yet — check back soon!
        </p>

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-block bg-[#2C5282] text-white py-3 px-8 rounded-md font-semibold transition-colors duration-300 hover:bg-[#1A365D]"
        >
          ← Go back
        </button>

      </div>
    </div>
  )
}

export default ComingSoon
