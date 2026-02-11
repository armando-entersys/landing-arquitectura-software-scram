import { z } from 'zod';

export const tryBuyFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Teléfono debe tener 10 dígitos'),
  company: z.string().min(2, 'Nombre de empresa requerido'),
  employees: z.enum(['1-10', '11-50', '51-200', '200+'], {
    errorMap: () => ({ message: 'Seleccione un rango' }),
  }),
  budget: z.enum(['100k-250k', '250k-500k', '500k-1M', '1M+'], {
    errorMap: () => ({ message: 'Seleccione un rango de presupuesto' }),
  }),
  currentIssue: z.string().optional(),
});

export type TryBuyFormData = z.infer<typeof tryBuyFormSchema>;
