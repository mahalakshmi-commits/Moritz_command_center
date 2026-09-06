function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Revenue by Practice area
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <Frame />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-start pt-[2px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#a3a3a3] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Net Revenue 285K
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="border-[#e5e5e5] border-b border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0 w-[96px]">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#262626] text-[12px] top-0 whitespace-nowrap">Commercial</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame1 />
      <div className="bg-[#0a0a0a] flex-[1_0_0] h-[8px] min-w-px relative rounded-[6px]" data-name="Bar" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] text-right whitespace-nowrap">$142K (33%)</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#262626] text-[12px] w-[96px]">{`Corporate, M&A`}</p>
      <div className="bg-[#0a0a0a] h-[8px] relative rounded-[6px] shrink-0 w-[198px]" data-name="Bar" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] text-right whitespace-nowrap">$76K (18%)</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#262626] text-[12px] w-[96px]">Litigation</p>
      <div className="bg-[#0a0a0a] h-[8px] relative rounded-[6px] shrink-0 w-[130px]" data-name="Bar" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] text-right whitespace-nowrap">$68K (16%)</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#262626] text-[12px] w-[96px]">Real Estate</p>
      <div className="bg-[#0a0a0a] h-[8px] relative rounded-[6px] shrink-0 w-[73px]" data-name="Bar" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] text-right whitespace-nowrap">$54K (13%)</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#262626] text-[12px] w-[96px]">Privacy</p>
      <div className="bg-[#0a0a0a] h-[8px] relative rounded-[6px] shrink-0 w-[42px]" data-name="Bar" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] text-right whitespace-nowrap">$46K (11%)</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#262626] text-[12px] w-[96px]">Employment</p>
      <div className="bg-[#0a0a0a] h-[8px] relative rounded-[6px] shrink-0 w-[36px]" data-name="Bar" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] text-right whitespace-nowrap">$42K (10%)</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start pb-[12px] pl-[16px] pr-[12px] pt-[16px] relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white border border-[#e5e5e5] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] size-full" data-name="Container">
      <Container1 />
      <Frame4 />
    </div>
  );
}