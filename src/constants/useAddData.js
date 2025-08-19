import { useMutation, useQueryClient } from "@tanstack/react-query"
import api from "../api/api"

export const useAddData = (endpoint) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newItem) => {
      const response = await api.post(`/${endpoint}`, newItem)
      return response.data
    },
    onSuccess: (data) => {
      // تحديث الكاش مباشرة
      queryClient.setQueryData([endpoint], (oldData) => {
        if (!oldData) return [data]
        return [...oldData, data]
      })
    },
  })
}
