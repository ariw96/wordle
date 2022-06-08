import React from 'react'

function HowToPlay() {
  return (
      <div className='how-to-play flex  h-screen'>

    <div class="w-1/2 h-1/2 rounded mx-auto mt-10  shadow-lg">
    
    <div class="px-6 py-4">
      <div class="font-bold text-3xl mb-2">How To Play</div>
      <p class="text-gray-700 text-2xl">
      You have to guess the hidden word in 6 tries and the color of the letters changes to show how close you are.
To start the game, just enter any word, for example:      </p>
    </div>
    <div className='flex flex-row '>

    <div className="letter" id="green">
			A
		</div>
        <div className="text-4xl">
            Correct position and letter
            </div>
    </div>
    <div className='flex flex-row '>

    <div className="letter" id="yellow">
			B		</div>
        <div className="text-4xl" >
            Correct Letter wrong position
            </div>
    </div>
    <div className='flex flex-row '>

    <div className="letter " id="gray">
			B		</div>
        <div className="text-4xl" >
           Bad Guess
            </div>
    </div>
  
    
  </div>
      </div>
  )
}

export default HowToPlay