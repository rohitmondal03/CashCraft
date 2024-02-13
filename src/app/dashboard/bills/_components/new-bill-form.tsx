import { useRouter } from "next/navigation"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { useAuth } from "~/hooks/use-auth"
import { billSchema } from "~/lib/validators/bill-schema"
import { routes } from "~/lib/config/route-config"
import { submitNewBill } from "~/lib/functions/new-bill-submit"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { useToast } from "~/components/ui/use-toast"
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "~/components/ui/select"
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "~/components/ui/form"


export default function NewBillForm() {
  const { push } = useRouter();
  const { user } = useAuth();
  const { toast } = useToast();
  const { dashboard } = routes;
  const form = useForm<z.infer<typeof billSchema>>({
    resolver: zodResolver(billSchema),
    defaultValues: {
      title: "",
      amount: "100",
      recurrance: "MONTHLY",
    }
  })


  // Recurrance bill type list 
  const billsRecurranceTypeList = billSchema._def.shape().recurrance._def.values;


  const submitBill = () => {
    try {
      submitNewBill(form.getValues(), String(user?.$id))
      push(dashboard());
      toast({
        title: "New bill added successfully to you list !",
      })
    }
    catch (error) {
      toast({
        title: "Error occured while adding bill.",
        description: (
          <pre>{error as string}</pre>
        ),
      })
    }
  }


  return (
    <form
      className="space-y-6"
      onSubmit={form.handleSubmit(submitBill)}
    >
      <Form {...form}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Enter you bill title
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter title..."
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage className="mx-auto w-96" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Enter bill amount (in Rs.)
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter amount..."
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage className="mx-auto w-96" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="recurrance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Select recurrance frequency:
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={(val) => field.onChange(val)}
                  {...field}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select recurrance type" />
                  </SelectTrigger>
                  <SelectContent>
                    {billsRecurranceTypeList.map(item => (
                      <SelectItem
                        key={item}
                        value={item}
                      >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
          Submit
        </Button>
      </Form>
    </form>
  )
}
