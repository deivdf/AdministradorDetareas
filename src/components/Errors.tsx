
export default function Errors({children} : {children: React.ReactNode}) {
  return (
    <div className="text-white text-center bg-red-500 mt-2 p-2 rounded-lg">{children}</div>
  )
}
