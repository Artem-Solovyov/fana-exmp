import { SUBSCRIPTION_URL } from "@/constants"

export const subscribeToMailerLite = async (email: string) => {
  const data = {
    fields: {
      email: email
    }
  }

  const result = await fetch(
    SUBSCRIPTION_URL,
    {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    }
  )

  return await result.json();
}

