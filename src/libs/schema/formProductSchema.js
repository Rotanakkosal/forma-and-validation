import { z } from "zod";
export const formProductSchema = z
  .object({
    productName: z
      .string()
      .min(1, { message: "Product Name Field is Require" }),
    price: z.string().min(1, { message: "Price Field is Require" }),
  })
  .superRefine(({price}, ctx) => {
    if (price === "0") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Price Can't Be 0`,
        path: ["price"],
      });
    }
  });
