"use client"
import * as React from "react"
import { ArrowLeft, Check, ChevronDown, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import banksData from "@/data/nigerian-banks.json"

type Bank = {
    name: string
    code: string
    slug: string
    logo?: string
}

export default function RecipientDetail() {
    const router = useRouter()

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const banks: Bank[] = banksData

    const [accountNumber, setAccountNumber] = React.useState("")
    const [accountName, setAccountName] = React.useState("")
    const [verifying, setVerifying] = React.useState(false)


    // Simulate account verification
    React.useEffect(() => {
        if (accountNumber.length === 10 && value) {
            setVerifying(true)
            setAccountName("")

            const timer = setTimeout(() => {
                setAccountName("OLANIYAN DAMILARE RIDWAN")
                setVerifying(false)
            }, 2000)

            return () => clearTimeout(timer)
        } else {
            setAccountName("")
            setVerifying(false)
        }
    }, [accountNumber, value])

    const selectedBank = banks.find(
        (bank) => bank.code === value || bank.slug === value
    )

    const isButtonEnabled =
        selectedBank &&
        accountNumber.length === 10 &&
        accountName &&
        !verifying

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="bg-white shadow-sm w-full max-w-lg p-6 rounded-lg space-y-6">

                {/* Header */}
                <div className="relative flex items-center justify-center">
                    <ArrowLeft
                        onClick={() => router.back()}
                        className="absolute left-0 cursor-pointer h-5 w-5 text-muted-foreground hover:text-foreground transition"
                    />
                    <h1 className="text-xl font-semibold text-primary">
                        Recipient Details
                    </h1>
                </div>

                <form className="space-y-6">

                    {/* Bank */}
                    <div className="space-y-2">
                        <Label className="text-primary">Bank</Label>

                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className="w-full h-11 justify-between"
                                >
                                    {selectedBank ? selectedBank.name : "Select an option"}
                                    <ChevronDown className="opacity-50" />
                                </Button>
                            </PopoverTrigger>

                            <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                                <Command>
                                    <CommandInput placeholder="Search bank..." />
                                    <CommandList>
                                        <CommandEmpty>No bank found.</CommandEmpty>
                                        <CommandGroup>
                                            {banks.map((bank) => (
                                                <CommandItem
                                                    key={bank.code}
                                                    value={bank.name}
                                                    onSelect={() => {
                                                        setValue(bank.code)
                                                        setOpen(false)
                                                    }}
                                                >
                                                    {bank.name}
                                                    <Check
                                                        className={cn(
                                                            "ml-auto",
                                                            value === bank.code
                                                                ? "opacity-100"
                                                                : "opacity-0"
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>

                    {/* Account Number */}
                    <div className="space-y-2">
                        <Label className="text-primary">Account Number</Label>
                        <Input
                            type="text"
                            inputMode="numeric"
                            maxLength={10}
                            placeholder="Enter your account number"
                            value={accountNumber}
                            onChange={(e) =>
                                setAccountNumber(e.target.value.replace(/\D/g, ""))
                            }
                        />
                    </div>

                    {/* Account Name */}
                    <div className="space-y-1">
                        <Label>Account Name</Label>

                        {verifying ? (
                            <div className="h-11 flex items-center gap-2 px-3 bg-gray-100 rounded-full text-primary">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Verifying account...
                            </div>
                        ) : accountName ? (
                            <p className="text-sm bg-gray-100 rounded-full font-medium text-primary h-11 flex items-center px-3">
                                {accountName}
                            </p>
                        ) : (
                            <p className="text-sm text-muted-foreground">
                                Enter valid account number
                            </p>
                        )}
                    </div>

                    {/* Next Button */}
                    <Button
                        className="w-full h-11 mt-6"
                        disabled={!isButtonEnabled}
                    >
                        Next
                    </Button>
                </form>
            </div>
        </div>
    )
}
