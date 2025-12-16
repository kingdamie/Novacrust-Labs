"use client"

import * as React from "react"
import { Check, ChevronDown, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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


const wallets = [
  { value: "metamask", name: "Metamask", icon: "/images/Metamask.svg" },
  { value: "rainbow", name: "Rainbow", icon: "/images/Rainbow.svg" },
  { value: "walletconnect", name: "WalletConnect", icon: "/images/WalletConnect.svg" },
  {
    value: "other",
    name: "Other Crypto Wallets (Binance, Coinbase, Bybit, etc)",
    icon: "/images/Other.svg",
  },
]

const tokens = [
  { value: "eth", name: "ETH", icon: "/images/ETH.svg" },
  { value: "usdt-celo", name: "USDT - CELO", icon: "/images/USDT-CELO.svg" },
  { value: "usdt-ton", name: "USDT - TON", icon: "/images/USDT-TON.svg" },
  { value: "usdt-bnb", name: "USDT - BNB", icon: "/images/USDT-BNB.svg" },
]


const WalletSelect = ({
  label,
  value,
  onChange,
}: {
  label: string
  value?: string
  onChange: (value: string) => void
}) => (
  <div className="space-y-2">
    <Label className="text-primary">{label}</Label>

    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>

      <SelectContent>
        {wallets.map((wallet) => (
          <SelectItem key={wallet.value} value={wallet.value}>
            <div className="flex items-center gap-2">
              <Image src={wallet.icon} alt={wallet.name} width={20} height={20} />
              <span>{wallet.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
)

export default function CryptoToCashForm() {
  const router = useRouter()

  const [open, setOpen] = React.useState(false)
  const [token, setToken] = React.useState<string | null>("eth")
  const [payFrom, setPayFrom] = React.useState<string | null>(null)
  const [payTo, setPayTo] = React.useState<string | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const amount = 1

  const isFormValid =
    Boolean(token) &&
    Boolean(payFrom) &&
    Boolean(payTo) &&
    amount > 0

  const selectedToken = tokens.find((t) => t.value === token)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid || isLoading) return

    setIsLoading(true)

    setTimeout(() => {
      router.push("/Recipient_details")
    }, 1500)
  }


  return (
    <div className="space-y-6">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="p-5 border border-[#E0E0E0] rounded-[30px] space-y-2">
          <h4 className="text-muted-foreground font-medium text-base">
            You pay
          </h4>

          <div className="flex items-center justify-between w-full">
            <h1 className="font-semibold text-lg">1.00</h1>

            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="h-9 bg-[#F7F7F7] gap-2 px-3 justify-between"
                >
                  {selectedToken ? (
                    <div className="flex items-center gap-2">
                      <Image
                        src={selectedToken.icon}
                        alt={selectedToken.name}
                        width={20}
                        height={20}
                      />
                      <span className="text-sm font-medium">
                        {selectedToken.name}
                      </span>
                    </div>
                  ) : (
                    "Select token"
                  )}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                <Command>
                  <CommandInput placeholder="Search" />
                  <CommandList>
                    <CommandEmpty>No token found.</CommandEmpty>

                    <CommandGroup>
                      {tokens.map((t) => (
                        <CommandItem
                          key={t.value}
                          value={t.name}
                          onSelect={() => {
                            setToken(t.value)
                            setOpen(false)
                          }}
                          className="flex items-center gap-2"
                        >
                          <Image src={t.icon} alt={t.name} width={20} height={20} />
                          <span>{t.name}</span>

                          <Check
                            className={cn(
                              "ml-auto h-4 w-4",
                              token === t.value ? "opacity-100" : "opacity-0"
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
        </div>

        {/* ----------------------------- YOU RECEIVE ---------------------------- */}
        <div className="p-5 border border-[#E0E0E0] rounded-[30px] space-y-2">
          <h4 className="text-muted-foreground font-medium text-base">
            You receive
          </h4>

          <div className="flex items-center justify-between w-full">
            <h1 className="font-semibold text-lg">1.00</h1>

            <Button
              variant="outline"
              disabled
              className="h-9 bg-[#F7F7F7] gap-2 px-3 cursor-not-allowed"
            >
              <div className="flex items-center gap-2">
                <Image src="/images/NGN.svg" alt="NGN" width={20} height={20} />
                <span className="text-sm font-medium">NGN</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </div>
            </Button>
          </div>
        </div>

        <WalletSelect label="Pay from" value={payFrom ?? undefined} onChange={setPayFrom} />
        <WalletSelect label="Pay to" value={payTo ?? undefined} onChange={setPayTo} />

        <Button
          className="w-full h-12"
          type="submit"
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Processing...</span>
            </div>
          ) : (
            "Convert Now"
          )}
        </Button>
      </form>
    </div>
  )
}
