import { z } from "zod";

import { Season } from "@/helpers/options";

export const selectSingleFieldSchema = z.object({
  selectSingleField: z.nativeEnum(Season),
});

export type SelectSingleFieldSchema = z.infer<typeof selectSingleFieldSchema>;
