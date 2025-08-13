interface Props {
  waveform: OscillatorType
  onWaveformChange: (waveform: OscillatorType) => void
}

export default function WaveformSelector({ waveform, onWaveformChange }: Props) {

  function handleWaveformChange(newWaveform: string) {
    onWaveformChange(newWaveform as OscillatorType)
  }

  return (
    <div className='waveform-selector'>
      <button
        className={`sine ${waveform === 'sine' ? 'active' : ''}`}
        onClick={() => handleWaveformChange('sine')}
      >
        Sine
      </button>
      <button
        className={`square ${waveform === 'square' ? 'active' : ''}`}
        onClick={() => handleWaveformChange('square')}
      >
        Square
      </button>
      <button
        className={`sawtooth ${waveform === 'sawtooth' ? 'active' : ''}`}
        onClick={() => handleWaveformChange('sawtooth')}
      >
        Sawtooth
      </button>
      <button
        className={`triangle ${waveform === 'triangle' ? 'active' : ''}`}
        onClick={() => handleWaveformChange('triangle')}
      >
        Triangle
      </button>
    </div>
  )
}
