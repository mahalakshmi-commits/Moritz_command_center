import svgPaths from "./svg-qh703d9stn";

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-[207px]">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[26.4px] relative shrink-0 text-[22px] text-black tracking-[-0.5px] w-full">Good Evening, Elsa</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#a3a3a3] text-[16px] w-full">Wednesday, September 1</p>
    </div>
  );
}

function Al() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular',sans-serif] font-normal gap-[6px] items-end leading-[20px] overflow-clip relative shrink-0 text-[14px] whitespace-nowrap" data-name="AL">
      <p className="relative shrink-0 text-[#737373]">Date Range:</p>
      <p className="relative shrink-0 text-black">Last Month (Aug 1-30)</p>
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

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-white min-h-[28px] relative rounded-[8px] shrink-0" data-name="Select & Combobox - Nova">
        <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center min-h-[inherit] pl-[10px] pr-[8px] py-[4px] relative size-full">
            <Al />
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

export default function Frame2() {
  return (
    <div className="border-[#f5f5f5] border-b border-solid content-stretch flex items-start justify-between pb-[16px] pl-[16px] pr-[8px] pt-[24px] relative size-full">
      <Frame1 />
      <Frame />
    </div>
  );
}