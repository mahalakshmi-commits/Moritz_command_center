import svgPaths from "./svg-uufn7s4y71";
import imgImage3 from "./dcfb7fe03c83732d2f7c36cd579e420f3f39b051.png";
import imgImage from "./4171c04c5fc021b7eec2e6b866bf6f413db244d3.png";
import imgImage13 from "./5d3def7ca464ae5365be191398199d7010963edb.png";
import imgImage14 from "./6243d52b290541f8dd56282a2604194a65686402.png";
import imgImage15 from "./6b9c80cf170af96f4867001b5ae6fc8f63f3f25d.png";
import imgImage16 from "./773f90938c4c6cfc92be609465a02420cc7095e0.png";
import imgImage17 from "./7a6612df4bada4ac171c50b069ea1fb92309390a.png";
import imgImage18 from "./daef6b034816387b534b4c996196a845a159e45e.png";
import imgScreenshot20260903At105017Am2 from "./4d42ae6b1e1e71b7ff2e29504e2ba3e283541713.png";
import { imgImage12 } from "./svg-t7k3j";
type SeparatorProps = {
  className?: string;
  direction?: "Vertical";
  spacing?: "None";
};

function Separator({ className, direction = "Vertical", spacing = "None" }: SeparatorProps) {
  return (
    <div className={className || "h-[48px] relative w-px"}>
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[2px] relative size-full">
          <div className="-translate-x-1/2 absolute bg-[#e5e5e5] bottom-0 left-1/2 top-0 w-px" data-name="Separator / Vertical" />
        </div>
      </div>
    </div>
  );
}

function DropdownMenuItemLeftDecorationNova() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name=".Dropdown Menu Item Left Decoration - Nova">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Al2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative whitespace-nowrap" data-name="AL">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black">Moritz</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px]">Super Admin</p>
    </div>
  );
}

function Al1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px overflow-clip relative" data-name="AL">
      <DropdownMenuItemLeftDecorationNova />
      <Al2 />
    </div>
  );
}

function SelectComboboxNova() {
  return (
    <div className="flex-[1_0_0] min-h-[36px] min-w-px relative rounded-[10px]" data-name="Select & Combobox - Nova">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center min-h-[inherit] pl-[10px] pr-[8px] py-[8px] relative size-full">
          <Al1 />
        </div>
      </div>
    </div>
  );
}

function SidebarDropdownMenuTriggerNova() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".Sidebar Dropdown Menu Trigger - Nova">
      <SelectComboboxNova />
    </div>
  );
}

function Al3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px overflow-clip relative" data-name="AL">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.pda3d8b0} fill="#404040" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p356ad6c0} fill="#404040" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p216e09b1} fill="#404040" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2d1dea00} fill="#404040" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#404040] text-[14px] text-ellipsis whitespace-nowrap">Overview</p>
    </div>
  );
}

function Al4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px overflow-clip relative" data-name="AL">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[4.17%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.6667" preserveAspectRatio="none" viewBox="0 0 12 14.6667" width="12">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p2e115ac0} fill="#404040" fillRule="evenodd" />
              <path d={svgPaths.p1989100} fill="#404040" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#404040] text-[14px] text-ellipsis whitespace-nowrap">Matters</p>
    </div>
  );
}

function Al5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px overflow-clip relative" data-name="AL">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p1dd218f0} fill="#404040" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2d468b00} fill="#404040" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#404040] text-[14px] text-ellipsis whitespace-nowrap">Clients</p>
    </div>
  );
}

function Al6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px overflow-clip relative" data-name="AL">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.6667" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667" width="14.6667">
            <path clipRule="evenodd" d={svgPaths.p3b890080} fill="#404040" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#404040] text-[14px] text-ellipsis whitespace-nowrap">Workload</p>
    </div>
  );
}

function Al7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px overflow-clip relative" data-name="AL">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[4.17%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.6667" preserveAspectRatio="none" viewBox="0 0 9.33333 14.6667" width="9.33333">
            <path clipRule="evenodd" d={svgPaths.pa13db00} fill="#404040" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#404040] text-[14px] text-ellipsis whitespace-nowrap">Finance</p>
    </div>
  );
}

function Al8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px overflow-clip relative" data-name="AL">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[4.17%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.6667" preserveAspectRatio="none" viewBox="0 0 12 14.6667" width="12">
            <g id="Vector">
              <path d={svgPaths.p1d99f870} fill="#404040" />
              <path d={svgPaths.p2bad9b80} fill="#404040" />
              <path d={svgPaths.p43aac00} fill="#404040" />
              <path clipRule="evenodd" d={svgPaths.p416ac80} fill="#404040" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#404040] text-[14px] text-ellipsis whitespace-nowrap">Reports</p>
    </div>
  );
}

function Al9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px overflow-clip relative" data-name="AL">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
            <g id="Vector">
              <path d={svgPaths.pedf1f00} fill="#404040" />
              <path d={svgPaths.p3697be00} fill="#404040" />
              <path d={svgPaths.p3dcc9280} fill="#404040" />
              <path clipRule="evenodd" d={svgPaths.p1d6ceb00} fill="#404040" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#404040] text-[14px] text-ellipsis whitespace-nowrap">Activity</p>
    </div>
  );
}

function SidebarItems() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Sidebar Items">
      <div className="h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Menu item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
            <Al3 />
          </div>
        </div>
      </div>
      <div className="h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Menu item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative size-full">
            <Al4 />
            <div className="bg-[#fafafa] relative rounded-[10px] shrink-0" data-name="Sidebar Badge - Nova">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[8px] py-[3px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#404040] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">120</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[32px] relative rounded-[8px] shrink-0 w-[208px]" data-name="Sidebar Menu item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative size-full">
            <Al5 />
          </div>
        </div>
      </div>
      <div className="h-[32px] relative rounded-[8px] shrink-0 w-[208px]" data-name="Sidebar Menu item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative size-full">
            <Al6 />
            <div className="bg-[#fafafa] relative rounded-[10px] shrink-0" data-name="Sidebar Badge - Nova">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[8px] py-[3px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#404040] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">120</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[32px] relative rounded-[8px] shrink-0 w-[208px]" data-name="Sidebar Menu item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative size-full">
            <Al7 />
            <div className="bg-[#fafafa] relative rounded-[10px] shrink-0" data-name="Sidebar Badge - Nova">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[8px] py-[3px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#404040] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">120</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[32px] relative rounded-[8px] shrink-0 w-[208px]" data-name="Sidebar Menu item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
            <Al8 />
          </div>
        </div>
      </div>
      <div className="h-[32px] relative rounded-[8px] shrink-0 w-[208px]" data-name="Sidebar Menu item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
            <Al9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame181() {
  return (
    <div className="content-stretch flex flex-col h-[635px] items-start justify-between relative shrink-0 w-full">
      <SidebarItems />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Top">
      <SidebarDropdownMenuTriggerNova />
      <Frame181 />
    </div>
  );
}

function Al11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative whitespace-nowrap" data-name="AL">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black">Elsa Albertson</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px]">mortiz@superadmin</p>
    </div>
  );
}

function Al10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px overflow-clip relative" data-name="AL">
      <div className="relative shrink-0 size-[40px]" data-name=".Dropdown Menu Item Left Decoration - Nova">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-1/2" data-name="Avatar With Image">
          <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-0 left-1/2 rounded-[999px] top-0" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgImage} />
          </div>
        </div>
      </div>
      <Al11 />
    </div>
  );
}

function Al() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="AL">
      <Top />
      <div className="relative shrink-0 w-full" data-name=".Sidebar Dropdown User Example">
        <div className="content-stretch flex items-start relative size-full">
          <div className="flex-[1_0_0] min-h-[36px] min-w-px relative rounded-[10px]" data-name="Select & Combobox - Nova">
            <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[6px] items-center min-h-[inherit] pl-[10px] pr-[8px] py-[8px] relative size-full">
                <Al10 />
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name=".Select & Combobox Right Decoration - Nova">
                  <div className="absolute left-0 overflow-clip size-[16px] top-0" data-name="Lucide / chevrons-up-down">
                    <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[12.5%]" data-name="Vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="11.9997" preserveAspectRatio="none" viewBox="0 0 7.99982 11.9997" width="7.99982">
                        <g id="Vector">
                          <path d={svgPaths.pf9c3800} fill="#737373" />
                          <path d={svgPaths.p7401a00} fill="#737373" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarWithChildren() {
  return (
    <div className="absolute bg-[#fafafa] bottom-[1227px] content-stretch flex flex-col items-start left-0 p-[16px] top-0 w-[240px]" data-name="Sidebar - With Children">
      <div aria-hidden className="absolute border-[#e5e5e5] border-r border-solid inset-[0_-1px_0_0] pointer-events-none" />
      <Al />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-[207px]">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[26.4px] relative shrink-0 text-[22px] text-black tracking-[-0.5px] w-full">Good Evening, Elsa</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#a3a3a3] text-[16px] w-full">Wednesday, September 1</p>
    </div>
  );
}

function Al12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal gap-[6px] items-end leading-[20px] min-w-px overflow-clip relative text-[14px] whitespace-nowrap" data-name="AL">
      <p className="relative shrink-0 text-[#737373]">Date Range:</p>
      <p className="relative shrink-0 text-black">Last Week</p>
    </div>
  );
}

function ButtonGroupIconButtonNova() {
  return (
    <div className="bg-white content-stretch flex h-[32px] items-center justify-center min-h-[32px] min-w-[32px] p-[8px] relative rounded-[10px] shrink-0" data-name="Button Group Icon Button - Nova">
      <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`🇺🇸 `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-white min-h-[28px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Select & Combobox - Nova">
        <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center min-h-[inherit] pl-[10px] pr-[8px] py-[4px] relative size-full">
            <Al12 />
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name=".Select & Combobox Right Decoration - Nova">
              <div className="absolute left-0 overflow-clip size-[16px] top-0" data-name="Lucide / chevron-down">
                <div className="absolute inset-[33.33%_20.83%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="5.33323" preserveAspectRatio="none" viewBox="0 0 9.33323 5.33323" width="9.33323">
                    <path d={svgPaths.p3ea36700} fill="#737373" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <ButtonGroupIconButtonNova />
      <div className="bg-white min-h-[32px] min-w-[32px] relative rounded-[10px] shrink-0" data-name="Button Group Icon Button - Nova">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] p-[8px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
              <div className="absolute inset-[4.17%_8.33%_4.17%_8.34%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="14.6667" preserveAspectRatio="none" viewBox="0 0 13.3329 14.6667" width="13.3329">
                  <g id="Vector">
                    <path d={svgPaths.p3a815a80} fill="black" />
                    <path d={svgPaths.p253f23c0} fill="black" />
                    <path clipRule="evenodd" d={svgPaths.p36001700} fill="black" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#171717] relative rounded-[10px] shrink-0" data-name="Button - Nova">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
              <div className="absolute inset-[16.67%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.6667" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667" width="10.6667">
                  <path d={svgPaths.p1a739400} fill="white" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">New Matter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute border-[#f5f5f5] border-b border-solid content-stretch flex items-start justify-between left-[240px] pb-[16px] pl-[16px] pr-[8px] pt-[24px] top-0 w-[1200px]">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[654px]">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[4.16%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.6699" preserveAspectRatio="none" viewBox="0 0 14.6699 14.6699" width="14.6699">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p3e43bd80} fill="#6366F1" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p11ea7800} fill="#6366F1" fillRule="evenodd" />
              <path d={svgPaths.p2846a700} fill="#6366F1" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#a3a3a3] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ask Moritz about matters, clients, workflow
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white border border-[#e5e5e5] border-solid content-stretch flex items-center justify-between px-[20px] py-[16px] relative rounded-[16px] shrink-0 w-full">
      <Frame7 />
      <div className="bg-white min-h-[36px] min-w-[36px] relative rounded-[10px] shrink-0" data-name="Button Group Icon Button - Nova">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] p-[10px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
              <div className="absolute inset-[16.67%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.6665" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6665" width="10.6667">
                  <path d={svgPaths.p1915a780} fill="black" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <div className="bg-white max-w-[334px] relative rounded-[14px] shrink-0" data-name="Bubble interactive - Nova">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Who’s overloaded right now ?
          </p>
        </div>
      </div>
      <div className="bg-white max-w-[334px] relative rounded-[14px] shrink-0" data-name="Bubble interactive - Nova">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Draft a status update for Luma Health
          </p>
        </div>
      </div>
      <div className="bg-white max-w-[334px] relative rounded-[14px] shrink-0" data-name="Bubble interactive - Nova">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Draft a status update for Luma Health
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-white border border-[#fafafa] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[9px] items-start left-[256px] p-[12px] rounded-[16px] top-[90px] w-[1152px]">
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[26.4px] relative shrink-0 text-[14px] text-black tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Finance
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] items-start relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[101px]">
      <Frame14 />
      <div className="bg-black h-[2px] relative shrink-0 w-full" />
    </div>
  );
}

function Frame159() {
  return (
    <div className="col-1 content-stretch flex gap-[13px] items-center ml-0 mt-0 relative row-1">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#a3a3a3] text-[14px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Operations
      </p>
      <Frame15 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-0 ml-0 mt-[39.5px] relative row-1 w-[1144.5px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector 2" />
        </svg>
      </div>
      <Frame159 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[26.4px] relative shrink-0 text-[26px] text-black tracking-[-0.5px] whitespace-nowrap">{`120 `}</p>
      <div className="relative rounded-[999px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(134, 239, 172) 0%, rgb(134, 239, 172) 100%)" }} data-name="Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
              <div className="absolute bottom-1/4 left-[4.17%] right-[4.17%] top-1/4" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="5.99995" preserveAspectRatio="none" viewBox="0 0 11 5.99995" width="11">
                  <path d={svgPaths.pfbdd540} fill="#15803D" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[16px]">10% than last week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white border border-[#f5f5f5] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[14px] h-[108px] items-start min-w-px p-[16px] relative rounded-[10px]">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Total Matters closed
      </p>
      <Frame19 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[26.4px] relative shrink-0 text-[26px] text-black tracking-[-0.5px] whitespace-nowrap">$200k</p>
      <div className="relative rounded-[999px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(134, 239, 172) 0%, rgb(134, 239, 172) 100%)" }} data-name="Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
              <div className="absolute bottom-1/4 left-[4.17%] right-[4.17%] top-1/4" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="5.99995" preserveAspectRatio="none" viewBox="0 0 11 5.99995" width="11">
                  <path d={svgPaths.pfbdd540} fill="#15803D" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[16px]">10% than last week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white border border-[#f5f5f5] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[14px] h-[108px] items-start min-w-px p-[16px] relative rounded-[10px]">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Revenue Generated
      </p>
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[26.4px] relative shrink-0 text-[26px] text-black tracking-[-0.5px] whitespace-nowrap">2 Days</p>
      <div className="relative rounded-[999px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(134, 239, 172) 0%, rgb(134, 239, 172) 100%)" }} data-name="Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
              <div className="absolute bottom-1/4 left-[4.17%] right-[4.17%] top-1/4" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="5.99995" preserveAspectRatio="none" viewBox="0 0 11 5.99995" width="11">
                  <path d={svgPaths.pfbdd540} fill="#15803D" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[16px]">10% than last week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white border border-[#f5f5f5] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[14px] h-[108px] items-start min-w-px p-[16px] relative rounded-[10px]">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Avg cycle Time
      </p>
      <Frame23 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[26.4px] relative shrink-0 text-[26px] text-black tracking-[-0.5px] whitespace-nowrap">20</p>
      <div className="relative rounded-[999px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(134, 239, 172) 0%, rgb(134, 239, 172) 100%)" }} data-name="Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
              <div className="absolute bottom-1/4 left-[4.17%] right-[4.17%] top-1/4" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="5.99995" preserveAspectRatio="none" viewBox="0 0 11 5.99995" width="11">
                  <path d={svgPaths.pfbdd540} fill="#15803D" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[16px]">10% than last week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white border border-[#f5f5f5] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[14px] h-[108px] items-start min-w-px p-[16px] relative rounded-[10px]">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        New Matters
      </p>
      <Frame25 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame13 />
      <Frame20 />
      <Frame22 />
      <Frame24 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-full">
      <Group />
      <Frame17 />
    </div>
  );
}

function Slot() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Slot">
      <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] min-h-[29px] min-w-[29px] relative rounded-[10px] shrink-0" data-name="Tab (segmented) - Nova">
        <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap">
              <p className="leading-[20px]">All</p>
            </div>
            <div className="h-[16px] min-w-[16px] relative rounded-[10px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%)" }} data-name=".Tabs Counter - Nova">
              <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[29px] min-w-[29px] relative rounded-[10px] shrink-0" data-name="Tab (segmented) - Nova">
        <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Over Due</p>
            </div>
            <div className="h-[16px] min-w-[16px] relative rounded-[10px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%)" }} data-name=".Tabs Counter - Nova">
              <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[29px] min-w-[29px] relative rounded-[10px] shrink-0" data-name="Tab (segmented) - Nova">
        <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">At Risk</p>
            </div>
            <div className="h-[16px] min-w-[16px] relative rounded-[10px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%)" }} data-name=".Tabs Counter - Nova">
              <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[29px] min-w-[29px] relative rounded-[10px] shrink-0" data-name="Tab (segmented) - Nova">
        <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Unassigned</p>
            </div>
            <div className="h-[16px] min-w-[16px] relative rounded-[10px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%)" }} data-name=".Tabs Counter - Nova">
              <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[29px] min-w-[29px] relative rounded-[10px] shrink-0" data-name="Tab (segmented) - Nova">
        <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Pending Info</p>
            </div>
            <div className="h-[16px] min-w-[16px] relative rounded-[10px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%)" }} data-name=".Tabs Counter - Nova">
              <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="bg-[#f5f5f5] relative rounded-[10px] shrink-0" data-name="Tabs (segmented) - Nova">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[3px] relative size-full">
            <Slot />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0" data-name="Button - Nova">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">View All</p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
              <div className="absolute inset-1/4" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
                  <path d={svgPaths.p2e6315f0} fill="black" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.4] relative shrink-0 text-[#717680] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Matter
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#fafafa] h-[40px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <Frame45 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center leading-[1.4] p-[16px] relative size-full text-[14px] whitespace-nowrap">
          <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[#181d27]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Employee IP dispute — pre-litigation
          </p>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#737373]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Response deadline passed
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center leading-[1.4] p-[16px] relative size-full text-[14px] whitespace-nowrap">
          <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[#181d27]" style={{ fontVariationSettings: '"wdth" 100' }}>
            NDA
          </p>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#737373]" style={{ fontVariationSettings: '"wdth" 100' }}>
            3 clauses deviate from standard terms
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center leading-[1.4] p-[16px] relative size-full text-[14px] whitespace-nowrap">
          <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[#181d27]" style={{ fontVariationSettings: '"wdth" 100' }}>
            NDA
          </p>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#737373]" style={{ fontVariationSettings: '"wdth" 100' }}>
            3 clauses deviate from standard terms
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center leading-[1.4] p-[16px] relative size-full text-[14px] whitespace-nowrap">
          <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[#181d27]" style={{ fontVariationSettings: '"wdth" 100' }}>
            NDA
          </p>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#737373]" style={{ fontVariationSettings: '"wdth" 100' }}>
            3 clauses deviate from standard terms
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center leading-[1.4] p-[16px] relative size-full text-[14px] whitespace-nowrap">
          <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[#181d27]" style={{ fontVariationSettings: '"wdth" 100' }}>
            NDA
          </p>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#737373]" style={{ fontVariationSettings: '"wdth" 100' }}>
            3 clauses deviate from standard terms
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center leading-[1.4] p-[16px] relative size-full text-[14px] whitespace-nowrap">
          <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[#181d27]" style={{ fontVariationSettings: '"wdth" 100' }}>
            NDA
          </p>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#737373]" style={{ fontVariationSettings: '"wdth" 100' }}>
            3 clauses deviate from standard terms
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center leading-[1.4] p-[16px] relative size-full text-[14px] whitespace-nowrap">
          <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[#181d27]" style={{ fontVariationSettings: '"wdth" 100' }}>
            NDA
          </p>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#737373]" style={{ fontVariationSettings: '"wdth" 100' }}>
            3 clauses deviate from standard terms
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center leading-[1.4] p-[16px] relative size-full text-[14px] whitespace-nowrap">
          <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[#181d27]" style={{ fontVariationSettings: '"wdth" 100' }}>
            NDA
          </p>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#737373]" style={{ fontVariationSettings: '"wdth" 100' }}>
            3 clauses deviate from standard terms
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[321px]">
      <Frame34 />
      <Frame35 />
      <Frame53 />
      <Frame61 />
      <Frame60 />
      <Frame58 />
      <Frame59 />
      <Frame57 />
      <Frame62 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#717680] text-[12px] whitespace-nowrap">Status</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#fafafa] h-[40px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function Frame132() {
  return (
    <div className="bg-[#fffaeb] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[20px] shrink-0">
      <div aria-hidden className="absolute border border-[#fedf89] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.4] relative shrink-0 text-[#b54708] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Over Due
      </p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Frame132 />
        </div>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[20px] shrink-0">
      <div aria-hidden className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.4] relative shrink-0 text-[#181d27] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Unassigned
      </p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Frame133 />
        </div>
      </div>
    </div>
  );
}

function Frame134() {
  return (
    <div className="bg-[#fef3f2] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[20px] shrink-0">
      <div aria-hidden className="absolute border border-[#ffcdca] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.4] relative shrink-0 text-[#b42318] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        At Risk
      </p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[16px] relative size-full">
          <Frame134 />
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[20px] shrink-0">
      <div aria-hidden className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.4] relative shrink-0 text-[#181d27] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Needs Review
      </p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Frame50 />
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[20px] shrink-0">
      <div aria-hidden className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.4] relative shrink-0 text-[#181d27] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Needs Review
      </p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Frame55 />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[#fffaeb] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[20px] shrink-0">
      <div aria-hidden className="absolute border border-[#fedf89] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.4] relative shrink-0 text-[#b54708] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Waiting on Family
      </p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Frame56 />
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[20px] shrink-0">
      <div aria-hidden className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#181d27] text-[12px] whitespace-nowrap">Ready for Review</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Frame66 />
        </div>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[20px] shrink-0">
      <div aria-hidden className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#181d27] text-[12px] whitespace-nowrap">Ready for Review</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Frame68 />
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[184px]">
      <Frame36 />
      <Frame37 />
      <Frame51 />
      <Frame52 />
      <Frame54 />
      <Frame63 />
      <Frame64 />
      <Frame65 />
      <Frame67 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#717680] text-[12px] whitespace-nowrap">Value</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#fafafa] h-[40px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <Frame47 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            $2.3K
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            $40K
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            $10.3K
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            $4.9K
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            $40K
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            $40K
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap">3 hours ago</p>
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap">8 hours ago</p>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[141px]">
      <Frame38 />
      <Frame39 />
      <Frame43 />
      <Frame69 />
      <Frame70 />
      <Frame71 />
      <Frame72 />
      <Frame73 />
      <Frame74 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#717680] text-[12px] whitespace-nowrap">Due On</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#fafafa] h-[40px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <Frame76 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Sept 1
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            $40K
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            $10.3K
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            $4.9K
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            $40K
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            $40K
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap">3 hours ago</p>
        </div>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap">8 hours ago</p>
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[148px]">
      <Frame40 />
      <Frame41 />
      <Frame77 />
      <Frame78 />
      <Frame79 />
      <Frame80 />
      <Frame81 />
      <Frame82 />
      <Frame83 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#717680] text-[12px] whitespace-nowrap">Assigned to</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-[#fafafa] h-[40px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <Frame85 />
        </div>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.8px_0px] mask-size-[28px_28px] ml-[-2.8px] mt-0 relative row-1 size-[32.9px]" style={{ maskImage: `url("${imgImage12}")` }} data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[133.71%] left-[7.87%] max-w-none top-[0.65%] w-[89.14%]" src={imgImage13} />
        </div>
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap">Daniel Mitchell</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center p-[16px] relative size-full">
          <MaskGroup />
          <Frame112 />
        </div>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <div className="bg-[#f5f5f5] relative rounded-[10px] shrink-0" data-name="Button - Nova">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%_4.17%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 14.6667 13.3333" width="14.6667">
                      <g id="Vector">
                        <path d={svgPaths.p10ff0280} fill="black" />
                        <path d={svgPaths.p21853000} fill="black" />
                        <path clipRule="evenodd" d={svgPaths.p22b05b00} fill="black" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[20px]">Assign Lawyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.8px_0px] mask-size-[28px_28px] ml-[-2.8px] mt-0 relative row-1 size-[32.9px]" style={{ maskImage: `url("${imgImage12}")` }} data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap">Sophia Carter</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center p-[16px] relative size-full">
          <MaskGroup1 />
          <Frame113 />
        </div>
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.8px_0px] mask-size-[28px_28px] ml-[-2.8px] mt-0 relative row-1 size-[32.9px]" style={{ maskImage: `url("${imgImage12}")` }} data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[274.29%] left-[-32.23%] max-w-none top-[-17.16%] w-[183.24%]" src={imgImage15} />
        </div>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap">Liam Johnson</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center p-[16px] relative size-full">
          <MaskGroup2 />
          <Frame114 />
        </div>
      </div>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.8px_0px] mask-size-[28px_28px] ml-[-2.8px] mt-0 relative row-1 size-[32.9px]" style={{ maskImage: `url("${imgImage12}")` }} data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[249.39%] left-[-40.99%] max-w-none top-[-29.97%] w-[166.61%]" src={imgImage16} />
        </div>
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap">Emma Williams</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center p-[16px] relative size-full">
          <MaskGroup3 />
          <Frame115 />
        </div>
      </div>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.8px_0px] mask-size-[28px_28px] ml-[-2.8px] mt-0 relative row-1 size-[32.9px]" style={{ maskImage: `url("${imgImage12}")` }} data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[227.67%] left-[-39.99%] max-w-none top-[-32.48%] w-[162.56%]" src={imgImage17} />
        </div>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap">Elena Martinez</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center p-[16px] relative size-full">
          <MaskGroup4 />
          <Frame116 />
        </div>
      </div>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.8px_0px] mask-size-[28px_28px] ml-[-2.8px] mt-0 relative row-1 size-[32.9px]" style={{ maskImage: `url("${imgImage12}")` }} data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[243.7%] left-[-30.4%] max-w-none top-[-47.26%] w-[162.47%]" src={imgImage18} />
        </div>
      </div>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap">Mia Johnson</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center p-[16px] relative size-full">
          <MaskGroup5 />
          <Frame117 />
        </div>
      </div>
    </div>
  );
}

function MaskGroup6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.8px_0px] mask-size-[28px_28px] ml-[-2.8px] mt-0 relative row-1 size-[32.9px]" style={{ maskImage: `url("${imgImage12}")` }} data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[133.71%] left-[7.87%] max-w-none top-[0.65%] w-[89.14%]" src={imgImage13} />
        </div>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap">Daniel Mitchell</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center p-[16px] relative size-full">
          <MaskGroup6 />
          <Frame118 />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[230px]">
      <Frame84 />
      <Frame86 />
      <Frame87 />
      <Frame88 />
      <Frame89 />
      <Frame90 />
      <Frame91 />
      <Frame92 />
      <Frame93 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#717680] text-[12px] whitespace-nowrap">Actions</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-[#fafafa] h-[40px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <Frame96 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Frame">
          <path d={svgPaths.p3eb47f00} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center p-[6px] relative rounded-[8px] shrink-0">
      <Frame />
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[16px] relative size-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[16px] relative size-full" />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Frame">
          <path d={svgPaths.p3eb47f00} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center p-[6px] relative rounded-[8px] shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[16px] relative size-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Frame">
          <path d={svgPaths.p3eb47f00} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center p-[6px] relative rounded-[8px] shrink-0">
      <Frame12 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[16px] relative size-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Frame">
          <path d={svgPaths.p3eb47f00} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center p-[6px] relative rounded-[8px] shrink-0">
      <Frame27 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[16px] relative size-full">
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Frame">
          <path d={svgPaths.p3eb47f00} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center p-[6px] relative rounded-[8px] shrink-0">
      <Frame29 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[16px] relative size-full">
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Frame">
          <path d={svgPaths.p3eb47f00} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center p-[6px] relative rounded-[8px] shrink-0">
      <Frame31 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[16px] relative size-full">
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Frame">
          <path d={svgPaths.p3eb47f00} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center p-[6px] relative rounded-[8px] shrink-0">
      <Frame33 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[16px] relative size-full">
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[104px]">
      <Frame95 />
      <Frame97 />
      <Frame98 />
      <Frame99 />
      <Frame100 />
      <Frame101 />
      <Frame102 />
      <Frame103 />
      <Frame104 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="h-[448px] relative rounded-[10px] shrink-0 w-full">
      <div className="content-stretch flex items-start overflow-x-clip overflow-y-auto relative rounded-[inherit] size-full">
        <Frame49 />
        <Frame44 />
        <Frame48 />
        <Frame75 />
        <Frame42 />
        <Frame94 />
      </div>
      <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame137() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start py-[12px] relative rounded-[8px] shrink-0 w-full">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[26.4px] relative shrink-0 text-[16px] text-black tracking-[-0.5px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Needs attention
      </p>
      <Frame136 />
      <Frame135 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] items-start left-[256px] px-[12px] py-[8px] rounded-[9px] top-[251px] w-[1152px]">
      <Frame16 />
      <Frame137 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[26.4px] relative shrink-0 text-[16px] text-black tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Lawyer Workload `}</p>
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0" data-name="Button - Nova">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">View All</p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
              <div className="absolute inset-1/4" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
                  <path d={svgPaths.p2e6315f0} fill="black" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] min-w-full relative shrink-0 text-[#525252] text-[12px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Sarah Chen is at 128% capacity and holds all 4 overdue deadlines. Tom Ruiz is at 43% with matching experience, moving 6 matters clears the backlog by Friday.
      </p>
      <div className="bg-[#171717] relative rounded-[8px] shrink-0" data-name="Button - Nova">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
              <p className="leading-[16px]">View Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[13px]" data-name="Icon">
        <div className="absolute inset-[4.16%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.9193" preserveAspectRatio="none" viewBox="0 0 11.9193 11.9193" width="11.9193">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.pc99f80} fill="#1E40AF" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1eb81400} fill="#1E40AF" fillRule="evenodd" />
              <path d={svgPaths.p5a48c00} fill="#1E40AF" />
            </g>
          </svg>
        </div>
      </div>
      <Frame154 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="bg-[#f5f5f5] border border-[#e5e5e5] border-solid content-stretch flex flex-col items-start p-[8px] relative rounded-[7px] shrink-0 w-full">
      <Frame141 />
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-black relative rounded-[2px] size-[8px]" />
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        On track
      </p>
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#fb923c] relative rounded-[2px] size-[8px]" />
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        At Risk
      </p>
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#f87171] relative rounded-[2px] size-[8px]" />
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Over Due
      </p>
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#d4d4d4] relative rounded-[2px] size-[8px]" />
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Free
      </p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame155 />
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <Frame156 />
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <Frame157 />
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <Frame158 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[3px] relative shrink-0 w-full">
      <Frame143 />
    </div>
  );
}

function MaskGroup7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.8px_0px] mask-size-[28px_28px] ml-[-2.8px] mt-0 relative row-1 size-[32.9px]" style={{ maskImage: `url("${imgImage12}")` }} data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[133.71%] left-[7.87%] max-w-none top-[0.65%] w-[89.14%]" src={imgImage13} />
        </div>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Daniel Mitchell
      </p>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame120 />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#f87171] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Full
      </p>
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
      <Frame150 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full">
      <MaskGroup7 />
      <Frame145 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="bg-black col-1 h-[6px] ml-0 mt-0 relative rounded-[8px] row-1 w-[94.18%]" />
      <div className="bg-[#fdba74] col-1 h-[6px] ml-[73.98%] mt-0 relative row-1 w-[20.28%]" />
      <div className="bg-[#f87171] col-1 h-[6px] ml-[94.18%] mt-0 relative rounded-br-[5px] rounded-tr-[5px] row-1 w-[5.82%]" />
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        31 Assigned
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        21 On track
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        6 At Risk
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        3 Over Due
      </p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame147 />
      <Separator className="h-[13px] relative shrink-0 w-px" />
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center relative shrink-0 w-full">
      <Group1 />
      <Frame121 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative size-full">
          <Frame144 />
          <Frame146 />
        </div>
      </div>
    </div>
  );
}

function MaskGroup8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.8px_0px] mask-size-[28px_28px] ml-[-2.8px] mt-0 relative row-1 size-[32.9px]" style={{ maskImage: `url("${imgImage12}")` }} data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Sarah Chen
      </p>
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame122 />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#f87171] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Full
      </p>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[477px]">
      <Frame151 />
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <MaskGroup8 />
      <Frame149 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="bg-black col-1 h-[6px] ml-0 mt-0 relative rounded-[8px] row-1 w-[94.18%]" />
      <div className="bg-[#fdba74] col-1 h-[6px] ml-[73.98%] mt-0 relative row-1 w-[20.28%]" />
      <div className="bg-[#f87171] col-1 h-[6px] ml-[94.18%] mt-0 relative rounded-br-[5px] rounded-tr-[5px] row-1 w-[5.82%]" />
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        31 Assigned
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        21 On track
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        6 At Risk
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        3 Over Due
      </p>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame153 />
      <Separator className="h-[13px] relative shrink-0 w-px" />
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center relative shrink-0 w-full">
      <Group2 />
      <Frame123 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative size-full">
          <Frame148 />
          <Frame152 />
        </div>
      </div>
    </div>
  );
}

function MaskGroup9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.8px_0px] mask-size-[28px_28px] ml-[-2.8px] mt-0 relative row-1 size-[32.9px]" style={{ maskImage: `url("${imgImage12}")` }} data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[249.39%] left-[-40.99%] max-w-none top-[-29.97%] w-[166.61%]" src={imgImage16} />
        </div>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Liam Johnson
      </p>
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame124 />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        5 Free
      </p>
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
      <Frame163 />
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <MaskGroup9 />
      <Frame162 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="bg-[#d4d4d4] col-1 h-[6px] ml-0 mt-0 relative rounded-[8px] row-1 w-full" />
      <div className="bg-black col-1 h-[6px] ml-0 mt-0 relative rounded-[8px] row-1 w-[87.6%]" />
      <div className="bg-[#fdba74] col-1 h-[6px] ml-[68.81%] mt-0 relative row-1 w-[18.87%]" />
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        31 Assigned
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        21 On track
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        6 At Risk
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        0 Over Due
      </p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame165 />
      <Separator className="h-[13px] relative shrink-0 w-px" />
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center relative shrink-0 w-full">
      <Group3 />
      <Frame125 />
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame161 />
      <Frame164 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Frame160 />
        </div>
      </div>
    </div>
  );
}

function MaskGroup10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.8px_0px] mask-size-[28px_28px] ml-[-2.8px] mt-0 relative row-1 size-[32.9px]" style={{ maskImage: `url("${imgImage12}")` }} data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[274.29%] left-[-32.23%] max-w-none top-[-17.16%] w-[183.24%]" src={imgImage15} />
        </div>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tom Ruiz
      </p>
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame126 />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        10 Free
      </p>
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
      <Frame168 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <MaskGroup10 />
      <Frame167 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="bg-[#d4d4d4] col-1 h-[6px] ml-0 mt-0 relative rounded-[8px] row-1 w-full" />
      <div className="bg-black col-1 h-[6px] ml-0 mt-0 relative rounded-[8px] row-1 w-[46.68%]" />
    </div>
  );
}

function Frame170() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        20 Assigned
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        21 On track
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        0 At Risk
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        20 Free
      </p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame170 />
      <Separator className="h-[13px] relative shrink-0 w-px" />
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center relative shrink-0 w-full">
      <Group4 />
      <Frame127 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative size-full">
          <Frame166 />
          <Frame169 />
        </div>
      </div>
    </div>
  );
}

function MaskGroup11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.8px_0px] mask-size-[28px_28px] ml-[-2.8px] mt-0 relative row-1 size-[32.9px]" style={{ maskImage: `url("${imgImage12}")` }} data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[227.67%] left-[-39.99%] max-w-none top-[-32.48%] w-[162.56%]" src={imgImage17} />
        </div>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap">Mia Johnson</p>
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame128 />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        8 Free
      </p>
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
      <Frame173 />
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full">
      <MaskGroup11 />
      <Frame172 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="bg-[#d4d4d4] col-1 h-[6px] ml-0 mt-0 relative rounded-[8px] row-1 w-full" />
      <div className="bg-black col-1 h-[6px] ml-0 mt-0 relative rounded-[8px] row-1 w-[46.29%]" />
      <div className="bg-[#fb923c] col-1 h-[6px] ml-[45.37%] mt-0 relative row-1 w-[18.87%]" />
    </div>
  );
}

function Frame175() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        31 Assigned
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        21 On track
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        6 At Risk
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        0 Over Due
      </p>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame175 />
      <Separator className="h-[13px] relative shrink-0 w-px" />
    </div>
  );
}

function Frame174() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center relative shrink-0 w-full">
      <Group5 />
      <Frame129 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative size-full">
          <Frame171 />
          <Frame174 />
        </div>
      </div>
    </div>
  );
}

function MaskGroup12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.8px_0px] mask-size-[28px_28px] ml-[-2.8px] mt-0 relative row-1 size-[32.9px]" style={{ maskImage: `url("${imgImage12}")` }} data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[243.7%] left-[-30.4%] max-w-none top-[-47.26%] w-[162.47%]" src={imgImage18} />
        </div>
      </div>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#181d27] text-[14px] whitespace-nowrap">Priya Shah</p>
    </div>
  );
}

function Frame179() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame130 />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        5 Free
      </p>
    </div>
  );
}

function Frame178() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[479px]">
      <Frame179 />
    </div>
  );
}

function Frame177() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <MaskGroup12 />
      <Frame178 />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="bg-[#d4d4d4] col-1 h-[6px] ml-0 mt-0 relative rounded-[8px] row-1 w-full" />
      <div className="bg-black col-1 h-[6px] ml-0 mt-0 relative rounded-[8px] row-1 w-[87.6%]" />
      <div className="bg-[#fb923c] col-1 h-[6px] ml-[68.81%] mt-0 relative row-1 w-[18.87%]" />
    </div>
  );
}

function Frame182() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        31 Assigned
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        21 On track
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        6 At Risk
      </p>
      <Separator className="h-[13px] relative shrink-0 w-px" />
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.4] relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        0 Over Due
      </p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame182 />
      <Separator className="h-[13px] relative shrink-0 w-px" />
    </div>
  );
}

function Frame180() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center relative shrink-0 w-full">
      <Group6 />
      <Frame131 />
    </div>
  );
}

function Frame176() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame177 />
      <Frame180 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="bg-white content-stretch flex items-center p-[16px] relative shrink-0 w-[554px]">
      <div aria-hidden className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <Frame176 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <Frame106 />
      <Frame107 />
      <Frame108 />
      <Frame109 />
      <Frame110 />
      <Frame111 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="h-[425px] relative rounded-[10px] shrink-0 w-full">
      <div className="content-stretch flex items-start overflow-x-clip overflow-y-auto relative rounded-[inherit] size-full">
        <Frame105 />
      </div>
      <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame139() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] items-start left-[254px] p-[16px] rounded-[8px] top-[1014px] w-[568px]">
      <Frame140 />
      <Frame142 />
      <Frame119 />
      <Frame138 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="Desktop - 3">
      <SidebarWithChildren />
      <Frame3 />
      <Frame6 />
      <Frame18 />
      <Frame139 />
      <div className="absolute bg-white h-[631px] left-[837px] rounded-[14px] top-[1014px] w-[571px]" />
      <div className="absolute h-[582px] left-[844px] top-[1017px] w-[545px]" data-name="Screenshot 2026-09-03 at 10.50.17 AM 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[196.95%] left-[-283.81%] max-w-none top-[-3.9%] w-[347.75%]" src={imgScreenshot20260903At105017Am2} />
        </div>
      </div>
    </div>
  );
}