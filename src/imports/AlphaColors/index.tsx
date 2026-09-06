function Al() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="AL">
      <div className="bg-[#dc2626] relative rounded-[10px] shrink-0 size-[32px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal h-[24px] leading-[24px] relative shrink-0 text-[#737373] text-[16px] w-[982px]">Destructive variable</p>
    </div>
  );
}

function Al1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="AL">
      <div className="relative rounded-[10px] shrink-0 size-[32px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal h-[24px] leading-[24px] relative shrink-0 text-[#737373] text-[16px] w-[982px]">Destructive variable with white/switch/alpha-85</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#737373] text-[16px] w-[min-content]">
        <p className="leading-[24px] mb-[16px]">Use alpha colors to simulate opacity or blend modes. Figma does not provide a way to set opacity on a variable. As a workaround, we sometimes use 2 fills, generally on fills and strokes. A layer would then, for example, have a fill a 85% white and a general destructive color.</p>
        <p className="leading-[24px]">You can see this in action below:</p>
      </div>
      <Al />
      <Al1 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#737373] text-[16px] w-[min-content]">There are 2 variants: switch and non-switch. Switch will automatically switch white to black and black to white in dark mode. Non-switch will remain the color you define. Non-switch is useful for UI situations where you don’t actually want the colors to reverse, like shadows on dialogs.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[40px] text-black tracking-[-1.5px] w-full">Alpha colors</p>
      <Text1 />
    </div>
  );
}

function ComponentPageHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name=".Component Page Header">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[64px] relative size-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function TitleSpacer() {
  return <div className="h-[24px] relative shrink-0 w-[40px]" data-name="__title spacer" />;
}

function Values() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[40px] relative shrink-0" data-name="Values">
      <TitleSpacer />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[64px] justify-center leading-[0] min-w-full relative shrink-0 text-[#737373] text-[14px] w-[min-content]">
        <p className="leading-[20px]">0%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">0.01%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">3.33%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">5%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">10%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">15%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">20%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">25%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">30%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">40%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">50%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">60%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">70%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">75%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">80%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">85%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">90%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">95%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">100%</p>
      </div>
    </div>
  );
}

function InUse() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">0%</p>
      </div>
    </div>
  );
}

function SwatchHolder() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse />
    </div>
  );
}

function InUse1() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">0.01%</p>
      </div>
    </div>
  );
}

function SwatchHolder1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse1 />
    </div>
  );
}

function InUse2() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">3.33%</p>
      </div>
    </div>
  );
}

function SwatchHolder2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.03)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse2 />
    </div>
  );
}

function InUse3() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">5%</p>
      </div>
    </div>
  );
}

function SwatchHolder3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse3 />
    </div>
  );
}

function InUse4() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">10%</p>
      </div>
    </div>
  );
}

function SwatchHolder4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.1)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse4 />
    </div>
  );
}

function InUse5() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">15%</p>
      </div>
    </div>
  );
}

function SwatchHolder5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.15)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse5 />
    </div>
  );
}

function InUse6() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">20%</p>
      </div>
    </div>
  );
}

function SwatchHolder6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse6 />
    </div>
  );
}

function InUse7() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">25%</p>
      </div>
    </div>
  );
}

function SwatchHolder7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.25)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse7 />
    </div>
  );
}

function InUse8() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">30%</p>
      </div>
    </div>
  );
}

function SwatchHolder8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.3)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse8 />
    </div>
  );
}

function InUse9() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">40%</p>
      </div>
    </div>
  );
}

function SwatchHolder9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.4)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse9 />
    </div>
  );
}

function InUse10() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">50%</p>
      </div>
    </div>
  );
}

function SwatchHolder10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.5)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse10 />
    </div>
  );
}

function InUse11() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">60%</p>
      </div>
    </div>
  );
}

function SwatchHolder11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.6)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse11 />
    </div>
  );
}

function InUse12() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">70%</p>
      </div>
    </div>
  );
}

function SwatchHolder12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.7)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse12 />
    </div>
  );
}

function InUse13() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">75%</p>
      </div>
    </div>
  );
}

function SwatchHolder13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.75)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse13 />
    </div>
  );
}

function InUse14() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">80%</p>
      </div>
    </div>
  );
}

function SwatchHolder14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.8)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse14 />
    </div>
  );
}

function InUse15() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">85%</p>
      </div>
    </div>
  );
}

function SwatchHolder15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.85)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse15 />
    </div>
  );
}

function InUse16() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">90%</p>
      </div>
    </div>
  );
}

function SwatchHolder16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.9)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse16 />
    </div>
  );
}

function InUse17() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">95%</p>
      </div>
    </div>
  );
}

function SwatchHolder17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.95)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse17 />
    </div>
  );
}

function InUse18() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">100%</p>
      </div>
    </div>
  );
}

function SwatchHolder18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-black relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse18 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Black (switch)</p>
      </div>
      <SwatchHolder />
      <SwatchHolder1 />
      <SwatchHolder2 />
      <SwatchHolder3 />
      <SwatchHolder4 />
      <SwatchHolder5 />
      <SwatchHolder6 />
      <SwatchHolder7 />
      <SwatchHolder8 />
      <SwatchHolder9 />
      <SwatchHolder10 />
      <SwatchHolder11 />
      <SwatchHolder12 />
      <SwatchHolder13 />
      <SwatchHolder14 />
      <SwatchHolder15 />
      <SwatchHolder16 />
      <SwatchHolder17 />
      <SwatchHolder18 />
    </div>
  );
}

function InUse19() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">0%</p>
      </div>
    </div>
  );
}

function SwatchHolder19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse19 />
    </div>
  );
}

function InUse20() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">0.01%</p>
      </div>
    </div>
  );
}

function SwatchHolder20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse20 />
    </div>
  );
}

function InUse21() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">3.33%</p>
      </div>
    </div>
  );
}

function SwatchHolder21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.03)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse21 />
    </div>
  );
}

function InUse22() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">5%</p>
      </div>
    </div>
  );
}

function SwatchHolder22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse22 />
    </div>
  );
}

function InUse23() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">10%</p>
      </div>
    </div>
  );
}

function SwatchHolder23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse23 />
    </div>
  );
}

function InUse24() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">15%</p>
      </div>
    </div>
  );
}

function SwatchHolder24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.15)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse24 />
    </div>
  );
}

function InUse25() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">20%</p>
      </div>
    </div>
  );
}

function SwatchHolder25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse25 />
    </div>
  );
}

function InUse26() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">25%</p>
      </div>
    </div>
  );
}

function SwatchHolder26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.25)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse26 />
    </div>
  );
}

function InUse27() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">30%</p>
      </div>
    </div>
  );
}

function SwatchHolder27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.3)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse27 />
    </div>
  );
}

function InUse28() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">40%</p>
      </div>
    </div>
  );
}

function SwatchHolder28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse28 />
    </div>
  );
}

function InUse29() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">50%</p>
      </div>
    </div>
  );
}

function SwatchHolder29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse29 />
    </div>
  );
}

function InUse30() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">60%</p>
      </div>
    </div>
  );
}

function SwatchHolder30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.6)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse30 />
    </div>
  );
}

function InUse31() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">70%</p>
      </div>
    </div>
  );
}

function SwatchHolder31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.7)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse31 />
    </div>
  );
}

function InUse32() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">75%</p>
      </div>
    </div>
  );
}

function SwatchHolder32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.75)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse32 />
    </div>
  );
}

function InUse33() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">80%</p>
      </div>
    </div>
  );
}

function SwatchHolder33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.8)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse33 />
    </div>
  );
}

function InUse34() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">85%</p>
      </div>
    </div>
  );
}

function SwatchHolder34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.85)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse34 />
    </div>
  );
}

function InUse35() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">90%</p>
      </div>
    </div>
  );
}

function SwatchHolder35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse35 />
    </div>
  );
}

function InUse36() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">95%</p>
      </div>
    </div>
  );
}

function SwatchHolder36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.95)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse36 />
    </div>
  );
}

function InUse37() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">100%</p>
      </div>
    </div>
  );
}

function SwatchHolder37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-white relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse37 />
    </div>
  );
}

function Column1() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[16px] items-start min-w-[160px] p-[16px] relative rounded-[8px] shrink-0" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-white w-[min-content]">
        <p className="leading-[20px]">White (switch)</p>
      </div>
      <SwatchHolder19 />
      <SwatchHolder20 />
      <SwatchHolder21 />
      <SwatchHolder22 />
      <SwatchHolder23 />
      <SwatchHolder24 />
      <SwatchHolder25 />
      <SwatchHolder26 />
      <SwatchHolder27 />
      <SwatchHolder28 />
      <SwatchHolder29 />
      <SwatchHolder30 />
      <SwatchHolder31 />
      <SwatchHolder32 />
      <SwatchHolder33 />
      <SwatchHolder34 />
      <SwatchHolder35 />
      <SwatchHolder36 />
      <SwatchHolder37 />
    </div>
  );
}

function InUse38() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">0%</p>
      </div>
    </div>
  );
}

function SwatchHolder38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse38 />
    </div>
  );
}

function InUse39() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">0.01%</p>
      </div>
    </div>
  );
}

function SwatchHolder39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse39 />
    </div>
  );
}

function InUse40() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">3.33%</p>
      </div>
    </div>
  );
}

function SwatchHolder40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.03)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse40 />
    </div>
  );
}

function InUse41() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">5%</p>
      </div>
    </div>
  );
}

function SwatchHolder41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse41 />
    </div>
  );
}

function InUse42() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">10%</p>
      </div>
    </div>
  );
}

function SwatchHolder42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.1)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse42 />
    </div>
  );
}

function InUse43() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">15%</p>
      </div>
    </div>
  );
}

function SwatchHolder43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.15)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse43 />
    </div>
  );
}

function InUse44() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">20%</p>
      </div>
    </div>
  );
}

function SwatchHolder44() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse44 />
    </div>
  );
}

function InUse45() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">25%</p>
      </div>
    </div>
  );
}

function SwatchHolder45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.25)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse45 />
    </div>
  );
}

function InUse46() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">30%</p>
      </div>
    </div>
  );
}

function SwatchHolder46() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.3)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse46 />
    </div>
  );
}

function InUse47() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">40%</p>
      </div>
    </div>
  );
}

function SwatchHolder47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.4)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse47 />
    </div>
  );
}

function InUse48() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">50%</p>
      </div>
    </div>
  );
}

function SwatchHolder48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.5)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse48 />
    </div>
  );
}

function InUse49() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">60%</p>
      </div>
    </div>
  );
}

function SwatchHolder49() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.6)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse49 />
    </div>
  );
}

function InUse50() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">70%</p>
      </div>
    </div>
  );
}

function SwatchHolder50() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.7)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse50 />
    </div>
  );
}

function InUse51() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">75%</p>
      </div>
    </div>
  );
}

function SwatchHolder51() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.75)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse51 />
    </div>
  );
}

function InUse52() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">80%</p>
      </div>
    </div>
  );
}

function SwatchHolder52() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.8)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse52 />
    </div>
  );
}

function InUse53() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">85%</p>
      </div>
    </div>
  );
}

function SwatchHolder53() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.85)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse53 />
    </div>
  );
}

function InUse54() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">90%</p>
      </div>
    </div>
  );
}

function SwatchHolder54() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.9)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse54 />
    </div>
  );
}

function InUse55() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">95%</p>
      </div>
    </div>
  );
}

function SwatchHolder55() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(0,0,0,0.95)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse55 />
    </div>
  );
}

function InUse56() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">100%</p>
      </div>
    </div>
  );
}

function SwatchHolder56() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-black relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse56 />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Black (no-switch)</p>
      </div>
      <SwatchHolder38 />
      <SwatchHolder39 />
      <SwatchHolder40 />
      <SwatchHolder41 />
      <SwatchHolder42 />
      <SwatchHolder43 />
      <SwatchHolder44 />
      <SwatchHolder45 />
      <SwatchHolder46 />
      <SwatchHolder47 />
      <SwatchHolder48 />
      <SwatchHolder49 />
      <SwatchHolder50 />
      <SwatchHolder51 />
      <SwatchHolder52 />
      <SwatchHolder53 />
      <SwatchHolder54 />
      <SwatchHolder55 />
      <SwatchHolder56 />
    </div>
  );
}

function InUse57() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">0%</p>
      </div>
    </div>
  );
}

function SwatchHolder57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse57 />
    </div>
  );
}

function InUse58() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">0.01%</p>
      </div>
    </div>
  );
}

function SwatchHolder58() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse58 />
    </div>
  );
}

function InUse59() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">3.33%</p>
      </div>
    </div>
  );
}

function SwatchHolder59() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.03)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse59 />
    </div>
  );
}

function InUse60() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">5%</p>
      </div>
    </div>
  );
}

function SwatchHolder60() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse60 />
    </div>
  );
}

function InUse61() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">10%</p>
      </div>
    </div>
  );
}

function SwatchHolder61() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse61 />
    </div>
  );
}

function InUse62() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">15%</p>
      </div>
    </div>
  );
}

function SwatchHolder62() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.15)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse62 />
    </div>
  );
}

function InUse63() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">20%</p>
      </div>
    </div>
  );
}

function SwatchHolder63() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse63 />
    </div>
  );
}

function InUse64() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">25%</p>
      </div>
    </div>
  );
}

function SwatchHolder64() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.25)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse64 />
    </div>
  );
}

function InUse65() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">30%</p>
      </div>
    </div>
  );
}

function SwatchHolder65() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.3)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse65 />
    </div>
  );
}

function InUse66() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">40%</p>
      </div>
    </div>
  );
}

function SwatchHolder66() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse66 />
    </div>
  );
}

function InUse67() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">50%</p>
      </div>
    </div>
  );
}

function SwatchHolder67() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse67 />
    </div>
  );
}

function InUse68() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">60%</p>
      </div>
    </div>
  );
}

function SwatchHolder68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.6)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse68 />
    </div>
  );
}

function InUse69() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">70%</p>
      </div>
    </div>
  );
}

function SwatchHolder69() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.7)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse69 />
    </div>
  );
}

function InUse70() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">75%</p>
      </div>
    </div>
  );
}

function SwatchHolder70() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.75)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse70 />
    </div>
  );
}

function InUse71() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">80%</p>
      </div>
    </div>
  );
}

function SwatchHolder71() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.8)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse71 />
    </div>
  );
}

function InUse72() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">85%</p>
      </div>
    </div>
  );
}

function SwatchHolder72() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.85)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse72 />
    </div>
  );
}

function InUse73() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">90%</p>
      </div>
    </div>
  );
}

function SwatchHolder73() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse73 />
    </div>
  );
}

function InUse74() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">95%</p>
      </div>
    </div>
  );
}

function SwatchHolder74() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[rgba(255,255,255,0.95)] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse74 />
    </div>
  );
}

function InUse75() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">100%</p>
      </div>
    </div>
  );
}

function SwatchHolder75() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-white relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse75 />
    </div>
  );
}

function Column3() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[16px] items-start min-w-[160px] p-[16px] relative rounded-[8px] shrink-0" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-white w-[min-content]">
        <p className="leading-[20px]">White (no-switch)</p>
      </div>
      <SwatchHolder57 />
      <SwatchHolder58 />
      <SwatchHolder59 />
      <SwatchHolder60 />
      <SwatchHolder61 />
      <SwatchHolder62 />
      <SwatchHolder63 />
      <SwatchHolder64 />
      <SwatchHolder65 />
      <SwatchHolder66 />
      <SwatchHolder67 />
      <SwatchHolder68 />
      <SwatchHolder69 />
      <SwatchHolder70 />
      <SwatchHolder71 />
      <SwatchHolder72 />
      <SwatchHolder73 />
      <SwatchHolder74 />
      <SwatchHolder75 />
    </div>
  );
}

function Rows() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Rows">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

function Al2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0" data-name="AL">
      <Rows />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0" data-name="Content">
      <Values />
      <Al2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-start p-[64px] relative shrink-0" data-name="Content">
      <Content1 />
    </div>
  );
}

export default function AlphaColors() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Alpha colors">
      <ComponentPageHeader />
      <Content />
    </div>
  );
}