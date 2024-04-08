import { z } from "zod";

export const formMusicSchema = z.object({
  customerName: z.string().min(1, { message: "This field has to be filled." }),
  address: z.string().min(1, { message: "This field has to be filled." }),
});
