import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SpinnerCustom } from "@/components/ui/spinner"
import CryptoToCashForm from "@/components/CryptoToCashForm"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-2 md:px-4">
      <div className="bg-white shadow-sm w-full max-w-lg p-3 md:p-6 rounded-lg space-y-6 my-0 md:my-4">
        <Tabs defaultValue="cryptoToCash" className="w-full">
          <TabsList className="flex overflow-x-auto mx-auto h-fit gap-0 mb-4 items-center justify-center">
            <TabsTrigger value="cryptoToCash" className="text-xs sm:text-base">
              Crypto to cash
            </TabsTrigger>
            <TabsTrigger value="cashToCrypto" className="text-xs sm:text-base">
              Cash to crypto
            </TabsTrigger>
            <TabsTrigger value="cryptoToFiatLoan" className="text-xs sm:text-base">
              Crypto to fiat loan
            </TabsTrigger>
          </TabsList>

          {/* Functional tab */}
          <TabsContent value="cryptoToCash">
            <CryptoToCashForm />
          </TabsContent>

          {/* Tabs under development */}
          <TabsContent value="cashToCrypto" className="flex justify-center items-center h-40">
            <SpinnerCustom />
            <p className="ml-2">Coming Soon</p>
          </TabsContent>

          <TabsContent value="cryptoToFiatLoan" className="flex justify-center items-center h-40">
            <SpinnerCustom />
            <p className="ml-2">Coming Soon</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
