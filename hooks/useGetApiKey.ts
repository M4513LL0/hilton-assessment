import { useState, useEffect } from 'react'

export default function useGetApiKey() {
  const [apiKey, setApiKey] = useState<string>('')

  useEffect(() => {
    setApiKey(process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY)
  }, [])

  if (apiKey) {
    return apiKey as string
  } else {
    return process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY as string
  }
}
