"use client"
import { Check, ChevronsUpDown } from "lucide-react"
import {useEffect,useState} from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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
import { CarouselAction } from "./ScrollAction"

const akwaIbomLGAs = [
    {
      value: "abak",
      label: "Abak",
    },
    {
      value: "eastern_obolo",
      label: "Eastern Obolo",
    },
    {
      value: "eket",
      label: "Eket",
    },
    {
      value: "esit_eket",
      label: "Esit Eket",
    },
    {
      value: "essien_udim",
      label: "Essien Udim",
    },
    {
      value: "etim_ekpo",
      label: "Etim Ekpo",
    },
    {
      value: "etinan",
      label: "Etinan",
    },
    {
      value: "ibeno",
      label: "Ibeno",
    },
    {
      value: "ibesikpo_asutan",
      label: "Ibesikpo Asutan",
    },
    {
      value: "ibiono_ibom",
      label: "Ibiono-Ibom",
    },
    {
      value: "ika",
      label: "Ika",
    },
    {
      value: "ikono",
      label: "Ikono",
    },
    {
      value: "ikot_abasi",
      label: "Ikot Abasi",
    },
    {
      value: "ikot_ekpene",
      label: "Ikot Ekpene",
    },
    {
      value: "ini",
      label: "Ini",
    },
    {
      value: "itu",
      label: "Itu",
    },
    {
      value: "mbo",
      label: "Mbo",
    },
    {
      value: "mkpat_enin",
      label: "Mkpat-Enin",
    },
    {
      value: "nsit_atai",
      label: "Nsit-Atai",
    },
    {
      value: "nsit_ibom",
      label: "Nsit-Ibom",
    },
    {
      value: "nsit_ubium",
      label: "Nsit-Ubium",
    },
    {
      value: "obot_akara",
      label: "Obot Akara",
    },
    {
      value: "okobo",
      label: "Okobo",
    },
    {
      value: "onna",
      label: "Onna",
    },
    {
      value: "oron",
      label: "Oron",
    },
    {
      value: "oruk_anam",
      label: "Oruk Anam",
    },
    {
      value: "udung_uko",
      label: "Udung Uko",
    },
    {
      value: "ukanafun",
      label: "Ukanafun",
    },
    {
      value: "uruan",
      label: "Uruan",
    },
    {
      value: "urue_offong_oruko",
      label: "Urue-Offong/Oruko",
    },
    {
      value: "uyo",
      label: "Uyo",
    }
  ];
  
const akwaIbomLGAsWithAreas = [
    {
      value: "abak",
      areas: [
        "Abak Urban",
        "Midim",
        "Otoro",
        "Afaha Obong",
        "Ediene",
      ],
    },
    {
      value: "eastern_obolo",
      areas: [
        "Okoroete",
        "Oro",
        "Etebi",
        "Iko Town",
      ],
    },
    {
      value: "eket",
      areas: [
        "Eket Urban",
        "Idua",
        "Afaha Eket",
        "Esit Urua",
      ],
    },
    {
      value: "esit_eket",
      areas: [
        "Uquo",
        "Etebi Idung Assang",
        "Ikpa Town",
        "Awa",
      ],
    },
    {
      value: "essien_udim",
      areas: [
        "Afaha Ikot Ebak",
        "Ekpenyong Atai",
        "Adiasim",
        "Ikpe Annang",
        "Ikot Ikpe",
      ],
    },
    {
      value: "etim_ekpo",
      areas: [
        "Utu Etim Ekpo",
        "Uruk Ata Ikot",
        "Ikot Esop",
        "Uruk Ata II",
      ],
    },
    {
      value: "etinan",
      areas: [
        "Etinan Urban",
        "Northern Iman",
        "Southern Iman",
        "Eastern Iman",
      ],
    },
    {
      value: "ibeno",
      areas: [
        "Ukpenekang",
        "Iwuochang",
        "Inua Eyet Ikot",
        "Ubeno",
      ],
    },
    {
      value: "ibesikpo_asutan",
      areas: [
        "Ibesikpo I",
        "Ibesikpo II",
        "Ibesikpo III",
        "Asutan Ekpe",
      ],
    },
    {
      value: "ibiono_ibom",
      areas: [
        "Oko Ita",
        "Ididep",
        "Ibiaku",
        "Ntan Ekere",
      ],
    },
    {
      value: "ika",
      areas: [
        "Urua Inyang",
        "Ikot Obio Inyang",
        "Ikot Inyang",
        "Ikot Akan",
      ],
    },
    {
      value: "ikono",
      areas: [
        "Ibiaku Ntok Okpo",
        "Ikot Ekpene Udo",
        "Ikot Akpa Edet",
        "Itak",
      ],
    },
    {
      value: "ikot_abasi",
      areas: [
        "Ikot Abasi Urban",
        "Ikpa Ibekwe",
        "Edemaya",
        "Ukpum Ete",
      ],
    },
    {
      value: "ikot_ekpene",
      areas: [
        "Ikot Ekpene Urban",
        "Nsukara Offot",
        "Urua Akpan",
        "Ikot Inyang",
      ],
    },
    {
      value: "ini",
      areas: [
        "Urua Akpan",
        "Nkari",
        "Ikpe",
        "Urua Inyang",
      ],
    },
    {
      value: "itu",
      areas: [
        "Itu Urban",
        "Mbak Atai",
        "Mbiatok",
        "Afaha Offiong",
      ],
    },
    {
      value: "mbo",
      areas: [
        "Enwang",
        "Ebughu",
        "Effiat",
        "Ibaka",
      ],
    },
    {
      value: "mkpat_enin",
      areas: [
        "Mkpat Enin Urban",
        "Ikot Akpan",
        "Ibiaku",
        "Ikot Ubo",
      ],
    },
    {
      value: "nsit_atai",
      areas: [
        "Odot",
        "Ekit Itam",
        "Ikot Ntung",
        "Ikot Akpan Eda",
      ],
    },
    {
      value: "nsit_ibom",
      areas: [
        "Afaha Offiong",
        "Asang",
        "Ibiakpan",
        "Ikot Edibon",
      ],
    },
    {
      value: "nsit_ubium",
      areas: [
        "Ikot Eduep",
        "Ikot Edibon",
        "Ikot Akpan",
        "Ikot Obio Ekot",
      ],
    },
    {
      value: "obot_akara",
      areas: [
        "Nto Edino",
        "Ikot Inyang",
        "Ikot Otok",
        "Ikot Esien",
      ],
    },
    {
      value: "okobo",
      areas: [
        "Oduo",
        "Atabong",
        "Eta",
        "Ikot Nseyen",
      ],
    },
    {
      value: "onna",
      areas: [
        "Ndon Eyo",
        "Ikot Edor",
        "Ikot Akpan",
        "Ikot Ntuen",
      ],
    },
    {
      value: "oron",
      areas: [
        "Oro Urban",
        "Idua",
        "Udung Uko",
        "Efut",
      ],
    },
    {
      value: "oruk_anam",
      areas: [
        "Ikot Ibritam",
        "Ikot Iffiong",
        "Ikot Ntuen",
        "Nto Nsek",
      ],
    },
    {
      value: "udung_uko",
      areas: [
        "Udung Uko Urban",
        "Idua",
        "Atabong",
        "Ebughu",
      ],
    },
    {
      value: "ukanafun",
      areas: [
        "Ikot Akpan Nkuk",
        "Ikot Udo",
        "Ikot Osukpong",
        "Ikot Nya",
      ],
    },
    {
      value: "uruan",
      areas: [
        "Southern Uruan",
        "Central Uruan",
        "Northern Uruan",
        "Ikot Ekpeyak",
      ],
    },
    {
      value: "urue_offong_oruko",
      areas: [
        "Urue Offong",
        "Oruko",
        "Uya Oro",
        "Eyokponung",
      ],
    },
    {
      value: "uyo",
      areas: [
        "Uyo Urban",
        "Ewet Housing Estate",
        "Shelter Afrique",
        "Osongama",
        "Nsukara Offot",
      ],
    }
  ];

const priceRangeData =[
    {
      value: "0-300000",
      label: "0-300K",
    },
    {
      value: "300000-500000",
      label: "300k-500k",
    },
    {
      value: "500000-1000000",
      label: "500k-1m",
    },
    {
      value: "1000000-1500000",
      label: "1m-1.5m",
    },
    {
      value: "1500000-10000000",
      label: "1.5m-above",
    },
    {
      value: "000",
      label: "All Houses",
    },
]
  interface Area {
    value: string;
    label: string;
  }

export function LgaSelection() {
  const [open, setOpen] = useState(false)
  const [openArea, setOpenArea] = useState(false)
  const [openPriceRange, setOpenPriceRangle] = useState(false)
  const [value, setValue] = useState("")
  const [valueArea, setValueArea] = useState("")
  const [valueRange, setValueRange] = useState("")
  const [filteredAreas, setFilteredAreas] = useState<Area[]>([]);

 useEffect(()=>{
        const lgaData = akwaIbomLGAsWithAreas.find(lga => lga.value === value);
        const areasWithLabels = lgaData?.areas.map(area => ({
            value: area.toLowerCase().replace(/ /g, '_'),
            label: area,
          })) || [];
          setFilteredAreas(areasWithLabels);
 },[value])
    
  return (
    <section className="flex flex-col justify-center items-center gap-4">
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {value
            ? akwaIbomLGAs.find((framework) => framework.value === value)?.label
            : <p className="text-slate-800">Select LGA...</p>}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {akwaIbomLGAs.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    setOpenArea(!openArea)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    {(value && filteredAreas) &&  <Popover open={openArea} onOpenChange={setOpenArea}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={openArea}
          className="w-[300px] justify-between"
        >
          {valueArea
            ? filteredAreas.find((framework) => framework.value === valueArea)?.label
            : <p className="text-slate-800">Select Area...</p>}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search Area..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {filteredAreas.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValueArea(currentValue === value ? "" : currentValue)
                    setOpenArea(false)
                    setOpenPriceRangle(!openPriceRange)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>}
    {valueArea && <Popover open={openPriceRange} onOpenChange={setOpenPriceRangle}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {valueRange
            ? priceRangeData.find((framework) => framework.value === valueRange)?.label
            : <p className="text-slate-800">Select Price Range...</p>}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search Price Range..." /> */}
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {priceRangeData.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValueRange(currentValue === value ? "" : currentValue)
                    setOpenPriceRangle(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>}

    <div className="mt-20 w-full h-full">
        {valueRange && <CarouselAction/>}
    </div>
    </section>
  )
}
