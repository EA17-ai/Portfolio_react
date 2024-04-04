

const Head = () => {
  return (
    <div className="w-full pt-20 flex-col h-screen flex justify-center items-center bg-[linear-gradient(135deg,_#f5f7fa_0%,_#c3cfe2_100%)] space-x-6 ">
    <div className="flex-1">
    <img src="../../circ.png" className="hover:scale-125 hover:animate-bounce" alt="profpic" width={200} height={200}/><br/>
    </div>
    <div className="flex-1">
    <h3 className="text-3xl text-center animate-slidein-500 text-black  font-serif  font-bold">ABHINAV ELURI</h3>
    <p className="text-sm font-serif font-semibold animate-pulse">FullStack Developer | ML Engineer | AI Enthusiast </p>
    
    </div>
    
      
       
    </div>
  )
}

export default Head
