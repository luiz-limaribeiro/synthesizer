import { useEffect, useRef, useState } from 'react'
import './styles/Synthesizer.css'
import WaveformSelector from './WaveformSelector'
import FrequencySlider from './FrequencySlider'

const VOLUME = 0.1

export default function Synthesizer() {
  const audioContext = useRef<AudioContext | null>(null)
  const oscillatorNode = useRef<OscillatorNode | null>(null)
  const gainNode = useRef<GainNode | null>(null)

  const [frequency, setFrequency] = useState(440)
  const [waveform, setWaveform] = useState<OscillatorType>('sine')

  useEffect(() => {
    audioContext.current = new AudioContext()
    gainNode.current = audioContext.current.createGain()

    gainNode.current.connect(audioContext.current.destination)
    gainNode.current.gain.setValueAtTime(VOLUME, audioContext.current.currentTime)
  }, [])

  function handleWaveformChange(type: OscillatorType) {
    setWaveform(type)
  }

  function handleFrequencyChange(value: number) {
    setFrequency(value)
  }

  function handlePlay() {
    if (!audioContext.current || !gainNode.current) return
    if (oscillatorNode.current) return

    const oscillator = audioContext.current.createOscillator()
    oscillatorNode.current = oscillator

    oscillator.type = waveform
    oscillator.frequency.setValueAtTime(
      frequency,
      audioContext.current.currentTime
    )

    oscillator.connect(gainNode.current)
    oscillator.start()
  }

  function handleStop() {
    if (oscillatorNode.current) {
      oscillatorNode.current.stop()
      oscillatorNode.current.disconnect()
      oscillatorNode.current = null
    }
  }

  return (
    <div className='synthesizer'>
      <WaveformSelector
        waveform={waveform}
        onWaveformChange={handleWaveformChange}
      />
      <FrequencySlider
        frequency={frequency}
        onFrequencyChange={handleFrequencyChange}
      />
      <span>{frequency}Hz</span>

      <button onMouseDown={handlePlay} onMouseUp={handleStop}>play</button>
    </div>
  )
}
