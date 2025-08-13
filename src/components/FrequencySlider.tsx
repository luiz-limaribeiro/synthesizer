const MIN_FREQ = 20
const MAX_FREQ = 8000

interface Props {
  frequency: number
  onFrequencyChange: (frequency: number) => void
}

export default function FrequencySlider({ frequency, onFrequencyChange }: Props) {

  function sliderToFrequency(value: number): number {
    return Math.floor(MIN_FREQ * Math.pow(MAX_FREQ / MIN_FREQ, value))
  }

  function frequencyToSlider(freq: number): number {
    return Math.log(freq / MIN_FREQ) / Math.log(MAX_FREQ / MIN_FREQ)
  }

  function handleFrequencyChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newFrequency = sliderToFrequency(Number(event.target.value))
    onFrequencyChange(newFrequency)
  }

  return (
      <input
        className='frequency-control'
        type='range'
        min='0'
        max='1'
        step='0.001'
        value={frequencyToSlider(frequency)}
        onChange={(e) =>
          handleFrequencyChange(e as React.ChangeEvent<HTMLInputElement>)
        }
      />
  )
}