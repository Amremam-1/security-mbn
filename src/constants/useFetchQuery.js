import { useQuery } from "@tanstack/react-query"

const useFetchQuery = (key, endpoint) => {
  // const baseUrl = "https://www.mahercp.net/admin/informatinal/api"
  const baseUrl = "https://filterr.net/MBN/admin/informatinal/api"
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}${endpoint}`)

      if (!res.ok) throw new Error("Network response was not ok")
      const result = await res.json()
      return result.data
    },
  })
}

export default useFetchQuery
