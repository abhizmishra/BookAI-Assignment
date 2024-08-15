import React from 'react'

const UserReview = () => {
  return (
    <div className="flex flex-col text-center text-white mx-[7%] mb-20  ">
      <h1 className="font-bold text-2xl pb-10">What Our Users Say</h1>
      <div className="flex flex-wrap gap-5 justify-center items-center ">
        <div className="bg-white/5 p-5 flex flex-col h-32  rounded-lg max-w-[400px] md:max-w-[565px]  justify-center">
          <h1>
            "BookAI revolutionized my writing process. I completed my debut
            novel in just two weeks!"
          </h1>

          <h2 className="font-semibold">- Sarah J., Author</h2>
        </div>
        <div className="bg-white/5 p-5 flex flex-col h-32 rounded-lg max-w-[400px] md:max-w-[565px] justify-center ">
          <h1>
            "The AI-generated ideas helped me overcome writer's block. It's like
            having a co-author at your fingertips."
          </h1>

          <h2 className="font-semibold">- Mark T., Aspiring Writer</h2>
        </div>
      </div>
    </div>
  );
}

export default UserReview
