import Stream from './Stream'
import ChatNdParticipants from './ChatNdParticipants'
import Controls from './Controls'

function Room() {

  return (
    <div className='room'>
      <div className='bg-red-200 w-full mx-auto flex flex-col'>
        <Stream />
        <Controls />
        <ChatNdParticipants />
      </div>
  
    </div>
  )
}

export default Room