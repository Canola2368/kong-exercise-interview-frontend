import { z } from 'zod'

export const DeveloperSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  avatar: z.string(),
})

export const ServiceVersionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  developer: DeveloperSchema.optional(),
  updated_at: z.date(),
})

export const ServiceMetricsSchema = z.object({
  latency: z.number(),
  uptime: z.number(),
  requests: z.number(),
  errors: z.number(),
})

export const ServiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  type: z.string(),
  published: z.boolean(),
  configured: z.boolean(),
  versions: z.array(ServiceVersionSchema),
  metrics: ServiceMetricsSchema.optional(),
})

export const DataResponseSchema = z.object({
  services: z.array(ServiceSchema),
})

export type Developer = z.infer<typeof DeveloperSchema>;
export type ServiceVersion = z.infer<typeof ServiceVersionSchema>;
export type ServiceMetrics = z.infer<typeof ServiceMetricsSchema>;
export type Service = z.infer<typeof ServiceSchema>;
export type DataResponse = z.infer<typeof DataResponseSchema>;
