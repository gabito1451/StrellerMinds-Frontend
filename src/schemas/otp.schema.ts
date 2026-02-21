import { z } from 'zod';

export const otpSchema = z.object({
  code: z.string().min(4).max(8),
});

export type OtpSchema = z.infer<typeof otpSchema>;
